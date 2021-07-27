package tm

import (
	"time"

	"github.com/tendermint/tendermint/abci/types"
	"github.com/tendermint/tendermint/proto/tendermint/crypto"
	htypes "github.com/tendermint/tendermint/proto/tendermint/types"
)

func fromTMValidatorUpdates(ups []types.ValidatorUpdate) []*ValidatorUpdate {
	out := make([]*ValidatorUpdate, 0, len(ups))
	for _, up := range ups {
		out = append(out, &ValidatorUpdate{
			PubKey: &PublicKey{
				Sum: &PublicKey_Ed25519{
					Ed25519: up.PubKey.GetEd25519(),
				},
			},
			Power: up.Power,
		})
	}
	return out
}

func intoTMValidatorUpdates(ups []*ValidatorUpdate) []types.ValidatorUpdate {
	out := make([]types.ValidatorUpdate, 0, len(ups))
	for _, up := range ups {
		out = append(out, types.ValidatorUpdate{
			PubKey: crypto.PublicKey{
				Sum: &crypto.PublicKey_Ed25519{
					Ed25519: up.PubKey.GetEd25519(),
				},
			},
			Power: up.Power,
		})
	}
	return out

}

func (RequestInitChain) FromTM(t *types.RequestInitChain) *RequestInitChain {
	return &RequestInitChain{
		Time:          t.Time.unixNano(),
		ChainId:       t.ChainId,
		Validators:    fromTMValidatorUpdates(t.Validators),
		AppStateBytes: t.AppStateBytes,
	}
}

func (r *RequestInitChain) IntoTM() types.RequestInitChain {
	return types.RequestInitChain{
		Time:          unixNano(r.Time),
		ChainId:       r.ChainId,
		Validators:    intoTMValidatorUpdates(r.Validators),
		AppStateBytes: r.AppStateBytes,
	}
}

func fromTMHeader(t htypes.Header) *Header {
	return &Header{
		ChainId: t.ChainID,
		Height:  t.Height,
		Time:    t.Time.unixNano(),
	}
}

func intoTMHeader(t *Header) htypes.Header {
	return htypes.Header{
		ChainID: t.ChainId,
		Height:  t.Height,
		Time:    unixNano(t.Time),
	}
}

func (RequestBeginBlock) FromTM(t *types.RequestBeginBlock) *RequestBeginBlock {
	return &RequestBeginBlock{
		Hash:   t.Hash,
		Header: fromTMHeader(t.Header),
	}
}

func (r *RequestBeginBlock) IntoTM() types.RequestBeginBlock {
	return types.RequestBeginBlock{
		Hash:   r.Hash,
		Header: intoTMHeader(r.Header),
	}
}

func (RequestDeliverTx) FromTM(t *types.RequestDeliverTx) *RequestDeliverTx {
	return &RequestDeliverTx{
		Tx: t.Tx,
	}
}

func (r *RequestDeliverTx) IntoTM() types.RequestDeliverTx {
	return types.RequestDeliverTx{
		Tx: r.Tx,
	}
}

func unixNano(nsec int64) time.Time {
	return time.Unix(nsec/int64(time.Second), nsec%int64(time.Second)).UTC()
}
