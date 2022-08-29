/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
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
                    address: addressBook[`OCA_${chainId}`], // addressBook.OCA[chainId],
                    symbol: 'OCA',
                    decimals: 18,
                    image: 'https://orcania.io/media/pages/token/token_logo.svg', // A string url of the token logo
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
