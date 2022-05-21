import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';
import { useDispatch, useSelector } from 'react-redux';

import { rpcs } from 'celeste.config.js';

import { open_modal, set_mint_type } from 'src/redux/actions';

import OcaMintProxy from 'src/classes/ocamint-proxy';
import TrafProxy from 'src/classes/traf-proxy';
import { useEffect, useState } from 'react';

import defaultMint from './default-mint';
import wlMint from './wl-mint';
import trafMint from './traf-mint';

const MintButton = props => {
    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();
    const { mintReducer } = useSelector(state => state);

    const { amount, disabled } = props;

    const [mintType, setMintType] = useState('default');
    const [loadingType, setLoadingType] = useState(true);

    const onMintClick = async () => {
        switch (mintType) {
            case 'regular':
                await defaultMint(amount);
                break;

            case 'wl':
                await wlMint(amount);
                break;

            case 'traf':
                await trafMint(amount);
                break;

            default:
                break;
        }
    };

    // useEffect(() => {
    //     window.addEventListener('keydown', e => {
    //         if (e.key === 'h') {
    //             console.log(celesteStore.getState());
    //         }
    //     });
    // }, []);

    /* *~~*~~*~~*~~* CONSULT STATE *~~*~~*~~*~~* */

    // console.log(mintType);

    useEffect(() => {
        if (walletReducer.address === null || !web3Reducer.initialized) {
            dispatch(set_mint_type('regular'));
            return;
        }

        if (
            !Object.values(rpcs)
                .map(rpc => rpc.chainId)
                .includes(walletReducer.chainId)
        ) {
            dispatch(set_mint_type('regular'));
            return;
        }

        (async () => {
            // 1. check if network is eth mainnet
            if (+walletReducer.chainId === 97) {
                // 1.2 check if user is traf holder
                const trafRead = new TrafProxy().read();

                const balance = await trafRead.balanceOf(walletReducer.address);

                if (balance > 0) {
                    setMintType('traf');
                    dispatch(set_mint_type('traf'));
                    return;
                }
            }

            // 2. check if user is wl
            const oca_mint_proxy = new OcaMintProxy();

            const { chainId } = walletReducer;

            const oca_mint_proxy_read = oca_mint_proxy.read(chainId);

            const isWl = await oca_mint_proxy_read.whiteListed(walletReducer.address);

            if (isWl) {
                setMintType('wl');
                dispatch(set_mint_type('wl'));
            } else {
                setMintType('regular');
                dispatch(set_mint_type('regular'));
            }
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
                    className={`button is-fullwidth mint-button has-text-weight-bold ${
                        loadingType ? 'is-loading' : ''
                    }`}
                    type="button"
                    onClick={onMintClick}
                    disabled={disabled}
                >
                    Mint
                </button>

                {/* <button
                    className="button is-fullwidth mint-button has-text-weight-bold"
                    type="button"
                    onClick={onWlMintClick}
                >
                    WL Mint
                </button> */}
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default MintButton;
