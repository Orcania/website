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

            // const OCA_REFERRAL_MINT = new web3.eth.Contract(ocaReferralMintABI, addressBook.OCA_REFERRAL_MINT[chainId]);

            return {
                // referral_mint: (
                //     { referralAddress, amount },
                //     { from, gasPrice = null, maxPriorityFeePerGas = null }
                // ) => {
                //     const tx = OCA_REFERRAL_MINT.methods.mint(referralAddress);

                //     const data = {
                //         from,
                //         value: amount,
                //     };

                //     if (gasPrice !== null) data.gasPrice = gasPrice;
                //     if (maxPriorityFeePerGas !== null) data.maxPriorityFeePerGas = maxPriorityFeePerGas;

                //     return new Promise((res, rej) => {
                //         try {
                //             const txRes = tx.send(data);
                //             res(txRes);
                //         } catch (e) {
                //             rej(e);
                //         }
                //     });
                // },
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
                wlMint: async ({ amount }, { from, gasPrice = null, maxPriorityFeePerGas = null }) => {
                    const tx = await OCAMINT.methods.wlMint();

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
                trafMint: async ({ amount }, { from, gasPrice = null, maxPriorityFeePerGas = null }) => {
                    const tx = await OCAMINT.methods.trafMint();

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
