import { SET_MINT_TYPE, SET_PRICE_BN } from '../constants';

export const set_mint_type = data => {
    return {
        type: SET_MINT_TYPE,
        payload: data,
    };
};

export const set_price_bn = data => {
    return {
        type: SET_PRICE_BN,
        payload: data,
    };
};
