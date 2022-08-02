/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';

import { rpcs, addressBook } from 'celeste.config';

import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';

import OcaMintProxy from 'src/classes/ocamint-proxy';
import { set_price_bn } from 'src/redux/actions';

function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'G' },
        { value: 1e12, symbol: 'T' },
        { value: 1e15, symbol: 'P' },
        { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
        .slice()
        .reverse()
        .find(itemm => num >= itemm.value);
    return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
}

const mintTypes = {
    regular: '',
};

const priceMethods = {
    regular: 'price',
};

const currencies = {
    1: 'ETH',
    56: 'BNB',
    28: 'ETH',
};

const chains = ['media/chain-logos/eth.svg', 'media/chain-logos/boba.svg', 'media/chain-logos/bsc.svg'];

const defaultPrice = +BigNumber(100000000000000000)
    .div(10 ** 18)
    .toFixed(7)
    .toString();

const priceTemplates = {
    regular: (normalPrice, price) => price,
};
const defaultCurrency = 'USD';

const PriceComponent = () => {
    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);

    const { mintReducer } = useSelector(state => state);

    const dispatch = useDispatch();
    const [normalPrice, setNormalPrice] = useState(defaultPrice);
    const [price, setPrice] = useState(defaultPrice);
    const [currency, setCurrency] = useState(defaultCurrency);
    const [amountLeft, setAmountLeft] = useState('0');

    // calc price for currenct connected chain id
    useEffect(() => {
        if (walletReducer.address === null || !web3Reducer.initialized) {
            setNormalPrice(defaultPrice);
            setPrice(defaultPrice);
            setCurrency(defaultCurrency);
            dispatch(set_price_bn('100000000000000000'));
        }

        if (
            !Object.values(rpcs)
                .map(rpc => rpc.chainId)
                .includes(walletReducer.chainId)
        ) {
            setNormalPrice(defaultPrice);
            setPrice(defaultPrice);
            setCurrency(defaultCurrency);
            dispatch(set_price_bn('100000000000000000'));
            return;
        }

        const { chainId } = walletReducer;

        (async () => {
            const ocaMintProxy = new OcaMintProxy().read(chainId);

            const normalPriceBN = await ocaMintProxy.price();
            // eslint-disable-next-line no-shadow
            const normalPrice = +new BigNumber(normalPriceBN)
                .div(10 ** 18)
                .toFixed(7)
                .toString();

            const priceBN = await ocaMintProxy[priceMethods[mintReducer.mintType]]();
            const priceDec = +new BigNumber(priceBN)
                .div(10 ** 18)
                .toFixed(7)
                .toString();

            setNormalPrice(normalPrice);
            setPrice(priceDec);
            dispatch(set_price_bn(priceBN));
            setCurrency(currencies[chainId]);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mintReducer.mintType, walletReducer.address, web3Reducer.initialized, walletReducer.chainId]);

    useEffect(() => {
        if (!web3Reducer.readonly_initialized) {
            return;
        }

        const chain = walletReducer.chainId || 1;

        (async () => {
            const OcaSC = new OcaMintProxy().read(chain);

            const amountLeftBN = await OcaSC.balanceOf(addressBook.OCAMINT[chain]);

            const amountLeftt = +new BigNumber(amountLeftBN)
                .div(10 ** 18)
                .toFixed(7)
                .toString();

            const amountLeftFormatted = nFormatter(amountLeftt, 2);

            setAmountLeft(amountLeftFormatted);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [walletReducer.chainId, walletReducer.address, web3Reducer.readonly_initialized]);

    return (
        <div className="columns">
            <div className="column">
                <h1 className="subtitle has-text-white is-6 has-text-centered mb-1">OCA Price</h1>
                <h1 className="subtitle has-text-white is-4 has-text-centered has-font-pt-mono mb-2">
                    {priceTemplates[mintReducer.mintType](normalPrice, price)}{' '}
                    <small className="is-size-6">{currency} </small>
                </h1>
                <ConnectedWrapper>
                    <NetworkWrapper>
                        <h1 className="subtitle is-6 has-text-centered" style={{ color: '#45ff73' }}>
                            {mintTypes[mintReducer.mintType]}
                        </h1>
                    </NetworkWrapper>
                </ConnectedWrapper>
            </div>
            <div className="column">
                <h1 className="title has-text-white is-6 has-text-centered">Amount left</h1>
                <h1 className="subtitle has-text-white is-4 has-text-centered has-font-pt-mono mb-2">
                    {amountLeft} <small className="is-size-6">OCA</small>
                </h1>
            </div>
            <div className="column">
                <h1 className="title has-text-white is-6 has-text-centered mb-2">Supported Chains</h1>
                <ul className="is-flex is-flex-direction-row is-justify-content-center">
                    {chains.map(chain => (
                        <li key={Math.floor(Math.random() * 1000000)}>
                            <figure className="image is-32x32 mr-1">
                                <img src={chain} alt="" height={32} />
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PriceComponent;
