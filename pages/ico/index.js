/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

// import useCountdown from 'src/hooks/useCountdown';

import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';
import PriceComponent from './price';
import MintButton from './mint-button';
import AddTokenToWallet from './add-token-to-wallet';

// console.log(useCeleste);

const currencies = {
    1: 'ETH',
    56: 'BNB',
    288: 'ETH',
};

const MintPage = () => {
    // const { days, hours, minutes: mins, seconds: secs } = useCountdown(1653148800);

    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);

    // const dispatch = useDispatch();
    const { mintReducer } = useSelector(state => state);
    const [amount, setAmount] = useState(1);
    const [totalPrice, setTotalPrice] = useState();
    const [insufficientBalance, setInsufficientBalance] = useState(false);

    const handleIncreaseClick = () => {
        setAmount(+amount + 1);
    };

    const handleDecreaseClick = () => {
        if (+amount > 1) {
            setAmount(+amount - 1);
        }
    };

    const handleAmountChange = e => {
        const { value } = e.target;

        // check value does not include decimls or symbols and allow empty string
        if (value === '' || value.match(/^[0-9]*$/)) {
            setAmount(value);
        }
    };

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null || walletReducer.chainId === null) return;

        const { priceBN } = mintReducer;

        if (amount === '' || amount === 0) {
            setTotalPrice(0);
            setInsufficientBalance(false);
            return;
        }

        if (priceBN === 0) return;

        const totalBN = BigNumber(priceBN)
            .times(+amount)
            .toFixed(7)
            .toString();

        const totalDec = +BigNumber(totalBN)
            .div(10 ** 18)
            .toFixed(7)
            .toString();

        setTotalPrice(`${totalDec} ${currencies[walletReducer.chainId]}`);

        (async () => {
            const balanceBN = await web3Reducer.web3.eth.getBalance(walletReducer.address);
            const balanceDec = +BigNumber(balanceBN)
                .div(10 ** 18)
                .toFixed(7)
                .toString();

            console.log('==========');
            console.log('totalBN', totalBN);
            console.log('balanceBN', balanceBN);
            console.log('totalDec ');

            if (totalDec > balanceDec) setInsufficientBalance(true);
            else setInsufficientBalance(false);
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, walletReducer.address, walletReducer.chainId, web3Reducer.initialized, mintReducer.priceBN]);

    return (
        <div className="has-background-primary2dark mb-0">
            <div className="container px-5" style={{ paddingBottom: '8rem', paddingTop: '8rem' }}>
                <div className="box box-wrapper">
                    <div className="box has-background-dark-o-8 px-6">
                        <div className="columns is-reverse is-vcentered">
                            <div className="column is-6" data-aos="fade-down">
                                <section className="mb-6">
                                    <h1 className="subtitle has-text-light-purple is-3 has-text-centered-mobile">
                                        Buy OCA
                                    </h1>
                                    <p
                                        className="has-text-white is-size-5 has-text-justified"
                                        style={{ lineHeight: '130%' }}
                                    >
                                        OCA is the most advanced ERC20 token on the Ethereum blockchain. It was
                                        developed by the Orcania team with transaction fees 40%-80% cheaper than any
                                        other token, and management tools that allow for better security and
                                        scalability. OCA is used for the governance, security, rewards and fees payment
                                        on all current and future projects of the Orcania ecosystem.
                                    </p>
                                </section>
                                <section className="mb-6">
                                    <div>
                                        <PriceComponent />
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
                                            <h1 className="subtitle  has-text-light-purple has-text-centered is-5">
                                                OCA DEFI 2.0 DEX
                                            </h1>
                                        </div>
                                        <div className="column">
                                            <div className="box  has-background-primary-o-2  mb-3">
                                                <figure className="image is-square">
                                                    <img src="media/icons/multichain.png" alt="" />
                                                </figure>
                                            </div>
                                            <h1 className="subtitle  has-text-light-purple has-text-centered is-5">
                                                OCA Multichain
                                            </h1>
                                        </div>
                                        <div className="column">
                                            <div className="box  has-background-primary-o-2  mb-3">
                                                <figure className="image is-square">
                                                    <img src="media/icons/blockchain.png" alt="" />
                                                </figure>
                                            </div>
                                            <h1 className="subtitle  has-text-light-purple has-text-centered is-5">
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

                                <ConnectedWrapper>
                                    <NetworkWrapper>
                                        <section className="mb-6 ">
                                            <div className="is-flex is-flex-direction-row">
                                                <div
                                                    role="button"
                                                    className="button symbol-button"
                                                    onClick={handleDecreaseClick}
                                                    disabled={+amount <= 1}
                                                >
                                                    -
                                                </div>
                                                <input
                                                    className="input mint-input has-font-pt-mono"
                                                    type="text"
                                                    value={amount}
                                                    onChange={handleAmountChange}
                                                />
                                                <div
                                                    className="button symbol-button"
                                                    onClick={handleIncreaseClick}
                                                    role="button"
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </section>
                                    </NetworkWrapper>
                                </ConnectedWrapper>

                                <section className="mb-6">
                                    <MintButton
                                        amount={amount}
                                        disabled={amount === '' || amount < 1 || insufficientBalance}
                                        insufficientBalance={insufficientBalance}
                                    />
                                    <br />
                                    <ConnectedWrapper>
                                        <NetworkWrapper>
                                            <div className="has-text-white m-0 mb-1 has-text-centered is-size-7">
                                                Total: {totalPrice}
                                            </div>
                                        </NetworkWrapper>
                                    </ConnectedWrapper>
                                    <br />
                                    <AddTokenToWallet />

                                    {/* <ConnectedWrapper>
                                        <Link href="/referral-program" passHref>
                                            <a className="has-text-white has-text-centered">
                                                <h1>
                                                    <u>Refer a friend</u>
                                                </h1>
                                            </a>
                                        </Link>
                                    </ConnectedWrapper> */}
                                </section>
                            </div>
                            <div className="column is-1 is-hidden-mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MintPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'ICO');

export default MintPage;
