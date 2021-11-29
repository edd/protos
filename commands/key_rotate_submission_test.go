package commands_test

import (
	"testing"

	"code.vegaprotocol.io/protos/commands"
	commandspb "code.vegaprotocol.io/protos/vega/commands/v1"

	"github.com/stretchr/testify/assert"
)

func TestSubmittingNoKeyRotateSubmissionCommandFails(t *testing.T) {
	err := checkKeyRotateSubmission(nil)

	assert.Contains(t, err.Get("key_rotate_submission"), commands.ErrIsRequired)
}

func TestKeyRotateSubmissionSubmittingEmptyCommandFails(t *testing.T) {
	err := checkKeyRotateSubmission(&commandspb.KeyRotateSubmission{})

	assert.Contains(t, err.Get("key_rotate_submission.new_pub_key"), commands.ErrIsRequired)
	assert.Contains(t, err.Get("key_rotate_submission.key_number"), commands.ErrIsRequired)
	assert.Contains(t, err.Get("key_rotate_submission.current_pub_key_hash"), commands.ErrIsRequired)
	assert.Contains(t, err.Get("key_rotate_submission.target_block"), commands.ErrIsRequired)
}

func TestKeyRotateSubmissionMissingNewPubKeyFails(t *testing.T) {
	err := checkKeyRotateSubmission(&commandspb.KeyRotateSubmission{
		KeyNumber:         10,
		TargetBlock:       100,
		CurrentPubKeyHash: "w3werertdg",
	})

	assert.Contains(t, err.Get("key_rotate_submission.new_pub_key"), commands.ErrIsRequired)
}

func TestKeyRotateSubmissionMissingKeyNumberFails(t *testing.T) {
	err := checkKeyRotateSubmission(&commandspb.KeyRotateSubmission{
		NewPubKey:         "123456789abcdef",
		TargetBlock:       100,
		CurrentPubKeyHash: "w3werertdg",
	})

	assert.Contains(t, err.Get("key_rotate_submission.key_number"), commands.ErrIsRequired)
}

func TestKeyRotateSubmissionMissingCurrentPubKeyHashFails(t *testing.T) {
	err := checkKeyRotateSubmission(&commandspb.KeyRotateSubmission{
		NewPubKey:   "123456789abcdef",
		KeyNumber:   10,
		TargetBlock: 100,
	})

	assert.Contains(t, err.Get("key_rotate_submission.current_pub_key_hash"), commands.ErrIsRequired)
}

func TestKeyRotateSubmissionMissingTargetBlockFails(t *testing.T) {
	err := checkKeyRotateSubmission(&commandspb.KeyRotateSubmission{
		NewPubKey:         "123456789abcdef",
		KeyNumber:         10,
		CurrentPubKeyHash: "w3werertdg",
	})

	assert.Contains(t, err.Get("key_rotate_submission.target_block"), commands.ErrIsRequired)
}

func TestSubmittingEmptyCommandSuccess(t *testing.T) {
	err := checkKeyRotateSubmission(&commandspb.KeyRotateSubmission{
		KeyNumber:         10,
		NewPubKey:         "123456789abcdef",
		TargetBlock:       100,
		CurrentPubKeyHash: "w3werertdg",
	})

	assert.True(t, err.Empty())
}

func checkKeyRotateSubmission(cmd *commandspb.KeyRotateSubmission) commands.Errors {
	err := commands.CheckKeyRotateSubmission(cmd)

	e, ok := err.(commands.Errors)
	if !ok {
		return commands.NewErrors()
	}
	return e
}
