/* eslint-disable import/prefer-default-export */
import { SET_MINT_TYPE } from '../constants';

export const set_mint_type = data => {
    return {
        type: SET_MINT_TYPE,
        payload: data,
    };
};
