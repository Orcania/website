// import celesteOptions from 'src/components/celeste/celesteOptions';

import { store as celesteStore } from '@celeste-js/store';
import ocamintABI from 'src/static/abis/ocamint.json';
// import ocaReferralMintABI from 'src/static/abis/oca_mint_referral.json';

import { addressBook } from 'celeste.config';

const OcaMintProxy = () => {
    return {
        read: chainId => {
            const { web3Reducer } = celesteStore.getState();
            const OCA_MINT_READ = web3Reducer.contracts[`OCAMINT_READ.${chainId}`];

            const OCA_READ = web3Reducer.contracts[`OCA_READ.${chainId}`];

            return {
                price: async () => {
                    const price = await OCA_MINT_READ.methods.price().call();
                    return price;
                },
                balanceOf: async mintingContract => {
                    const balance = await OCA_READ.methods.balanceOf(mintingContract).call();
                    return balance;
                },
            };
        },

        write: chainId => {
            const { web3Reducer } = celesteStore.getState();

            const { web3 } = web3Reducer;

            const OCAMINT = new web3.eth.Contract(ocamintABI, addressBook.OCAMINT[chainId]);

            // const OCA_REFERRAL_MINT = new web3.eth.Contract(ocaReferralMintABI, addressBook.OCA_REFERRAL_MINT[chainId]);

            return {
                mint: async ({ amount }, { from, gasPrice = null, maxPriorityFeePerGas = null }) => {
                    const tx = await OCAMINT.methods.mint();

                    const data = {
                        from,
                        value: amount,
                    };

                    if (gasPrice !== null) data.gasPrice = gasPrice;
                    if (maxPriorityFeePerGas !== null) data.maxPriorityFeePerGas = maxPriorityFeePerGas;

                    return new Promise((res, rej) => {
                        try {
                            const txRes = tx.send(data);
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
