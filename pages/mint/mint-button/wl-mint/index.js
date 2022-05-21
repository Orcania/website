import BigNumber from 'bignumber.js';

import OcaMintProxy from 'src/classes/ocamint-proxy';

import { store as celesteStore } from '@celeste-js/store';
import { Store as NotificationsStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'src/static/notifications';

const wlMint = async amount => {
    const ocaMintProxy = new OcaMintProxy();

    const { walletReducer } = celesteStore.getState();

    const { chainId } = walletReducer;

    const ocamint_onlyread = ocaMintProxy.read(chainId);

    const price = await ocamint_onlyread.wlPrice();

    const amountBN = BigNumber(price).times(+amount);

    // mint
    const ocaMint = ocaMintProxy.write(chainId);

    try {
        if (chainId === 137)
            await ocaMint.wlMint(
                { amount: amountBN },
                {
                    from: walletReducer.address,
                    gasPrice: '50000000000',
                    maxPriorityFeePerGas: '50000000000',
                }
            );
        else await ocaMint.wlMint({ amount: amountBN }, { from: walletReducer.address });
        NotificationsStore.addNotification(successNotification('successful mint', 'You minted OCA token successfully'));
    } catch (error) {
        NotificationsStore.addNotification(errorNotification('Error', error.message));
    }
};

export default wlMint;
