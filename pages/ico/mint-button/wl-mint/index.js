import BigNumber from 'bignumber.js';

import OcaMintProxy from 'src/classes/ocamint-proxy';

import { store as celesteStore } from '@celeste-js/store';
import { Store as NotificationsStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'src/static/notifications';

const wlMint = async amount => {
    const { walletReducer } = celesteStore.getState();

    const { chainId } = walletReducer;
    const ocaMintProxy = new OcaMintProxy(chainId);

    const ocamint_onlyread = ocaMintProxy.read();

    const price = await ocamint_onlyread.whiteListPrice();

    const amountBN = BigNumber(price).times(+amount);

    // mint
    const ocaMint = ocaMintProxy.write();

    try {
        await ocaMint.whiteListMint({ amount: amountBN }, { from: walletReducer.address });

        NotificationsStore.addNotification(
            successNotification('Successful mint', `You minted ${amount} OCA successfully`)
        );
    } catch (error) {
        NotificationsStore.addNotification(errorNotification('Failed tx', error.message));
    }
};

export default wlMint;
