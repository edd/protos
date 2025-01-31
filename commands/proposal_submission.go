package commands

import (
	"errors"
	"fmt"
	"math"
	"math/big"
	"strconv"
	"strings"

	types "code.vegaprotocol.io/protos/vega"
	commandspb "code.vegaprotocol.io/protos/vega/commands/v1"
	oraclespb "code.vegaprotocol.io/protos/vega/oracles/v1"
)

const (
	MaxDuration30DaysNs int64 = 2592000000000000
	ReferenceMaxLen     int   = 100
)

func CheckProposalSubmission(cmd *commandspb.ProposalSubmission) error {
	return checkProposalSubmission(cmd).ErrorOrNil()
}

func checkProposalSubmission(cmd *commandspb.ProposalSubmission) Errors {
	errs := NewErrors()

	if cmd == nil {
		return errs.FinalAddForProperty("proposal_submission", ErrIsRequired)
	}

	if len(cmd.Reference) > ReferenceMaxLen {
		errs.AddForProperty("proposal_submission.reference", ErrReferenceTooLong)
	}

	if cmd.Terms == nil {
		return errs.FinalAddForProperty("proposal_submission.terms", ErrIsRequired)
	}

	if cmd.Terms.ClosingTimestamp <= 0 {
		errs.AddForProperty("proposal_submission.terms.closing_timestamp", ErrMustBePositive)
	}

	if cmd.Terms.ValidationTimestamp < 0 {
		errs.AddForProperty("proposal_submission.terms.validation_timestamp", ErrMustBePositiveOrZero)
	}

	if cmd.Terms.ValidationTimestamp >= cmd.Terms.ClosingTimestamp {
		errs.AddForProperty("proposal_submission.terms.validation_timestamp",
			errors.New("cannot be after or equal to closing time"),
		)
	}

	switch cmd.Terms.Change.(type) {
	case *types.ProposalTerms_NewFreeform:
		if cmd.Terms.EnactmentTimestamp != 0 {
			errs.AddForProperty("proposal_submission.terms.enactment_timestamp", ErrIsNotValid)
		}
	default:
		if cmd.Terms.EnactmentTimestamp <= 0 {
			errs.AddForProperty("proposal_submission.terms.enactment_timestamp", ErrMustBePositive)
		}

		if cmd.Terms.ClosingTimestamp > cmd.Terms.EnactmentTimestamp {
			errs.AddForProperty("proposal_submission.terms.closing_timestamp",
				errors.New("cannot be after enactment time"),
			)
		}
	}

	errs.Merge(checkProposalChanges(cmd.Terms))

	return errs
}

func checkProposalChanges(terms *types.ProposalTerms) Errors {
	errs := NewErrors()

	if terms.Change == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change", ErrIsRequired)
	}

	switch c := terms.Change.(type) {
	case *types.ProposalTerms_NewMarket:
		errs.Merge(checkNewMarketChanges(c))
	case *types.ProposalTerms_UpdateMarket:
		errs.Merge(checkUpdateMarketChanges(c))
	case *types.ProposalTerms_UpdateNetworkParameter:
		errs.Merge(checkNetworkParameterUpdateChanges(c))
	case *types.ProposalTerms_NewAsset:
		errs.Merge(checkNewAssetChanges(c))
	case *types.ProposalTerms_NewFreeform:
		errs.Merge(CheckNewFreeformChanges(c))
	default:
		return errs.FinalAddForProperty("proposal_submission.terms.change", ErrIsNotValid)
	}

	return errs
}

func checkNetworkParameterUpdateChanges(change *types.ProposalTerms_UpdateNetworkParameter) Errors {
	errs := NewErrors()

	if change.UpdateNetworkParameter == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_network_parameter", ErrIsRequired)
	}

	if change.UpdateNetworkParameter.Changes == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_network_parameter.changes", ErrIsRequired)
	}

	parameter := change.UpdateNetworkParameter.Changes

	if len(parameter.Key) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.update_network_parameter.changes.key", ErrIsRequired)
	}

	if len(parameter.Value) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.update_network_parameter.changes.value", ErrIsRequired)
	}

	return errs
}

