/* eslint-disable @next/next/no-img-element */
import Modal from 'src/components/commons/modal';
import CardLayout from 'src/layouts/card';
// import appEvents, { EventGenerator } from 'src/static/app.events';
import { onConnectError } from 'src/static/notifications-functions';
import { start_close_modal } from 'src/redux/actions';
import wallets from 'src/static/wallets-list';

import { useSelector, useDispatch } from 'react-redux';
import { ConnectButton } from '@celeste-js/react';

import styles from './styles.module.scss';

const { outter_box, closebutton } = styles;

const WalletsModal = () => {
    // app state
    const dispatch = useDispatch();
    const { walletsModal } = useSelector(state => state.modalReducer);

    const closeModal = () => dispatch(start_close_modal());

    return (
        <Modal isOpen={walletsModal.isOpen}>
            <div className="resize-manager">
                <div className={`box has-background-hgra2 ${outter_box}`}>
                    <div className="box has-background-dark-o-8 pb-0">
                        <CardLayout
                            header={
                                <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                                    <h1 className="subtitle is-size-5 has-text-white is-flex-grow-a">
                                        Select a wallet
                                    </h1>

                                    <button
                                        href=""
                                        className={`has-text-white is-small is-flex ${closebutton}`}
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            }
                            content={
                                <div className="pb-5">
                                    <ul className="coolscroll-small">
                                        {wallets.map(wallet => (
                                            <li className="py-2" key={wallet.id}>
                                                <ConnectButton
                                                    className="button is-fullwidth has-background-primary-o-3 has-border-radius-8 has-border-2-light-purple-o-2 is-clickable "
                                                    providerType={wallet.provider}
                                                    onSuccessCB={closeModal}
                                                    onErrorCB={onConnectError}
                                                    type="button"
                                                    style={{ height: '100%' }}
                                                >
                                                    <div
                                                        className="is-flex is-flex-direction-row is-align-items-center is-justify-content-space-between"
                                                        style={{ width: '100%' }}
                                                    >
                                                        <figure className="image is-48x48 mx-4 is-flex">
                                                            <img src={wallet.logo} alt="" />
                                                        </figure>

                                                        <h1 className="subtitle is-5 has-text-white mx-2">
                                                            {wallet.name}
                                                        </h1>
                                                    </div>
                                                </ConnectButton>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default WalletsModal;
