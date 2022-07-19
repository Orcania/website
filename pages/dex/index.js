/* eslint-disable @next/next/no-img-element */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import Image from 'next/image';
import Table from './table';

const style = {
    // height: '100%'
};

const Dex = () => {
    return (
        <div style={style}>
            <section className="hero is-fullheight has-background-primary2dark">
                <div className="hero-body" style={{ overflow: 'hidden' }}>
                    <div className="container">
                        <div className="py-6 is-hidden-desktop" />
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered-mobile" data-aos="fade-right">
                                <h1 className="title has-text-light-purple is-2 mb-5">Orcania DEX</h1>
                                <h1 className="subtitle has-text-white is-4">
                                    Unbounded Self Sustaining Decentralized Finance
                                </h1>

                                <br />
                                <div className="buttons">
                                    <div className="columns is-mobile">
                                        <div className="column">
                                            <a
                                                href="https://drive.google.com/file/d/16xNf1W65dzVRxJRfjylwpXpXU2PeQXZ3/view?usp=sharing"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="button is-fullwidth is-rounded has-text-light-purple has-background-primary-o-5 has-border-2-light-purple-o-10 is-shadowless mint-button"
                                            >
                                                <span className="is-size-5">White paper</span>
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a
                                                href="https://drive.google.com/file/d/1LXtY0DleEK8Muup-BC7IVBdlXIayX9t2/view?usp=sharing"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="button is-fullwidth is-rounded has-text-light-purple has-background-primary-o-5 has-border-2-light-purple-o-10 is-shadowless mint-button"
                                            >
                                                <span className="is-size-5">Pitch deck</span>
                                            </a>
                                        </div>
                                        <div className="column">
                                            <a
                                                href="https://oca-dex-testing-boba.netlify.app/"
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="button is-fullwidth is-rounded has-text-light-purple has-background-primary-o-5 has-border-2-light-purple-o-10 is-shadowless mint-button"
                                            >
                                                <span className="is-size-5">Test The DEX</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-3 is-hidden-desktop" />
                            <div className="column" data-aos="fade-left">
                                <img src="media/pages/token/token_governance.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-d2p2d ">
                <div className="head pt-6" />
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="block">
                        <div className="container">
                            <div className="columns">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        About
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX is a DEFI 2.0 DEX with low gas swaps regardless of the swap
                                        pair, low DEX fees, increased locked liquidity stability, and unbounded trading
                                        flexibility.
                                        <br />
                                        <br />
                                        Orcania DEX was built with the aim of revolutionizing decentralized finance and
                                        decentralized trading, and making it suitable for retail and institutional users
                                        alike. We believe the steps to achieve that is through low trading fees that can
                                        compete with CEXs, low gas usage and gas fees that wouldn&apos;t affect the
                                        trade, self-sustaining liquidity for long term continuity, and trading
                                        flexibility for all cryptos on the DEX.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src="media/pages/token/token_about.svg" alt="" width="400px" />
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns is-reverse">
                                <div className="column has-text-centered" data-aos="fade-left">
                                    <img src="media/pages/token/token_ecosystem.svg" alt="" width="400px" />
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Decentralized & Permissionless
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX is fully based on the blockchain and runs on hard coded smart
                                        contracts with no back doors or administrative permissions for anyone.
                                        <br />
                                        <br />
                                        The DEX is permissionless and anyone can use it with no limits or restrictions.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Middle Crypto Protocol
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        All liquidity on the DEX is provided in one liquidity pair ‘Token-OCA’, making
                                        OCA the middle crypto between all cryptos and allowing for flexible unlimited
                                        trading across all tokens, by offering a joined link for them all.
                                        <br />
                                        <br />
                                        No new OCA is ever minted for any token, OCA has a hardcoded max supply of
                                        250Mil per blockchain, and any user that wants to add Token-OCA liquidity have
                                        to buy OCA.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src="media/pages/dex/cf_dex.png" alt="" style={{ width: '400px' }} />
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns is-reverse">
                                <div className="column has-text-centered" data-aos="fade-left">
                                    <img src="media/pages/dex/cf_liquidity_protocol.svg" alt="" width="450px" />
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Expanding Liquidity Protocol
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX, like any other DEX, relies on users to provide the majority of
                                        the liquidity for cryptos to allow flexible trading.
                                        <br />
                                        <br />
                                        However, the DEX also applies a very small fee of 0.01% on added liquidity, that
                                        fee is fed as locked liquidity to the DEX and fairly shares the rewards of DEX
                                        fees with other liquidity providers.
                                        <br />
                                        <br />
                                        This allows the DEX to build up its own liquidity as time passes by, making it
                                        less reliant on users for liquidity and allowing for flexible trading at all
                                        times for all cryptos on the DEX.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Trading Flexibility
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX offers the smoothest of trading experience, allowing users to
                                        swap any token they want with no extra gas fees or DEX fees. <br />
                                        <br />
                                        Unlike other DEX&apos;s, any crypto added to the Orcania DEX becomes instantly
                                        tradable for all other tokens on the DEX with no need for token pairs rerouting
                                        that usually results in very high gas fees and DEX fees. <br />
                                        <br />
                                        Users can flexibly trade any crypto they want, and new tokens joining the crypto
                                        space will have unlimited access to the entire crypto market to trade with and
                                        grow.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src="media/pages/bridge/bridge_developers.svg" alt="" width="400px" />
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <section className="has-background-primary2dark-box is-last-section">
                    <div className="head pt-6">
                        <h1 className="title is-3 has-text-contrast has-text-centered mb-6">DEX Features</h1>
                    </div>
                    <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                        <div className="container is-hidden-desktop">
                            <h1 className="title is-white has-text-white has-text-centered">Legend</h1>
                            <div className="columns pb-6">
                                <div className="column is-narrow">
                                    <div className="columns is-flex is-align-items-center is-mobile">
                                        <div
                                            className="column  is-narrow has-background-contrast"
                                            style={{ borderRadius: '50%', height: '24px' }}
                                        />
                                        <div className="column is-narrow">
                                            <span className="is-flex is-align-items-center">
                                                <h1 className="is-size-4 has-text-contrast">Orcania DEX&nbsp;</h1>
                                                <figure className="image is-32x32">
                                                    <Image layout="fill" src="/media/logos/oca-light.png" />
                                                </figure>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-narrow pt-5">
                                    <div className="columns is-flex is-align-items-center is-mobile">
                                        <div
                                            className="column  is-narrow has-background-white"
                                            style={{ borderRadius: '50%', height: '24px' }}
                                        />
                                        <div className="columns is-mobile is-flex is-align-items-center is-gapless pl-3">
                                            <div className="column is-narrow">
                                                <span className="is-flex is-align-items-center">
                                                    <h1 className="is-size-4 has-text-white">Uniswap&nbsp;</h1>
                                                    <figure className="image is-32x32">
                                                        <Image layout="fill" src="/media/logos/uniswap-logo.png" />
                                                    </figure>
                                                    <div className="pl-2" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column is-narrow ml-3">
                                        <span className="is-flex is-align-items-center">
                                            <h1 className="is-size-4 has-text-white">PancakeSwap&nbsp;</h1>
                                            <figure className="image is-32x32">
                                                <Image layout="fill" src="/media/logos/pancakeswap-logo.png" />
                                            </figure>
                                        </span>
                                    </div>
                                    <div className="column is-narrow ml-3">
                                        <span className="is-flex is-align-items-center">
                                            <h1 className="is-size-4 has-text-white">HoneySwap&nbsp;</h1>
                                            <figure className="image is-32x32">
                                                <Image layout="fill" src="/media/logos/honeyswap-logo.png" />
                                            </figure>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Table />
                    </div>
                </section>
            </section>
            <section className="has-background-light is-last-section" style={{ paddingBottom: '8rem' }}>
                <div className="head pt-6" />
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container px-3">
                        <div className="columns">
                            <div className="column has-text-centered">
                                <img alt="Feature one" src="media/pages/bridge/num1.png" />
                                <h1 className="title has-text-contrast has-text-centered is-4">
                                    Decentralized & Permissionless
                                </h1>
                                <p className="has-text-dark">Run and secured by a smart contract on the blockchain </p>
                            </div>
                            <div className="column has-text-centered">
                                <img alt="Feature two" src="media/pages/bridge/num2.png" />
                                <h1 className="title has-text-contrast has-text-centered is-4">Self Sustaining</h1>
                                <p className="has-text-dark">
                                    Expanding liquidity protocol provides long term self sustaining liquidity{' '}
                                </p>
                            </div>
                            <div className="column has-text-contrast has-text-centered">
                                <img alt="Feature three" src="media/pages/bridge/num3.png" />
                                <h1 className="title has-text-contrast has-text-centered is-4">Unbounded Trading</h1>
                                <p className="has-text-dark">
                                    Provides flexibility to trade any crypto on the DEX for any another crypto
                                </p>
                            </div>
                            <div className="column has-text-contrast has-text-centered">
                                <img alt="Feature four" src="media/pages/bridge/num4.png" />
                                <h1 className="title has-text-contrast has-text-centered is-4">Low Fees</h1>
                                <p className="has-text-dark">Cheapest trading fees and GAS fees on the blockchain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero is-fullheight has-background-primary2dark is-hidden">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-contrast has-text-centered mb-6">F . A . Q</h1>
                </div>
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container px-3">
                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">Why OCA?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                OCA is a new fully decentralized crypto not bound to any CEX or DEX, with no previous
                                distribution or allocations other than the Orcania DEX and team, and as such there is no
                                outside influence over it, it works as a link for all the cryptos on the DEX, and as
                                such it is fit to act as middle crypto.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">
                                How Does the DEX Level Its Prices With Other Markets And Within Itself?
                            </h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                Like any other dependent market, a balance will make itself. Throughout separate crypto
                                CEX’s and some DEX’s, price is maintained at almost the same level through arbitrage.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">
                                How can tokens, NFTs, and smart contracts be added and linked to the Bridge ?
                            </h1>
                            <p className="has-text-light is-size-5">
                                On the Orcania-DEX there is OCA is in the middle of all swaps, meaning if a user
                                provides ONE-OCA liquidity, then no matter what tokens the traders use to buy ONE or
                                when traders use ONE to buy other cryptos, the user providing ONE-OCA liquidity is
                                always gaining from the fees, resulting in 3x-20x higher yield than other DEX&apos;s
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>
        </div>
    );
};

Dex.getLayout = page => getPageTitleLayout(getMainLayout(page), 'DEX');

export default Dex;
