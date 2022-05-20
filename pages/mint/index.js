import { useEffect } from 'react';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import { useDispatch } from 'react-redux';

import useCountdown from 'src/hooks/useCountdown';

import MintButton from './mint-button';

// console.log(useCeleste);

const MintPage = () => {
    const { days, hours, minutes: mins, seconds: secs } = useCountdown(1653120000);

    return (
        <div className="has-background-primary2dark mb-0">
            <div className="container px-5" style={{ paddingBottom: '8rem', paddingTop: '8rem' }}>
                <div className="box box-wrapper" style={{}}>
                    <div className="box has-background-dark-o-8 px-6" style={{}}>
                        <div className="columns is-reverse is-vcentered">
                            <div className="column is-6" data-aos="fade-down">
                                <section className="mb-6">
                                    <h1 className="subtitle has-text-light-purple is-3 has-text-centered-mobile">
                                        Orcania Mint
                                    </h1>
                                    <p
                                        className="has-text-white is-size-5 has-text-justified"
                                        style={{ lineHeight: '100%' }}
                                    >
                                        OCA is the most advanced ERC20 token on the Ethereum blockchain. It was
                                        developed by the Orcania team with transaction fees 40%-80% cheaper than any
                                        other token, and management tools that allow for better security and
                                        scalability. OCA is used for the governance, security, rewards and fees payment
                                        on all current and future projects of the Orcania ecosystem.
                                    </p>
                                </section>
                                <section className="mb-6">
                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                        <div>
                                            <h1 className="subtitle has-text-white is-3 has-font-pt-mono mb-0">$0.1</h1>
                                            <h1 className="subtitle has-text-white is-6 has-text-centered">
                                                Mint Price
                                            </h1>
                                        </div>
                                    </div>
                                </section>
                                <section className="mb-6">
                                    <h1 className="subtitle has-text-light-purple is-4">Utilities & Projects</h1>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="box  has-background-primary-o-2  mb-3">
                                                <figure className="image is-square">
                                                    <img src="media/icons/dex.png" alt="" />
                                                </figure>
                                            </div>
                                            <h1 className="subtitle  has-text-light-purple has-text-centered is-4">
                                                DEFI 2.0 DEX
                                            </h1>
                                        </div>
                                        <div className="column">
                                            <div className="box  has-background-primary-o-2  mb-3">
                                                <figure className="image is-square">
                                                    <img src="media/icons/multichain.png" alt="" />
                                                </figure>
                                            </div>
                                            <h1 className="subtitle  has-text-light-purple has-text-centered is-4">
                                                Multichain
                                            </h1>
                                        </div>
                                        <div className="column">
                                            <div className="box  has-background-primary-o-2  mb-3">
                                                <figure className="image is-square">
                                                    <img src="media/icons/blockchain.png" alt="" />
                                                </figure>
                                            </div>
                                            <h1 className="subtitle  has-text-light-purple has-text-centered is-4">
                                                OCA Chain
                                            </h1>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="column is-1 is-hidden-mobile" />

                            <div className="column px-6" data-aos="fade-up">
                                <section className="mb-6">
                                    <br />
                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                        <div className="logo-bloom" />
                                    </div>
                                </section>

                                <section className="mb-6 is-hidden">
                                    <div className="is-flex is-flex-direction-row">
                                        <div className="button symbol-button">-</div>
                                        <input className="input mint-input" type="text" />
                                        <div className="button symbol-button">+</div>
                                    </div>
                                </section>

                                <section className="mb-6">
                                    <MintButton />
                                </section>

                                {/* <div className="is-flex is-flex-direction-row is-align-items-flex-start is-justify-content-space-between">
                                    <div style={{ width: '25%' }}>
                                        <div className="box has-background-primary-o-2 mr-3 has-font-pt-mono ct-box">
                                            {days}
                                        </div>
                                        <h1 className="subtitle has-text-light-purple is-6 has-text-centered">days</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <div className="box has-background-primary-o-2 mr-3 has-font-pt-mono ct-box">
                                            {hours}
                                        </div>
                                        <h1 className="subtitle has-text-light-purple is-6 has-text-centered">hours</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <div className="box has-background-primary-o-2 mr-3 has-font-pt-mono ct-box">
                                            {mins}
                                        </div>
                                        <h1 className="subtitle has-text-light-purple is-6 has-text-centered">mins</h1>
                                    </div>
                                    <div style={{ width: '25%' }}>
                                        <div className="box has-background-primary-o-2 has-font-pt-mono ct-box">
                                            {secs}
                                        </div>
                                        <h1 className="subtitle has-text-light-purple is-6 has-text-centered">secs</h1>
                                    </div>
                                </div> */}
                            </div>
                            <div className="column is-1 is-hidden-mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Mint');

export default MintPage;
