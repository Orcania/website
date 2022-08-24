/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';

import { rpcs } from 'celeste.config.js';

import { open_modal, set_mint_type } from 'src/redux/actions';

import OcaMintProxy from 'src/classes/ocamint-proxy';
import TrafProxy from 'src/classes/traf-proxy';

import api from 'src/api';

import defaultMint from './default-mint';
import referralMint from './referral-mint';
import wlMint from './wl-mint';
import trafMint from './traf-mint';

const MintButton = props => {
    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    const { amount, disabled, insufficientBalance } = props;

    const [mintType, setMintType] = useState('regular');
    const [loadingType, setLoadingType] = useState(true);
    const [loading, setLoading] = useState(false);

    const onMintClick = async () => {
        setLoading(true);
        switch (mintType) {
            case 'regular':
                await defaultMint(amount);
                break;

            default:
                break;
        }
        setLoading(false);
    };

    // useEffect(() => {

    //     if(!web3Reducer.initialized || walletReducer.address === null) {
    //         setBalanceEnough(true);
    //     }

    //     const {web3} = web3Reducer;
    //     const balanceBN = web3.eth.getBalance(walletReducer.address);

    //     if(balanceBN.lt(amount)ceEnough(false);
    //     }

    // }, [amount, walletReducer.address, web3Reducer.initialized]);

    /* *~~*~~*~~*~~* CONSULT STATE *~~*~~*~~*~~* */

    useEffect(() => {
        if (walletReducer.address === null || !web3Reducer.initialized) {
            dispatch(set_mint_type('regular'));
            return;
        }

        if (
            !Object.values(rpcs)
                .map(rpc => +rpc.chainId)
                .includes(+walletReducer.chainId)
        ) {
            dispatch(set_mint_type('regular'));
            console.log('nokas');
            return;
        }

        (async () => {
            // 1. check if network is eth mainnet
            // if (+walletReducer.chainId === 1) {
            //     // 1.2 check if user is traf holder
            //     const trafRead = new TrafProxy().read();

            //     const balance = await trafRead.balanceOf(walletReducer.address);

            //     if (balance > 0) {
            //         setMintType('traf');
            //         dispatch(set_mint_type('traf'));
            //         return;
            //     }
            // }

            // 1. check if user is wl
            const { chainId } = walletReducer;
            const oca_mint_proxy = new OcaMintProxy(chainId);

            const oca_mint_proxy_read = oca_mint_proxy.read(chainId);

            const isWl = await oca_mint_proxy_read.whiteListed(walletReducer.address);

            if (isWl) {
                setMintType('wl');
                dispatch(set_mint_type('wl'));
                return;
            }

            // 2. check if user is partner holder
            try {
                const res = await api.get.partnerHolder({ user: walletReducer.address, chainId });

                if (res.data.success) {
                    setMintType('partner');
                    dispatch(set_mint_type('partner'));
                    return;
                }
            } catch (err) {
                // do nothing
            }

            setMintType('regular');
            dispatch(set_mint_type('regular'));
            // } else if (isReferralMint) {
            //     setMintType('referral');
            //     dispatch(set_mint_type('regular'));
            // } else {
            //     setMintType('regular');
            //     dispatch(set_mint_type('regular'));
            // }
        })();

        setLoadingType(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [walletReducer.address, web3Reducer.initialized, walletReducer.chainId]);

    return (
        <ConnectedWrapper
            disconnectedComponent={
                <button
                    className="button is-fullwidth mint-button has-text-weight-bold"
                    onClick={() => {
                        dispatch(open_modal({ modalName: 'walletsModal' }));
                    }}
                    type="button"
                >
                    Connect Wallet
                </button>
            }
        >
            <NetworkWrapper
                info={
                    <div className="box has-text-centered p-2 has-background-primary-o-2">
                        <h1 className="subtitle has-text-hsatblue">Switch to a valid network</h1>
                    </div>
                }
            >
                <button
                    className={`button is-fullwidth mint-button has-text-weight-bold ${loading ? 'is-loading' : ''}`}
                    type="button"
                    onClick={onMintClick}
                    disabled={disabled}
                >
                    {insufficientBalance ? 'Insufficient balance' : 'Buy'}
                </button>
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default MintButton;
