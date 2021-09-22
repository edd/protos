// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: vega/snapshot/v1/snapshot.proto

package v1

import (
	fmt "fmt"
	math "math"

	_ "code.vegaprotocol.io/protos/vega"
	proto "github.com/golang/protobuf/proto"
	github_com_mwitkow_go_proto_validators "github.com/mwitkow/go-proto-validators"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

func (this *Snapshot) Validate() error {
	return nil
}
func (this *Chunk) Validate() error {
	for _, item := range this.Data {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Data", err)
			}
		}
	}
	return nil
}
func (this *Payload) Validate() error {
	if oneOfNester, ok := this.GetData().(*Payload_ActiveAssets); ok {
		if oneOfNester.ActiveAssets != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.ActiveAssets); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ActiveAssets", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_PendingAssets); ok {
		if oneOfNester.PendingAssets != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.PendingAssets); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("PendingAssets", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_BankingWithdrawals); ok {
		if oneOfNester.BankingWithdrawals != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.BankingWithdrawals); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("BankingWithdrawals", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_BankingDeposits); ok {
		if oneOfNester.BankingDeposits != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.BankingDeposits); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("BankingDeposits", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_BankingSeen); ok {
		if oneOfNester.BankingSeen != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.BankingSeen); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("BankingSeen", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_Checkpoint); ok {
		if oneOfNester.Checkpoint != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.Checkpoint); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Checkpoint", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_CollateralAccounts); ok {
		if oneOfNester.CollateralAccounts != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.CollateralAccounts); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("CollateralAccounts", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_CollateralAssets); ok {
		if oneOfNester.CollateralAssets != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.CollateralAssets); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("CollateralAssets", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_DelegationActive); ok {
		if oneOfNester.DelegationActive != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.DelegationActive); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("DelegationActive", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_DelegationPending); ok {
		if oneOfNester.DelegationPending != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.DelegationPending); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("DelegationPending", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_GovernanceActive); ok {
		if oneOfNester.GovernanceActive != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.GovernanceActive); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("GovernanceActive", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_GovernanceEnacted); ok {
		if oneOfNester.GovernanceEnacted != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.GovernanceEnacted); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("GovernanceEnacted", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_StakingAccounts); ok {
		if oneOfNester.StakingAccounts != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.StakingAccounts); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("StakingAccounts", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_MatchingBook); ok {
		if oneOfNester.MatchingBook != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.MatchingBook); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("MatchingBook", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_NetworkParameters); ok {
		if oneOfNester.NetworkParameters != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.NetworkParameters); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("NetworkParameters", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_ExecutionMarkets); ok {
		if oneOfNester.ExecutionMarkets != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.ExecutionMarkets); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ExecutionMarkets", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_MarketPositions); ok {
		if oneOfNester.MarketPositions != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.MarketPositions); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("MarketPositions", err)
			}
		}
	}
	if oneOfNester, ok := this.GetData().(*Payload_AppState); ok {
		if oneOfNester.AppState != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.AppState); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("AppState", err)
			}
		}
	}
	return nil
}
func (this *CollateralAccounts) Validate() error {
	for _, item := range this.Accounts {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Accounts", err)
			}
		}
	}
	return nil
}
func (this *CollateralAssets) Validate() error {
	for _, item := range this.Assets {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Assets", err)
			}
		}
	}
	return nil
}
func (this *ActiveAssets) Validate() error {
	for _, item := range this.Assets {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Assets", err)
			}
		}
	}
	return nil
}
func (this *PendingAssets) Validate() error {
	for _, item := range this.Assets {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Assets", err)
			}
		}
	}
	return nil
}
func (this *Withdrawal) Validate() error {
	if this.Withdrawal != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Withdrawal); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Withdrawal", err)
		}
	}
	return nil
}
func (this *Deposit) Validate() error {
	if this.Deposit != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Deposit); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Deposit", err)
		}
	}
	return nil
}
func (this *TxRef) Validate() error {
	return nil
}
func (this *BankingWithdrawals) Validate() error {
	for _, item := range this.Withdrawals {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Withdrawals", err)
			}
		}
	}
	return nil
}
func (this *BankingDeposits) Validate() error {
	for _, item := range this.Deposit {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Deposit", err)
			}
		}
	}
	return nil
}
func (this *BankingSeen) Validate() error {
	for _, item := range this.Refs {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Refs", err)
			}
		}
	}
	return nil
}
func (this *Checkpoint) Validate() error {
	return nil
}
func (this *DelegationActive) Validate() error {
	for _, item := range this.Delegations {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Delegations", err)
			}
		}
	}
	return nil
}
func (this *DelegationPending) Validate() error {
	for _, item := range this.Delegations {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Delegations", err)
			}
		}
	}
	for _, item := range this.Undelegation {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Undelegation", err)
			}
		}
	}
	return nil
}
func (this *PendingProposal) Validate() error {
	if this.Proposal != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Proposal); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Proposal", err)
		}
	}
	for _, item := range this.Yes {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Yes", err)
			}
		}
	}
	for _, item := range this.No {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("No", err)
			}
		}
	}
	for _, item := range this.Invalid {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Invalid", err)
			}
		}
	}
	return nil
}
func (this *GovernanceEnacted) Validate() error {
	for _, item := range this.Proposals {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Proposals", err)
			}
		}
	}
	return nil
}
func (this *GovernanceActive) Validate() error {
	for _, item := range this.Proposals {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Proposals", err)
			}
		}
	}
	return nil
}
func (this *StakingAccount) Validate() error {
	for _, item := range this.Events {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Events", err)
			}
		}
	}
	return nil
}
func (this *StakingAccounts) Validate() error {
	for _, item := range this.Accounts {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Accounts", err)
			}
		}
	}
	return nil
}
func (this *MatchingBook) Validate() error {
	for _, item := range this.Buy {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Buy", err)
			}
		}
	}
	for _, item := range this.Sell {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Sell", err)
			}
		}
	}
	return nil
}
func (this *NetParams) Validate() error {
	for _, item := range this.Params {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Params", err)
			}
		}
	}
	return nil
}
func (this *DecimalMap) Validate() error {
	return nil
}
func (this *TimePrice) Validate() error {
	return nil
}
func (this *PriceVolume) Validate() error {
	return nil
}
func (this *PriceRange) Validate() error {
	return nil
}
func (this *PriceBound) Validate() error {
	if this.Trigger != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Trigger); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Trigger", err)
		}
	}
	return nil
}
func (this *PriceRangeCache) Validate() error {
	if this.Bound != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Bound); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Bound", err)
		}
	}
	if this.Range != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Range); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Range", err)
		}
	}
	return nil
}
func (this *PriceMonitor) Validate() error {
	for _, item := range this.FpHorizons {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("FpHorizons", err)
			}
		}
	}
	for _, item := range this.Bounds {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Bounds", err)
			}
		}
	}
	for _, item := range this.PriceRangeCache {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("PriceRangeCache", err)
			}
		}
	}
	for _, item := range this.RefPriceCache {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("RefPriceCache", err)
			}
		}
	}
	return nil
}
func (this *AuctionState) Validate() error {
	if this.End != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.End); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("End", err)
		}
	}
	return nil
}
func (this *EquityShareLP) Validate() error {
	return nil
}
func (this *EquityShare) Validate() error {
	for _, item := range this.Lps {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Lps", err)
			}
		}
	}
	return nil
}
func (this *Market) Validate() error {
	if this.Market != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Market); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Market", err)
		}
	}
	if this.PriceMonitor != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.PriceMonitor); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("PriceMonitor", err)
		}
	}
	if this.AuctionState != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.AuctionState); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("AuctionState", err)
		}
	}
	for _, item := range this.PeggedOrders {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("PeggedOrders", err)
			}
		}
	}
	for _, item := range this.ExpiringOrders {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ExpiringOrders", err)
			}
		}
	}
	if this.EquityShare != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.EquityShare); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("EquityShare", err)
		}
	}
	return nil
}
func (this *ExecutionMarkets) Validate() error {
	for _, item := range this.Markets {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Markets", err)
			}
		}
	}
	return nil
}
func (this *Position) Validate() error {
	return nil
}
func (this *MarketPositions) Validate() error {
	for _, item := range this.Positions {
		if item != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(item); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("Positions", err)
			}
		}
	}
	return nil
}
func (this *AppState) Validate() error {
	return nil
}