func checkNewAssetChanges(change *types.ProposalTerms_NewAsset) Errors {
	errs := NewErrors()

	if change.NewAsset == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_asset", ErrIsRequired)
	}

	if change.NewAsset.Changes == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_asset.changes", ErrIsRequired)
	}

	if change.NewAsset.Changes.Source == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_asset.changes.source", ErrIsRequired)
	}

	if len(change.NewAsset.Changes.Name) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.name", ErrIsRequired)
	}
	if len(change.NewAsset.Changes.Symbol) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.symbol", ErrIsRequired)
	}
	if change.NewAsset.Changes.Decimals == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.decimals", ErrIsRequired)
	}
	if len(change.NewAsset.Changes.TotalSupply) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.total_supply", ErrIsRequired)
	} else {
		if totalSupply, ok := big.NewInt(0).SetString(change.NewAsset.Changes.TotalSupply, 10); !ok {
			errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.total_supply", ErrIsNotValidNumber)
		} else if totalSupply.Cmp(big.NewInt(0)) <= 0 {
			errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.total_supply", ErrMustBePositive)
		}
	}

	switch s := change.NewAsset.Changes.Source.(type) {
	case *types.AssetDetails_BuiltinAsset:
		errs.Merge(checkBuiltinAssetSource(s))
	case *types.AssetDetails_Erc20:
		errs.Merge(checkERC20AssetSource(s))
	default:
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_asset.changes.source", ErrIsNotValid)
	}

	return errs
}

func CheckNewFreeformChanges(change *types.ProposalTerms_NewFreeform) Errors {
	errs := NewErrors()

	if change.NewFreeform.Changes == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_freeform.changes", ErrIsRequired)
	}

	if len(change.NewFreeform.Changes.Url) == 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_freeform.url", ErrIsRequired)
	}

	if len(change.NewFreeform.Changes.Description) > 255 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_freeform.description", ErrIsRequired)
	}

	if len(change.NewFreeform.Changes.Hash) == 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_freeform.hash", ErrIsRequired)
	}

	return errs
}

func checkBuiltinAssetSource(s *types.AssetDetails_BuiltinAsset) Errors {
	errs := NewErrors()

	if s.BuiltinAsset == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_asset.changes.source.builtin_asset", ErrIsRequired)
	}

	asset := s.BuiltinAsset

	if len(asset.MaxFaucetAmountMint) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.source.builtin_asset.max_faucet_amount_mint", ErrIsRequired)
	} else {
		if maxFaucetAmount, ok := big.NewInt(0).SetString(asset.MaxFaucetAmountMint, 10); !ok {
			return errs.FinalAddForProperty("proposal_submission.terms.change.new_asset.changes.source.builtin_asset.max_faucet_amount_mint", ErrIsNotValidNumber)
		} else if maxFaucetAmount.Cmp(big.NewInt(0)) <= 0 {
			errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.source.builtin_asset.max_faucet_amount_mint", ErrMustBePositive)
		}
	}

	return errs
}

func checkERC20AssetSource(s *types.AssetDetails_Erc20) Errors {
	errs := NewErrors()

	if s.Erc20 == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_asset.changes.source.erc20", ErrIsRequired)
	}

	asset := s.Erc20

	if len(asset.ContractAddress) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_asset.changes.source.erc20.contract_address", ErrIsRequired)
	}

	return errs
}

func checkNewMarketChanges(change *types.ProposalTerms_NewMarket) Errors {
	errs := NewErrors()

	if change.NewMarket == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market", ErrIsRequired)
	}

	errs.Merge(checkLiquidityCommitment(change.NewMarket.LiquidityCommitment))

	if change.NewMarket.Changes == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes", ErrIsRequired)
	}

	changes := change.NewMarket.Changes

	if changes.DecimalPlaces >= 150 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.decimal_places", ErrMustBeLessThan150)
	}

	if changes.PositionDecimalPlaces >= 7 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.position_decimal_places", ErrMustBeLessThan7)
	}

	errs.Merge(checkPriceMonitoring(changes.PriceMonitoringParameters, "proposal_submission.terms.change.new_market.changes"))
	errs.Merge(checkLiquidityMonitoring(changes.LiquidityMonitoringParameters, "proposal_submission.terms.change.new_market.changes"))
	errs.Merge(checkNewInstrument(changes.Instrument))
	errs.Merge(checkNewRiskParameters(changes))

	return errs
}

