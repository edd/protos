package commands_test

import (
	"testing"

	"code.vegaprotocol.io/protos/commands"
	types "code.vegaprotocol.io/protos/vega"
	commandspb "code.vegaprotocol.io/protos/vega/commands/v1"

	"github.com/stretchr/testify/assert"
)

func TestNilWithdrawSubmissionFails(t *testing.T) {
	err := checkWithdrawSubmission(nil)

	assert.Contains(t, err.Get("withdraw_submission"), commands.ErrIsRequired)
}

func TestWithdrawSubmission(t *testing.T) {
	var cases = []struct {
		withdraw  commandspb.WithdrawSubmission
		errString string
	}{
		{
			withdraw: commandspb.WithdrawSubmission{
				Amount: "100",
				Asset:  "OKASSETID",
			},
		},
		{
			withdraw: commandspb.WithdrawSubmission{
				Amount: "100",
				Asset:  "OKASSETID",
				Ext: &types.WithdrawExt{
					Ext: &types.WithdrawExt_Erc20{
						Erc20: &types.Erc20WithdrawExt{
							ReceiverAddress: "0xsomething",
						},
					},
				},
			},
		},
		{
			withdraw: commandspb.WithdrawSubmission{
				Asset: "OKASSETID",
			},
			errString: "withdraw_submission.amount (is required)",
		},
		{
			withdraw: commandspb.WithdrawSubmission{
				Amount: "100",
			},
			errString: "withdraw_submission.asset (is required)",
		},
		{
			withdraw:  commandspb.WithdrawSubmission{},
			errString: "withdraw_submission.amount (is required), withdraw_submission.asset (is required)",
		},
		{
			withdraw: commandspb.WithdrawSubmission{
				Ext: &types.WithdrawExt{},
			},
			errString: "withdraw_ext.ext (unsupported withdraw extended details), withdraw_submission.amount (is required), withdraw_submission.asset (is required)",
		},
		{
			withdraw: commandspb.WithdrawSubmission{
				Amount: "100",
				Asset:  "OKASSETID",
				Ext: &types.WithdrawExt{
					Ext: &types.WithdrawExt_Erc20{
						Erc20: &types.Erc20WithdrawExt{},
					},
				},
			},
			errString: "withdraw_ext.erc20.received_address (is required)",
		},
		{
			withdraw: commandspb.WithdrawSubmission{
				Ext: &types.WithdrawExt{
					Ext: &types.WithdrawExt_Erc20{
						Erc20: &types.Erc20WithdrawExt{},
					},
				},
			},
			errString: "withdraw_ext.erc20.received_address (is required), withdraw_submission.amount (is required), withdraw_submission.asset (is required)",
		},
	}

	for _, c := range cases {
		err := commands.CheckWithdrawSubmission(&c.withdraw)
		if len(c.errString) <= 0 {
			assert.NoError(t, err)
			continue
		}
		assert.Error(t, err)
		assert.EqualError(t, err, c.errString)
	}
}

func checkWithdrawSubmission(cmd *commandspb.WithdrawSubmission) commands.Errors {
	err := commands.CheckWithdrawSubmission(cmd)

	e, ok := err.(commands.Errors)
	if !ok {
		return commands.NewErrors()
	}

	return e
}
