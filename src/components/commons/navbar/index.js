/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useCelesteSelector, ConnectedWrapper } from '@celeste-js/react';
// import { providers } from '@celeste-js/core/dist/constants';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import './navbar.scss';

// import { onConnectError } from 'src/static/notifications-functions';
import { open_modal } from 'src/redux/actions';

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise(resolve => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const getAddressReduced = address => `${address.slice(0, 6)}...${address.slice(-4)}`;

const Navbar = () => {
    // local state
    const dispatch = useDispatch();
    const [mobileActive, setMobileActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [bgColor, setBgColor] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);
    const { walletReducer } = useCelesteSelector(state => state);

    const router = useRouter();

    const handleHamburgerClick = e => {
        e.preventDefault();

        const newValue = !mobileActive;

        setBurgerActive(newValue);

        if (!newValue) {
            animateCSS('.navbar-menu', 'fadeOutLeft').then(() => {
                setMobileActive(newValue);
            });
        } else {
            setMobileActive(newValue);
        }
    };

    const handleNavbarItemClick = () => {
        setBurgerActive(false);
        setMobileActive(false);
    };

    useEffect(() => {
        // const elmnt = document.getElementById('__next');
        let oldScroll = 0;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) setBgColor(true);
            else setBgColor(false);

            if (oldScroll && oldScroll > window.scrollY) setScrollingDown(false);
            else setScrollingDown(true);

            oldScroll = window.scrollY;
        });
    }, []);

    return (
        <nav
            className={`navbar custom-navbar  is-fixed-top 
            ${bgColor ? 'has-navbar-bg-color' : ''} 
            ${scrollingDown ? 'is-hidden-up' : ''}`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div href="https://www.orcania.io" className="navbar-brand  py-2">
                    <Link href="/home" passHref>
                        <a className="navbar-item">
                            <img src="media/logos/orcania.png" alt="Orcania Logo" width={48} height={48} />
                            <h1 className="title is-5 has-text-white mb-0">&nbsp; Orcania</h1>
                        </a>
                    </Link>

                    <a
                        role="button"
                        className={`navbar-burger has-text-white ${burgerActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={handleHamburgerClick}
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div className={`navbar-menu ${mobileActive ? 'is-active animate__animated animate__fadeInLeft' : ''}`}>
                    <div className="navbar-end">
                        <Link href="/home" passHref>
                            <a
                                role="button"
                                className={`navbar-item has-text-light  ${
                                    router.pathname === '/home' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fas fa-home" />
                                </span>
                                &nbsp;
                                <h1>Home</h1>
                            </a>
                        </Link>

                        <Link href="/token" passHref>
                            <a
                                role="button"
                                className={`navbar-item has-text-light  ${
                                    router.pathname === '/token' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fas fa-coin" />
                                </span>
                                &nbsp;
                                <h1>Coin</h1>
                            </a>
                        </Link>

                        <Link href="/multichain" passHref>
                            <a
                                role="button"
                                className={`navbar-item has-text-light  ${
                                    router.pathname === '/multichain' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fa-solid fa-link-horizontal" />
                                </span>
                                &nbsp;
                                <h1>Multichain</h1>
                            </a>
                        </Link>

                        <Link href="/dex" passHref>
                            <a
                                role="button"
                                className={`navbar-item has-text-light ${
                                    router.pathname === '/dex' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fas fa-exchange-alt" />
                                </span>
                                &nbsp;
                                <h1>DEX</h1>
                            </a>
                        </Link>

                        {/* <Link href="/portfolio" passHref>
                            <a
                                className={`navbar-item has-text-light ${
                                    router.pathname === '/portfolio' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fas fa-chart-line" />
                                </span>
                                &nbsp;
                                <h1>Portfolio</h1>
                            </a>
                        </Link> */}

                        <Link href="/services" passHref>
                            <a
                                role="button"
                                className={`navbar-item has-text-light ${
                                    router.pathname === '/services' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fas fa-cogs" />
                                </span>
                                &nbsp;
                                <h1>Services</h1>
                            </a>
                        </Link>

                        <Link href="/ico" passHref>
                            <a
                                role="button"
                                className={`navbar-item has-text-light  ${
                                    router.pathname === '/ico' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fa-solid fa-coins" />
                                </span>
                                &nbsp;
                                <h1>Ico</h1>
                            </a>
                        </Link>
                        {/* <Link href="/referral-program" passHref>
                            <a
                                role="button"
                                className={`navbar-item has-text-light  ${
                                    router.pathname === '/referral-program' ? 'is-active' : ''
                                }`}
                                onClick={handleNavbarItemClick}
                            >
                                <span className="icon">
                                    <i className="fa-solid fa-user-group" />
                                </span>
                                &nbsp;
                                <h1>Refer a friend</h1>
                            </a>
                        </Link> */}
                        {router.pathname === '/mint' ? (
                            <ConnectedWrapper
                                disconnectedComponent={
                                    <div className="navbar-item">
                                        <button
                                            id="connect-button"
                                            className="button is-rounded has-text-light-purple has-background-primary-o-5 has-border-2-light-purple-o-10 is-shadowless"
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
                                            <span>Choose Wallet</span>
                                        </button>
                                    </div>
                                }
                            >
                                {/* <div className="navbar-item">
                                {walletReducer.chainId === 1666700000 ? (
                                    <SwitchNetworkButton
                                        chainId={1666700000}
                                        className="button is-rounded has-text-hpink has-background-hpurple-o-5 has-border-2-hpink-o-10 is-shadowless"
                                        type="button"
                                    >
                                        <figure className="image is-24x24">
                                            <img src="/media/logos/harmony-one-logo.svg" alt="Harmony ONE Logo" />
                                        </figure>
                                        <span className="pl-3"> Harmony Mainnet</span>
                                    </SwitchNetworkButton>
                                ) : (
                                    <button
                                        className="button is-rounded has-text-hred has-background-hsatred-o-1 has-border-2-hred-o-10 is-shadowless has-text-weight-bold"
                                        type="button"
                                        onClick={() => {
                                            dispatch(
                                                open_modal({
                                                    modalName: 'wrongNetworkModal',
                                                })
                                            );
                                        }}
                                    >
                                        <div>
                                            <span className="icon is-medium has-text-hred">
                                                <i className="fas fa-exclamation-triangle" />
                                            </span>
                                            <span className="pl-1">Wrong Network</span>
                                        </div>
                                    </button>
                                )}
                            </div> */}
                                <div className="navbar-item">
                                    <button
                                        id="connect-button"
                                        className="button is-rounded has-text-light-purple has-background-primary-o-5 has-border-2-light-purple-o-10 is-shadowless has-font-ptmono"
                                        type="button"
                                    >
                                        {walletReducer.address && getAddressReduced(walletReducer.address)}
                                    </button>
                                </div>
                            </ConnectedWrapper>
                        ) : null}
                    </div>

                    {/* <div className="navbar-item">
                            <DisconnectButton
                                id="disconnect-button"
                                className="button is-rounded has-text-hpink has-background-hpurple-o-5 has-border-2-hpink-o-10 is-shadowless"
                                onErrorCB={e => {
                                    // eslint-disable-next-line no-console
                                    console.log(e);
                                }}
                            />
                        </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