func checkUpdateMarketChanges(change *types.ProposalTerms_UpdateMarket) Errors {
	errs := NewErrors()

	if change.UpdateMarket == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market", ErrIsRequired)
	}

	if len(change.UpdateMarket.MarketId) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.update_market.market_id", ErrIsRequired)
	}

	if change.UpdateMarket.Changes == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes", ErrIsRequired)
	}

	changes := change.UpdateMarket.Changes

	errs.Merge(checkPriceMonitoring(changes.PriceMonitoringParameters, "proposal_submission.terms.change.update_market.changes"))
	errs.Merge(checkLiquidityMonitoring(changes.LiquidityMonitoringParameters, "proposal_submission.terms.change.update_market.changes"))
	errs.Merge(checkUpdateInstrument(changes.Instrument))
	errs.Merge(checkUpdateRiskParameters(changes))

	return errs
}

func checkPriceMonitoring(parameters *types.PriceMonitoringParameters, parentProperty string) Errors {
	errs := NewErrors()

	if parameters == nil || len(parameters.Triggers) == 0 {
		return errs
	}

	if len(parameters.Triggers) > 5 {
		errs.AddForProperty(fmt.Sprintf("%s.price_monitoring_parameters.triggers", parentProperty), errors.New("maximum 5 triggers allowed"))
	}

	for i, trigger := range parameters.Triggers {
		if trigger.Horizon <= 0 {
			errs.AddForProperty(fmt.Sprintf("%s.price_monitoring_parameters.triggers.%d.horizon", parentProperty, i), ErrMustBePositive)
		}
		if trigger.AuctionExtension <= 0 {
			errs.AddForProperty(fmt.Sprintf("%s.price_monitoring_parameters.triggers.%d.auction_extension", parentProperty, i), ErrMustBePositive)
		}

		probability, err := strconv.ParseFloat(trigger.Probability, 64)

		if err != nil {
			errs.AddForProperty(fmt.Sprintf("%s.price_monitoring_parameters.triggers.%d.probability", parentProperty, i),
				errors.New("must be numeric and be between 0 (exclusive) and 1 (exclusive)"),
			)
		}

		if probability <= 0 || probability >= 1 {
			errs.AddForProperty(fmt.Sprintf("%s.price_monitoring_parameters.triggers.%d.probability", parentProperty, i),
				errors.New("should be between 0 (exclusive) and 1 (exclusive)"),
			)
		}
	}

	return errs
}

func checkLiquidityMonitoring(parameters *types.LiquidityMonitoringParameters, parentProperty string) Errors {
	errs := NewErrors()

	if parameters == nil {
		return errs
	}

	if parameters.TriggeringRatio < 0 || parameters.TriggeringRatio > 1 {
		errs.AddForProperty(
			fmt.Sprintf("%s.liquidity_monitoring_parameters.triggering_ratio", parentProperty),
			errors.New("should be between 0 (inclusive) and 1 (inclusive)"),
		)
	}

	if parameters.TargetStakeParameters == nil {
		return errs.FinalAddForProperty(fmt.Sprintf("%s.liquidity_monitoring_parameters.target_stake_parameters", parentProperty), ErrIsRequired)
	}

	if parameters.TargetStakeParameters.TimeWindow <= 0 {
		errs.AddForProperty(fmt.Sprintf("%s.liquidity_monitoring_parameters.target_stake_parameters.time_window", parentProperty), ErrMustBePositive)
	}
	if parameters.TargetStakeParameters.ScalingFactor <= 0 {
		errs.AddForProperty(fmt.Sprintf("%s.liquidity_monitoring_parameters.target_stake_parameters.scaling_factor", parentProperty), ErrMustBePositive)
	}

	return errs
}

func checkNewInstrument(instrument *types.InstrumentConfiguration) Errors {
	errs := NewErrors()

	if instrument == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.instrument", ErrIsRequired)
	}

	if len(instrument.Name) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.name", ErrIsRequired)
	}
	if len(instrument.Code) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.code", ErrIsRequired)
	}

	if instrument.Product == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product", ErrIsRequired)
	}

	switch product := instrument.Product.(type) {
	case *types.InstrumentConfiguration_Future:
		errs.Merge(checkNewFuture(product.Future))
	default:
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product", ErrIsNotValid)
	}

	return errs
}

