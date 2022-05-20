import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';

import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';

import { rpcs } from 'celeste.config';
import OcaMintProxy from 'src/classes/ocamint-proxy';

const mintTypes = {
    regular: 'Regular',
    wl: 'White List',
    traf: 'TRAF Holder',
};

const priceMethods = {
    regular: 'price',
    wl: 'wlPrice',
    traf: 'trafPrice',
};

const currencies = {
    97: 'BNB',
    1666700000: 'ONE',
};

const defaultPrice = BigNumber(100000000000000000)
    .div(10 ** 18)
    .toFixed(5)
    .toString();

const defaultCurrency = 'USD';

const PriceComponent = () => {
    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);

    const { mintReducer } = useSelector(state => state);

    const [price, setPrice] = useState(defaultPrice);
    const [currency, setCurrency] = useState(defaultCurrency);

    useEffect(() => {
        if (walletReducer.address === null || !web3Reducer.initialized) {
            setPrice(defaultPrice);
            setCurrency(defaultCurrency);
        }

        if (
            !Object.values(rpcs)
                .map(rpc => rpc.chainId)
                .includes(walletReducer.chainId)
        ) {
            setPrice(defaultPrice);
            setCurrency(defaultCurrency);
            return;
        }

        const { chainId } = walletReducer;

        (async () => {
            const ocaMintProxy = new OcaMintProxy().read(chainId);

            const priceBN = await ocaMintProxy[priceMethods[mintReducer.mintType]]();
            const priceDec = new BigNumber(priceBN)
                .div(10 ** 18)
                .toFixed(5)
                .toString();

            setPrice(priceDec);
            setCurrency(currencies[chainId]);
        })();
    }, [mintReducer.mintType, walletReducer.address, web3Reducer.initialized, walletReducer.chainId]);

    return (
        <div>
            <h1 className="subtitle has-text-white is-6 has-text-centered mb-1">Mint Price</h1>
            <h1 className="subtitle has-text-white is-3 has-text-centered has-font-pt-mono mb-0">
                {price} <small className="is-size-6">{currency} </small>
            </h1>
            <ConnectedWrapper>
                <NetworkWrapper>
                    <h1 className="subtitle has-text-white is-6 has-text-centered">
                        Mint Type: {mintTypes[mintReducer.mintType]}
                    </h1>
                </NetworkWrapper>
            </ConnectedWrapper>
        </div>
    );
};

export default PriceComponent;
