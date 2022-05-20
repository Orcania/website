import {
    useCeleste,
    ConnectedWrapper,
    ConnectButton,
    NetworkWrapper,
    useCelesteSelector,
    useCelesteStore,
} from '@celeste-js/react';
import { useDispatch } from 'react-redux';
import { open_modal } from 'src/redux/actions';

import OcaMintProxy from 'src/classes/ocamint-proxy';
import erc721Proxy from 'src/classes/erc721-proxy';
import { useEffect } from 'react';

import { Store as NotificationsStore } from 'react-notifications-component';
import { errorNotification } from 'src/static/notifications';

const MintButton = () => {
    const celesteStore = useCelesteStore();
    const { walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    const onMintClick = async () => {
        const oca_mint_proxy = new OcaMintProxy();

        const { chainId } = walletReducer;

        const oca_mint_proxy_read = oca_mint_proxy.read(chainId);

        const price = await oca_mint_proxy_read.price();

        const oca_mint = oca_mint_proxy.write(chainId);

        await oca_mint.mint({ amount: price }, { from: walletReducer.address });
    };

    const onWlMintClick = async () => {
        const oca_mint_proxy = new OcaMintProxy();

        const { chainId } = walletReducer;

        const oca_mint_proxy_read = oca_mint_proxy.read(chainId);

        const userIsWhiteListed = await oca_mint_proxy_read.whiteListed(walletReducer.address);

        if (!userIsWhiteListed) {
            NotificationsStore.addNotification(errorNotification('Error', 'You are not white listed'));
            return;
        }

        const wlPrice = await oca_mint_proxy_read.wlPrice();

        const oca_mint = oca_mint_proxy.write(chainId);

        await oca_mint.mint({ amount: wlPrice }, { from: walletReducer.address });
    };

    const onTrafMintClick = async () => {
        const oca_mint_proxy = new OcaMintProxy();
        const erc721Proxy = new erc721Proxy();

        const erc721read = await erc721Proxy.read();

        const isHolder = (await erc721read.balanceOf(walletReducer.address)) > 0;

        if (!isHolder) {
            NotificationsStore.addNotification(errorNotification('Error', 'You are not a traf holder'));
            return;
        }

        // const { chainId } = walletReducer;

        // const userIsWhiteListed = await oca_mint_proxy_read.whiteListed(walletReducer.address);

        // const trafPrice = await oca_mint_proxy_read.trafPrice();

        // const oca_mint = oca_mint_proxy.write(chainId);

        // await oca_mint.mint({ amount: trafPrice }, { from: walletReducer.address });
    };

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.key === 'h') {
                console.log(celesteStore.getState());
            }
        });
    }, []);

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
                    className="button is-fullwidth mint-button has-text-weight-bold"
                    type="button"
                    onClick={onMintClick}
                >
                    Mint
                </button>

                <button
                    className="button is-fullwidth mint-button has-text-weight-bold"
                    type="button"
                    onClick={onWlMintClick}
                >
                    WL Mint
                </button>
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default MintButton;