func checkUpdateInstrument(instrument *types.UpdateInstrumentConfiguration) Errors {
	errs := NewErrors()

	if instrument == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.instrument", ErrIsRequired)
	}

	if len(instrument.Code) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.update_market.changes.instrument.code", ErrIsRequired)
	}

	if instrument.Product == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product", ErrIsRequired)
	}

	switch product := instrument.Product.(type) {
	case *types.UpdateInstrumentConfiguration_Future:
		errs.Merge(checkUpdateFuture(product.Future))
	default:
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product", ErrIsNotValid)
	}

	return errs
}

func checkNewFuture(future *types.FutureProduct) Errors {
	errs := NewErrors()

	if future == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future", ErrIsRequired)
	}

	if len(future.SettlementAsset) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future.settlement_asset", ErrIsRequired)
	}
	if len(future.QuoteName) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future.quote_name", ErrIsRequired)
	}

	errs.Merge(checkOracleSpec(future.OracleSpecForSettlementPrice, "oracle_spec_for_settlement_price", "proposal_submission.terms.change.new_market.changes.instrument.product.future"))
	errs.Merge(checkOracleSpec(future.OracleSpecForTradingTermination, "oracle_spec_for_trading_termination", "proposal_submission.terms.change.new_market.changes.instrument.product.future"))
	errs.Merge(checkNewOracleBinding(future))

	return errs
}

func checkUpdateFuture(future *types.UpdateFutureProduct) Errors {
	errs := NewErrors()

	if future == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product.future", ErrIsRequired)
	}

	if len(future.QuoteName) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product.future.quote_name", ErrIsRequired)
	}

	errs.Merge(checkOracleSpec(future.OracleSpecForSettlementPrice, "oracle_spec_for_settlement_price", "proposal_submission.terms.change.update_market.changes.instrument.product.future"))
	errs.Merge(checkOracleSpec(future.OracleSpecForTradingTermination, "oracle_spec_for_trading_termination", "proposal_submission.terms.change.update_market.changes.instrument.product.future"))
	errs.Merge(checkUpdateOracleBinding(future))

	return errs
}

func checkOracleSpec(spec *oraclespb.OracleSpecConfiguration, name string, parentProperty string) Errors {
	errs := NewErrors()
	if spec == nil {
		return errs.FinalAddForProperty(fmt.Sprintf("%s.%s", parentProperty, name), ErrIsRequired)
	}

	if isBuiltInSpec(spec.Filters) {
		return checkOracleSpecFilters(spec, name, parentProperty)
	}

	if len(spec.PubKeys) == 0 {
		errs.AddForProperty(fmt.Sprintf("%s.%s.pub_keys", parentProperty, name), ErrIsRequired)
	}
	for i, key := range spec.PubKeys {
		if len(strings.TrimSpace(key)) == 0 {
			errs.AddForProperty(fmt.Sprintf("%s.%s.pub_keys.%d", parentProperty, name, i), ErrIsNotValid)
		}
	}

	errs.Merge(checkOracleSpecFilters(spec, name, parentProperty))

	return errs
}

func isBuiltInSpec(filters []*oraclespb.Filter) bool {
	if len(filters) != 1 {
		return false
	}

	if filters[0].Key == nil || filters[0].Conditions == nil {
		return false
	}

	if strings.HasPrefix(filters[0].Key.Name, "vegaprotocol.builtin") && filters[0].Key.Type == oraclespb.PropertyKey_TYPE_TIMESTAMP {
		return true
	}

	return false
}

func checkOracleSpecFilters(spec *oraclespb.OracleSpecConfiguration, name string, parentProperty string) Errors {
	errs := NewErrors()

	if len(spec.Filters) == 0 {
		return errs.FinalAddForProperty(fmt.Sprintf("%s.%s.filters", parentProperty, name), ErrIsRequired)
	}

	for i, filter := range spec.Filters {
		if filter.Key == nil {
			errs.AddForProperty(fmt.Sprintf("%s.%s.filters.%d.key", parentProperty, name, i), ErrIsNotValid)
		} else {
			if len(filter.Key.Name) == 0 {
				errs.AddForProperty(fmt.Sprintf("%s.%s.filters.%d.key.name", parentProperty, name, i), ErrIsRequired)
			}
			if filter.Key.Type == oraclespb.PropertyKey_TYPE_UNSPECIFIED {
				errs.AddForProperty(fmt.Sprintf("%s.%s.filters.%d.key.type", parentProperty, name, i), ErrIsRequired)
			}
		}

		if len(filter.Conditions) != 0 {
			for j, condition := range filter.Conditions {
				if len(condition.Value) == 0 {
					errs.AddForProperty(fmt.Sprintf("%s.%s.filters.%d.conditions.%d.value", parentProperty, name, i, j), ErrIsRequired)
				}
				if condition.Operator == oraclespb.Condition_OPERATOR_UNSPECIFIED {
					errs.AddForProperty(fmt.Sprintf("%s.%s.filters.%d.conditions.%d.operator", parentProperty, name, i, j), ErrIsRequired)
				}
			}
		}
	}

	return errs
}

