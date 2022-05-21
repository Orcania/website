/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';

import { addressBook } from 'celeste.config';

const addTokenToWallet = () => {
    const { walletReducer } = useCelesteSelector(state => state);

    const handleAddTokenClick = async () => {
        const { chainId } = walletReducer;

        const wasAdded = await ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: '0x23cEaF84D1C973a0b2fb7E5a83918E3248D5dE57', // addressBook.OCA[chainId],
                    symbol: 'OCA',
                    decimals: 18,
                    image: 'https://orcania.io/static/media/token_logo.58787c92.svg', // A string url of the token logo
                },
            },
        });
    };

    return (
        <ConnectedWrapper>
            <NetworkWrapper>
                <h1
                    className="subtitle has-text-light-purple is-6 has-text-centered  is-clickable"
                    onClick={handleAddTokenClick}
                >
                    <u>Add OCA to Metamask</u>
                </h1>
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default addTokenToWallet;
