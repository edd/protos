// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: vega/commands/v1/transaction.proto

package v1

import (
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
	github_com_mwitkow_go_proto_validators "github.com/mwitkow/go-proto-validators"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

func (this *InputData) Validate() error {
	if oneOfNester, ok := this.GetCommand().(*InputData_OrderSubmission); ok {
		if oneOfNester.OrderSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OrderSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OrderSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_OrderCancellation); ok {
		if oneOfNester.OrderCancellation != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OrderCancellation); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OrderCancellation", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_OrderAmendment); ok {
		if oneOfNester.OrderAmendment != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OrderAmendment); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OrderAmendment", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_WithdrawSubmission); ok {
		if oneOfNester.WithdrawSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.WithdrawSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("WithdrawSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_ProposalSubmission); ok {
		if oneOfNester.ProposalSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.ProposalSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ProposalSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_VoteSubmission); ok {
		if oneOfNester.VoteSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.VoteSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("VoteSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_LiquidityProvisionSubmission); ok {
		if oneOfNester.LiquidityProvisionSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.LiquidityProvisionSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("LiquidityProvisionSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_DelegateSubmission); ok {
		if oneOfNester.DelegateSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.DelegateSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("DelegateSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_UndelegateAtEpochEndSubmission); ok {
		if oneOfNester.UndelegateAtEpochEndSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.UndelegateAtEpochEndSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("UndelegateAtEpochEndSubmission", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_NodeRegistration); ok {
		if oneOfNester.NodeRegistration != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.NodeRegistration); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("NodeRegistration", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_NodeVote); ok {
		if oneOfNester.NodeVote != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.NodeVote); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("NodeVote", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_NodeSignature); ok {
		if oneOfNester.NodeSignature != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.NodeSignature); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("NodeSignature", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_ChainEvent); ok {
		if oneOfNester.ChainEvent != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.ChainEvent); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("ChainEvent", err)
			}
		}
	}
	if oneOfNester, ok := this.GetCommand().(*InputData_OracleDataSubmission); ok {
		if oneOfNester.OracleDataSubmission != nil {
			if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(oneOfNester.OracleDataSubmission); err != nil {
				return github_com_mwitkow_go_proto_validators.FieldError("OracleDataSubmission", err)
			}
		}
	}
	return nil
}
func (this *Transaction) Validate() error {
	if this.Signature != nil {
		if err := github_com_mwitkow_go_proto_validators.CallValidatorIfExists(this.Signature); err != nil {
			return github_com_mwitkow_go_proto_validators.FieldError("Signature", err)
		}
	}
	return nil
}
func (this *Signature) Validate() error {
	return nil
}