func isBindingMatchingSpec(spec *oraclespb.OracleSpecConfiguration, bindingProperty string) bool {
	bindingPropertyFound := false
	if spec != nil && spec.Filters != nil {
		for _, filter := range spec.Filters {
			if filter.Key != nil && filter.Key.Name == bindingProperty {
				bindingPropertyFound = true
			}
		}
	}
	return bindingPropertyFound
}

func checkNewOracleBinding(future *types.FutureProduct) Errors {
	errs := NewErrors()
	if future.OracleSpecBinding != nil {
		if len(future.OracleSpecBinding.SettlementPriceProperty) == 0 {
			errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future.oracle_spec_binding.settlement_price_property", ErrIsRequired)
		} else {
			if !isBindingMatchingSpec(future.OracleSpecForSettlementPrice, future.OracleSpecBinding.SettlementPriceProperty) {
				errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future.oracle_spec_binding.settlement_price_property", ErrIsMismatching)
			}
		}

		if len(future.OracleSpecBinding.TradingTerminationProperty) == 0 {
			errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future.oracle_spec_binding.trading_termination_property", ErrIsRequired)
		} else {
			if !isBindingMatchingSpec(future.OracleSpecForTradingTermination, future.OracleSpecBinding.TradingTerminationProperty) {
				errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future.oracle_spec_binding.trading_termination_property", ErrIsMismatching)
			}
		}
	} else {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.instrument.product.future.oracle_spec_binding", ErrIsRequired)
	}

	return errs
}

func checkUpdateOracleBinding(future *types.UpdateFutureProduct) Errors {
	errs := NewErrors()
	if future.OracleSpecBinding != nil {
		if len(future.OracleSpecBinding.SettlementPriceProperty) == 0 {
			errs.AddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product.future.oracle_spec_binding.settlement_price_property", ErrIsRequired)
		} else {
			if !isBindingMatchingSpec(future.OracleSpecForSettlementPrice, future.OracleSpecBinding.SettlementPriceProperty) {
				errs.AddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product.future.oracle_spec_binding.settlement_price_property", ErrIsMismatching)
			}
		}

		if len(future.OracleSpecBinding.TradingTerminationProperty) == 0 {
			errs.AddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product.future.oracle_spec_binding.trading_termination_property", ErrIsRequired)
		} else {
			if !isBindingMatchingSpec(future.OracleSpecForTradingTermination, future.OracleSpecBinding.TradingTerminationProperty) {
				errs.AddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product.future.oracle_spec_binding.trading_termination_property", ErrIsMismatching)
			}
		}
	} else {
		errs.AddForProperty("proposal_submission.terms.change.update_market.changes.instrument.product.future.oracle_spec_binding", ErrIsRequired)
	}

	return errs
}

func checkNewRiskParameters(config *types.NewMarketConfiguration) Errors {
	errs := NewErrors()

	if config.RiskParameters == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters", ErrIsRequired)
	}

	switch parameters := config.RiskParameters.(type) {
	case *types.NewMarketConfiguration_Simple:
		errs.Merge(checkNewSimpleParameters(parameters))
	case *types.NewMarketConfiguration_LogNormal:
		errs.Merge(checkNewLogNormalRiskParameters(parameters))
	default:
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters", ErrIsNotValid)
	}

	return errs
}

func checkUpdateRiskParameters(config *types.UpdateMarketConfiguration) Errors {
	errs := NewErrors()

	if config.RiskParameters == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters", ErrIsRequired)
	}

	switch parameters := config.RiskParameters.(type) {
	case *types.UpdateMarketConfiguration_Simple:
		errs.Merge(checkUpdateSimpleParameters(parameters))
	case *types.UpdateMarketConfiguration_LogNormal:
		errs.Merge(checkUpdateLogNormalRiskParameters(parameters))
	default:
		errs.AddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters", ErrIsNotValid)
	}

	return errs
}

