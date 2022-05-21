import OcaMintProxy from 'src/classes/ocamint-proxy';

import { store as celesteStore } from '@celeste-js/store';
import { Store as NotificationsStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'src/static/notifications';
import BigNumber from 'bignumber.js';

const defaultMint = async amount => {
    const ocaMintProxy = new OcaMintProxy();

    const { walletReducer, web3Reducer } = celesteStore.getState();

    const { web3 } = web3Reducer;

    const { chainId } = walletReducer;

    const ocamint_onlyread = ocaMintProxy.read(chainId);

    const price = await ocamint_onlyread.price();

    const amountBN = BigNumber(price).times(+amount);

    // mint
    const ocaMint = ocaMintProxy.write(chainId);

    try {
        if (chainId === 137)
            await ocaMint.mint(
                { amount: amountBN },
                {
                    from: walletReducer.address,
                    gasPrice: '50000000000',
                    maxPriorityFeePerGas: '50000000000',
                }
            );
        else await ocaMint.mint({ amount: amountBN }, { from: walletReducer.address });

        NotificationsStore.addNotification(successNotification('successful mint', 'You minted OCA token successfully'));
    } catch (error) {
        NotificationsStore.addNotification(errorNotification('Error', error.message));
    }
};

export default defaultMint;
