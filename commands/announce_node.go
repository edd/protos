package commands

import (
	"encoding/hex"

	commandspb "code.vegaprotocol.io/protos/vega/commands/v1"
)

func CheckAnnounceNode(cmd *commandspb.AnnounceNode) error {
	return checkAnnounceNode(cmd).ErrorOrNil()
}

func checkAnnounceNode(cmd *commandspb.AnnounceNode) Errors {
	errs := NewErrors()

	if cmd == nil {
		return errs.FinalAddForProperty("announce_node", ErrIsRequired)
	}

	if len(cmd.VegaPubKey) == 0 {
		errs.AddForProperty("announce_node.vega_pub_key", ErrIsRequired)
	} else {
		_, err := hex.DecodeString(cmd.VegaPubKey)
		if err != nil {
			errs.AddForProperty("announce_node.vega_pub_key", ErrShouldBeHexEncoded)
		}
	}

	if len(cmd.EthereumAddress) == 0 {
		errs.AddForProperty("announce_node.ethereum_address", ErrIsRequired)
	}

	if len(cmd.ChainPubKey) == 0 {
		errs.AddForProperty("announce_node.chain_pub_key", ErrIsRequired)
	}

	return errs
}