func checkNewSimpleParameters(params *types.NewMarketConfiguration_Simple) Errors {
	errs := NewErrors()

	if params.Simple == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.simple", ErrIsRequired)
	}

	if params.Simple.MinMoveDown > 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.simple.min_move_down", ErrMustBeNegativeOrZero)
	}

	if params.Simple.MaxMoveUp < 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.simple.max_move_up", ErrMustBePositiveOrZero)
	}

	if params.Simple.ProbabilityOfTrading < 0 || params.Simple.ProbabilityOfTrading > 1 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.simple.probability_of_trading",
			fmt.Errorf("should be between 0 (inclusive) and 1 (inclusive)"),
		)
	}

	return errs
}

func checkUpdateSimpleParameters(params *types.UpdateMarketConfiguration_Simple) Errors {
	errs := NewErrors()

	if params.Simple == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.simple", ErrIsRequired)
	}

	if params.Simple.MinMoveDown > 0 {
		errs.AddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.simple.min_move_down", ErrMustBeNegativeOrZero)
	}

	if params.Simple.MaxMoveUp < 0 {
		errs.AddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.simple.max_move_up", ErrMustBePositiveOrZero)
	}

	if params.Simple.ProbabilityOfTrading < 0 || params.Simple.ProbabilityOfTrading > 1 {
		errs.AddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.simple.probability_of_trading",
			fmt.Errorf("should be between 0 (inclusive) and 1 (inclusive)"),
		)
	}

	return errs
}

func checkNewLogNormalRiskParameters(params *types.NewMarketConfiguration_LogNormal) Errors {
	errs := NewErrors()

	if params.LogNormal == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal", ErrIsRequired)
	}

	if params.LogNormal.Params == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal.params", ErrIsRequired)
	}

	if params.LogNormal.RiskAversionParameter <= 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal.risk_aversion_parameter", ErrMustBePositive)
	}

	if params.LogNormal.Tau <= 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal.tau", ErrMustBePositive)
	}

	if math.IsNaN(params.LogNormal.Params.Mu) {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal.params.mu", ErrIsNotValidNumber)
	}

	if math.IsNaN(params.LogNormal.Params.Sigma) {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal.params.sigma", ErrIsNotValidNumber)
	}

	if params.LogNormal.Params.Sigma <= 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal.params.sigma", ErrMustBePositive)
	}

	if math.IsNaN(params.LogNormal.Params.R) {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.changes.risk_parameters.log_normal.params.r", ErrIsNotValidNumber)
	}

	return errs
}

func checkUpdateLogNormalRiskParameters(params *types.UpdateMarketConfiguration_LogNormal) Errors {
	errs := NewErrors()

	if params.LogNormal == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal", ErrIsRequired)
	}

	if params.LogNormal.Params == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal.params", ErrIsRequired)
	}

	if params.LogNormal.RiskAversionParameter <= 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal.risk_aversion_parameter", ErrMustBePositive)
	}

	if params.LogNormal.Tau <= 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal.tau", ErrMustBePositive)
	}

	if math.IsNaN(params.LogNormal.Params.Mu) {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal.params.mu", ErrIsNotValidNumber)
	}

	if math.IsNaN(params.LogNormal.Params.Sigma) {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal.params.sigma", ErrIsNotValidNumber)
	}

	if params.LogNormal.Params.Sigma <= 0 {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal.params.sigma", ErrMustBePositive)
	}

	if math.IsNaN(params.LogNormal.Params.R) {
		return errs.FinalAddForProperty("proposal_submission.terms.change.update_market.changes.risk_parameters.log_normal.params.r", ErrIsNotValidNumber)
	}

	return errs
}

