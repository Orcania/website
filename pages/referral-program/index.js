/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { ConnectedWrapper, useCelesteSelector } from '@celeste-js/react';
import { Store as NotificationStore } from 'react-notifications-component';
import { useDispatch } from 'react-redux';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { open_modal } from 'src/redux/actions';

import { infoNotification } from 'src/static/notifications';

const baseLink = 'https://orcania.io/ico?referral=';

const MintPage = () => {
    const { web3Reducer, walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

    const [referralLink, setReferralLink] = useState(baseLink);

    const copyAddress = () => {
        if (!web3Reducer.initialized || walletReducer.address == null) return;

        const { address } = walletReducer;

        // copy address to clipboard

        navigator.clipboard.writeText(referralLink);

        // show notification
        NotificationStore.addNotification(infoNotification('Link copied to clipboard'));
    };

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address == null) return;

        const { address } = walletReducer;

        setReferralLink(`${baseLink}${address}`);
    }, [web3Reducer.initialized, walletReducer.address]);

    return (
        <div className="has-background-primary2dark mb-0">
            <div className="container px-5" style={{ paddingBottom: '8rem', paddingTop: '8rem' }}>
                <div className="box box-wrapper">
                    <div className="box has-background-dark-o-8 px-6 orcania-box-container">
                        <div className="orcania-box" />
                        <div className="columns is-reverse is-vcentered">
                            <div className="column is-5" data-aos="fade-down">
                                <section className="mb-6">
                                    <h1
                                        className="subtitle has-text-light-purple has-text-centered-mobile"
                                        style={{ fontSize: '3rem' }}
                                    >
                                        Orcania Referral Program
                                    </h1>
                                </section>
                                <section className="mb-6">
                                    <p className="has-text-white is-size-5 has-text-centered-mobile">
                                        Invite your friends to purchase OCA and earn 5% reward from their purcahses on
                                        any blockchain. <br />
                                        <br />
                                        Example:
                                        <ul>
                                            <br />
                                            <li className="mb-5">
                                                If your friend purchases 1000 OCA on Ethereum using your referral link,
                                                they will get 1000 OCA and you will instantly receive a 50 OCA reward on
                                                Ethereum.
                                            </li>
                                            <li>
                                                If your friend purchases 1000 OCA on BSC using your referral link, they
                                                will get 1000 OCA and you will instantly receive a 50 OCA reward on BSC.
                                            </li>
                                        </ul>
                                    </p>
                                </section>

                                <section className="mb-6">
                                    <ConnectedWrapper>
                                        <div className="has-text-white is-size-6">{referralLink}</div>
                                    </ConnectedWrapper>
                                    <br />
                                    <ConnectedWrapper
                                        disconnectedComponent={
                                            <button
                                                className="button is-fullwidth has-background-hsatblue-o-1 has-text-hsatblue is-size-5 has-border-2-hsatblue-o-10 copylinkbutton"
                                                type="button"
                                                onClick={() => {
                                                    dispatch(
                                                        open_modal({
                                                            modalName: 'walletsModal',
                                                        })
                                                    );
                                                }}
                                            >
                                                <span className="icon">
                                                    <i className="fas fa-wallet" />
                                                </span>
                                                <span>Connect Wallet to Get Referral Link</span>
                                            </button>
                                        }
                                    >
                                        <button
                                            className="button is-fullwidth has-background-hsatblue-o-1 has-text-hsatblue is-size-5 has-border-2-hsatblue-o-10 copylinkbutton"
                                            onClick={copyAddress}
                                        >
                                            <span className="icon">
                                                <i className="fas fa-copy" />
                                            </span>
                                            <b>Copy Referral Link</b>
                                        </button>
                                    </ConnectedWrapper>
                                </section>
                            </div>

                            <div className="column is-1 is-hidden-mobile" />

                            <div className="column px-6" data-aos="fade-up">
                                <figure className="image is-square">
                                    <img src="media/pages/referral/banner.svg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Referral Program');

export default MintPage;
