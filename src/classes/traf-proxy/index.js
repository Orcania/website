// import celesteOptions from 'src/components/celeste/celesteOptions';

import { store as celesteStore } from '@celeste-js/store';

const trafProxy = () => {
    return {
        read: () => {
            const { web3Reducer } = celesteStore.getState();

            const trafRead = web3Reducer.contracts['TRAF_READ.97'];

            return {
                balanceOf: async address => {
                    const balance = await trafRead.methods.balanceOf(address).call();

                    return balance;
                },
            };
        },
    };
};

export default trafProxy;
