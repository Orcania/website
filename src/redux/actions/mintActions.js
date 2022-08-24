import { SET_MINT_TYPE, SET_PRICE_BN, SET_PARTNER_ADDRESS } from '../constants';

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

export const set_partner_address = data => {
    return {
        type: SET_PARTNER_ADDRESS,
        payload: data,
    };
};
