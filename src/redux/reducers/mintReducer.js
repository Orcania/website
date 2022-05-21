/* eslint-disable default-param-last */

import { SET_MINT_TYPE, SET_PRICE_BN } from '../constants';

const defaultState = {
    mintType: 'regular',
    priceBN: '0',
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_MINT_TYPE:
            return {
                ...state,
                mintType: action.payload,
            };

        case SET_PRICE_BN:
            return {
                ...state,
                priceBN: action.payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;
