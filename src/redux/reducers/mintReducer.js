/* eslint-disable default-param-last */

import { SET_MINT_TYPE } from '../constants';

const defaultState = {
    mintType: 'regular',
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_MINT_TYPE:
            return {
                ...state,
                mintType: action.payload,
            };

        default:
            return { ...state };
    }
};

export default reducer;
