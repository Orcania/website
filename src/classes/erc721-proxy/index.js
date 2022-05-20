// import celesteOptions from 'src/components/celeste/celesteOptions';

import { store as celesteStore } from '@celeste-js/store';
import ocamintABI from 'src/static/abis/ocamint.json';

import { addressBook } from 'celeste.config';

const OcaMintProxy = () => {
    return {
        read: chainId => {
            const { web3Reducer } = celesteStore.getState();
            const OCA_MINT_READ = web3Reducer.contracts[`OCAMINT_READ.${chainId}`];

            return {
                price: async () => {
                    const price = await OCA_MINT_READ.methods.price().call();
                    return price;
                },
                wlPrice: async () => {
                    const wlPrice = await OCA_MINT_READ.methods.wlPrice().call();
                    return wlPrice;
                },
                trafPrice: async () => {
                    const trafPrice = await OCA_MINT_READ.methods.trafPrice().call();
                    return trafPrice;
                },
                whiteListed: async address => {
                    const whiteListed = await OCA_MINT_READ.methods.whiteListed(address).call();
                    return whiteListed;
                },
            };
        },

        write: chainId => {
            const { web3Reducer } = celesteStore.getState();

            const { web3 } = web3Reducer;

            const OCAMINT = new web3.eth.Contract(ocamintABI, addressBook.OCAMINT[chainId]);

            return {
                mint: async ({ amount }, { from }) => {
                    const tx = await OCAMINT.methods.mint();

                    return new Promise((res, rej) => {
                        try {
                            const txRes = tx.send({ from, value: amount });
                            res(txRes);
                        } catch (e) {
                            rej(e);
                        }
                    });
                },
            };
        },
    };
};

export default OcaMintProxy;
