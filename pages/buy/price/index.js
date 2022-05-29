import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';

import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';

import { rpcs } from 'celeste.config';
import OcaMintProxy from 'src/classes/ocamint-proxy';
import { set_price_bn } from 'src/redux/actions';

const mintTypes = {
    regular: '',
    wl: 'You are White Listed !!',
    traf: 'You are a TRAF Holder !!',
};

const priceMethods = {
    regular: 'price',
    wl: 'wlPrice',
    traf: 'trafPrice',
};

const currencies = {
    1: 'ETH',
    56: 'BNB',
    137: 'MATIC',
    1666600000: 'ONE',
};

const defaultPrice = +BigNumber(100000000000000000)
    .div(10 ** 18)
    .toFixed(7)
    .toString();

const priceTemplates = {
    regular: (normalPrice, price) => price,
    wl: (normalPrice, price) => (
        <>
            <del className="mr-2">{normalPrice}</del>
            <span style={{ color: '#45ff73' }}>{price}</span>
        </>
    ),
    traf: (normalPrice, price) => (
        <>
            <del className="mr-2">{normalPrice}</del>
            <span style={{ color: '#45ff73' }}>{price}</span>
        </>
    ),
};
const defaultCurrency = 'USD';

const PriceComponent = () => {
    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);

    const { mintReducer } = useSelector(state => state);

    const dispatch = useDispatch();
    const [normalPrice, setNormalPrice] = useState(defaultPrice);
    const [price, setPrice] = useState(defaultPrice);
    const [currency, setCurrency] = useState(defaultCurrency);

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
    }, [mintReducer.mintType, walletReducer.address, web3Reducer.initialized, walletReducer.chainId]);

    return (
        <div>
            <h1 className="subtitle has-text-white is-6 has-text-centered mb-1">Buy Price</h1>
            <h1 className="subtitle has-text-white is-3 has-text-centered has-font-pt-mono mb-2">
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
    );
};

export default PriceComponent;
