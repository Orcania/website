/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';

import { DisconnectButton, useCelesteSelector, ConnectedWrapper, SwitchNetworkButton } from '@celeste-js/react';
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
    const [mobileActive, setMobileActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [bgColor, setBgColor] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);

    const { walletReducer } = useCelesteSelector(state => state);

    const dispatch = useDispatch();

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

    useEffect(() => {
        const elmnt = document.getElementById('__next');
        let oldScroll = 0;
        elmnt.addEventListener('scroll', () => {
            if (elmnt.scrollTop > 50) setBgColor(true);
            else setBgColor(false);

            if (oldScroll && oldScroll > elmnt.scrollTop) setScrollingDown(false);
            else setScrollingDown(true);

            oldScroll = elmnt.scrollTop;
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
                    <a className="navbar-item">
                        <img src="media/logos/orcania.png" alt="Orcania Logo" width={32} height={32} />
                        <h1 className="title is-5 has-text-white mb-0">&nbsp; Orcania</h1>
                    </a>

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
                    <div className="navbar-start">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link ">
                                <i className="far fa-exchange" /> &nbsp; Exchange
                            </a>

                            <div className="navbar-dropdown has-background-transparent">
                                <Link href="/swap">
                                    <a className="navbar-item has-text-white">Swap</a>
                                </Link>

                                <Link href="/liquidity">
                                    <a className="navbar-item has-text-white">Liquidity</a>
                                </Link>

                                {/* <Link href="/liquidity/add">
                                <a className="navbar-item has-text-white">liquidity - add</a>
                            </Link>

                            <Link href="/liquidity/remove">
                                <a className="navbar-item has-text-white">liquidity - remove (Cooming Soon)</a>
                            </Link>  */}
                            </div>
                        </div>

                        {/* <Link href="/dex">
                        <a className="navbar-item has-text-white">
                            <i className="fas fa-tractor" /> &nbsp; Farms (Cooming Soon)
                        </a>
                    </Link>

                    <Link href="/faucet">
                        <a className="navbar-item has-text-white">
                            <i className="fas fa-faucet" /> &nbsp; Faucet
                        </a>
                    </Link> */}
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {/* <button className="button is-rounded has-text-hpink has-background-hpurple-o-5 has-border-2-hpink-o-10 is-shadowless">
                            ETH mainnet 
                        </button>  */}
                        </div>
                        <ConnectedWrapper
                            disconnectedComponent={
                                <div className="navbar-item">
                                    <button
                                        id="connect-button"
                                        className="button is-rounded has-text-hpink has-background-hpurple-o-5 has-border-2-hpink-o-10 is-shadowless"
                                        type="button"
                                        onClick={() => {
                                            dispatch(
                                                open_modal({
                                                    modalName: 'walletsModal',
                                                })
                                            );
                                        }}
                                    >
                                        Connect
                                    </button>
                                </div>
                            }
                        >
                            <div className="navbar-item">
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
                            </div>
                            <div className="navbar-item">
                                <button
                                    id="connect-button"
                                    className="button is-rounded has-text-hpink has-background-hpurple-o-5 has-border-2-hpink-o-10 is-shadowless"
                                    type="button"
                                >
                                    {walletReducer.address && getAddressReduced(walletReducer.address)}
                                </button>
                            </div>
                        </ConnectedWrapper>

                        <div className="navbar-item">
                            <DisconnectButton
                                id="disconnect-button"
                                className="button is-rounded has-text-hpink has-background-hpurple-o-5 has-border-2-hpink-o-10 is-shadowless"
                                onErrorCB={e => {
                                    // eslint-disable-next-line no-console
                                    console.log(e);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
