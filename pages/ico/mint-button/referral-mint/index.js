import OcaMintProxy from 'src/classes/ocamint-proxy';

import { store as celesteStore } from '@celestejs/store';
import { Store as NotificationsStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'src/static/notifications';
import BigNumber from 'bignumber.js';

const referralMint = async (amount, referralAddress) => {
    const ocaMintProxy = new OcaMintProxy();

    const { walletReducer } = celesteStore.getState();

    const { chainId } = walletReducer;

    const ocamint_onlyread = ocaMintProxy.read(chainId);

    const price = await ocamint_onlyread.price();

    const amountBN = BigNumber(price).times(+amount);

    // mint
    const ocaMint = ocaMintProxy.write(chainId);

    try {
        if (+chainId === 137) {
            await ocaMint.referral_mint(
                { amount: amountBN, referralAddress },
                {
                    from: walletReducer.address,
                    gasPrice: '50000000000',
                    maxPriorityFeePerGas: '50000000000',
                }
            );
        } else await ocaMint.referral_mint({ amount: amountBN, referralAddress }, { from: walletReducer.address });

        NotificationsStore.addNotification(
            successNotification('Successful mint', `You minted ${amount} OCA successfully`)
        );
    } catch (error) {
        NotificationsStore.addNotification(errorNotification('Error', error.message));
    }
};

export default referralMint;