func checkLiquidityCommitment(commitment *types.NewMarketCommitment) Errors {
	errs := NewErrors()

	if commitment == nil {
		return errs.FinalAddForProperty("proposal_submission.terms.change.new_market.liquidity_commitment", ErrIsRequired)
	}

	if len(commitment.CommitmentAmount) <= 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.liquidity_commitment.commitment_amount", ErrMustBePositive)
	} else {
		if commitmentAmount, ok := big.NewInt(0).SetString(commitment.CommitmentAmount, 10); !ok {
			errs.AddForProperty("proposal_submission.terms.change.new_market.liquidity_commitment.commitment_amount", ErrNotAValidInteger)
		} else {
			if commitmentAmount.Cmp(big.NewInt(0)) != 1 {
				errs.AddForProperty("proposal_submission.terms.change.new_market.liquidity_commitment.commitment_amount", ErrMustBePositive)
			}
		}
	}
	if len(commitment.Fee) == 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.liquidity_commitment.fee", ErrIsRequired)
	}
	fee, err := strconv.ParseFloat(commitment.Fee, 64)
	if err != nil {
		errs.AddForProperty("proposal_submission.terms.change.new_market.liquidity_commitment.fee", ErrIsNotValidNumber)
	} else if fee < 0 {
		errs.AddForProperty("proposal_submission.terms.change.new_market.liquidity_commitment.fee", ErrMustBePositiveOrZero)
	}

	errs.Merge(checkShape(commitment.Buys, types.Side_SIDE_BUY))
	errs.Merge(checkShape(commitment.Sells, types.Side_SIDE_SELL))

	return errs
}

func checkShape(orders []*types.LiquidityOrder, side types.Side) Errors {
	errs := NewErrors()

	humanizedSide := "buys"
	if side == types.Side_SIDE_SELL {
		humanizedSide = "sells"
	}

	if len(orders) == 0 {
		return errs.FinalAddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s", humanizedSide), ErrIsRequired)
	}

	for i, order := range orders {
		if order.Reference == types.PeggedReference_PEGGED_REFERENCE_UNSPECIFIED {
			errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.reference.%d", humanizedSide, i), ErrIsRequired)
		}
		if _, ok := types.PeggedReference_name[int32(order.Reference)]; !ok {
			errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.reference.%d", humanizedSide, i), ErrIsNotValid)
		}

		if order.Proportion == 0 {
			errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.proportion.%d", humanizedSide, i), ErrIsRequired)
		}

		if side == types.Side_SIDE_BUY {
			switch order.Reference {
			case types.PeggedReference_PEGGED_REFERENCE_BEST_ASK:
				errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.reference.%d", humanizedSide, i),
					errors.New("cannot have a reference of type BEST_ASK when on BUY side"),
				)
			case types.PeggedReference_PEGGED_REFERENCE_BEST_BID:
				offset, ok := big.NewInt(0).SetString(order.Offset, 10)
				if !ok {
					errs.AddForProperty(
						fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i),
						ErrNotAValidInteger,
					)

					break
				}

				if offset.Cmp(big.NewInt(0)) == -1 {
					errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i), ErrMustBePositiveOrZero)
				}
			case types.PeggedReference_PEGGED_REFERENCE_MID:
				offset, ok := big.NewInt(0).SetString(order.Offset, 10)
				if !ok {
					errs.AddForProperty(
						fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i),
						ErrNotAValidInteger,
					)

					break
				}

				if offset.Cmp(big.NewInt(0)) == -1 || offset.Cmp(big.NewInt(0)) == 0 {
					errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i), ErrMustBePositive)
				}
			}
			continue
		}

		switch order.Reference {
		case types.PeggedReference_PEGGED_REFERENCE_BEST_BID:
			errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.reference.%d", humanizedSide, i),
				errors.New("cannot have a reference of type BEST_BID when on SELL side"),
			)
		case types.PeggedReference_PEGGED_REFERENCE_BEST_ASK:
			offset, ok := big.NewInt(0).SetString(order.Offset, 10)
			if !ok {
				errs.AddForProperty(
					fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i),
					ErrNotAValidInteger,
				)

				break
			}

			if offset.Cmp(big.NewInt(0)) == -1 {
				errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i), ErrMustBePositiveOrZero)
			}
		case types.PeggedReference_PEGGED_REFERENCE_MID:
			offset, ok := big.NewInt(0).SetString(order.Offset, 10)
			if !ok {
				errs.AddForProperty(
					fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i),
					ErrNotAValidInteger,
				)

				break
			}

			if offset.Cmp(big.NewInt(0)) == -1 || offset.Cmp(big.NewInt(0)) == 0 {
				errs.AddForProperty(fmt.Sprintf("proposal_submission.terms.change.new_asset.liquidity_commitment.%s.offset.%d", humanizedSide, i), ErrMustBePositive)
			}
		}

	}

	return errs
}
