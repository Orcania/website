/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import Tokenomics from 'src/components/tokenomics';

import { utilitiesData } from 'src/static/token-page-data';

const style = {
    // height: '100%'
};

const Token = () => {
    const router = useRouter();

    const [showData, setShowData] = useState({
        title: '',
        body: () => null,
    });

    useEffect(() => {
        document.title = 'Orcania | Token';
    }, []);

    return (
        <div style={style}>
            <section className="hero is-fullheight has-background-primary2dark">
                <div className="hero-body" style={{ overflow: 'hidden' }}>
                    <div className="container">
                        <div className="py-6 is-hidden-desktop" />
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered-mobile" data-aos="fade-right">
                                <h1 className="title has-text-light-purple is-2 mb-5">Orcania Coin</h1>
                                <h1 className="subtitle has-text-white is-4">
                                    The multichain technologically driven asset of Orcania
                                </h1>
                                <div className="columns pt-4">
                                    <div className="column is-4">
                                        <button
                                            type="button"
                                            className="button is-fullwidth is-rounded has-text-light-purple has-background-primary-o-5 has-border-2-light-purple-o-10 is-shadowless"
                                            onClick={() => {
                                                router.push('/ico');
                                            }}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                </div>
                                {/* }<button className="button is-light-purple" style={{width: '150px'}}>Node sales</button>&nbsp;&nbsp;
                                <button className="button is-light-purple" style={{width: '150px'}}>Presale</button> */}
                            </div>

                            <div className="column" data-aos="flip-left">
                                <figure className="image is-square" style={{ transform: 'scale(0.5)' }}>
                                    <img src="media/pages/token/token_logo.svg" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-light px-4">
                <div className="head pt-6 mb-6">
                    <div className="container pt-6">
                        <h1 className="title is-3 has-text-primary has-text-centered has-liae-text primary mb-5">
                            Upcoming Token Distribution
                        </h1>

                        <div className="columns">
                            <div className="column is-5">
                                <div>
                                    <Tokenomics showData={showData} setShowData={setShowData} />
                                </div>
                            </div>
                            <div className="column">
                                <div className="">
                                    <h1 className="subtitle has-text-centered has-text-primary">{showData.title}</h1>

                                    <showData.body />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="body pb-6">
                    <div className="container is-max-desktop" />
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
                                        OCA is the most advanced ERC20 token on the Ethereum blockchain. It was
                                        developed by the Orcania team with transaction fees 40%-80% cheaper than any
                                        other token, and management tools that allow for better security and
                                        scalability. OCA is used for the governance, security, rewards and fees payment
                                        on all current and future projects of the Orcania ecosystem.
                                        <br />
                                        <br />
                                        It is planed to be used for governance, security, and fees on the Orcania
                                        Multichain, the mother asset on the Orcania DEX, main asset of the Orcania
                                        Chain, and rewards asset of the TRAF DEFI Program.
                                        <br />
                                        <br />
                                        OCA is further used for voting on project ideas and recommendations related to
                                        the Orcania ecosystem. It is the heart of this ecosystem, and the basis of
                                        it&apos;s security and governance.
                                    </p>
                                </div>
                                <div
                                    className="column has-text-centered"
                                    data-aos="fade-right"
                                    style={{ display: 'grid', placeItems: 'center' }}
                                >
                                    <img src="media/pages/token/CF-About-us-v2.svg" alt="" width="500px" />
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns is-reverse">
                                <div
                                    className="column has-text-centered"
                                    data-aos="fade-left"
                                    style={{ display: 'grid', placeItems: 'center' }}
                                >
                                    <img src="media/pages/token/token_governance.svg" alt="" width="500px" />
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Governance
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        OCA is the governance asset for the Orcania ecosystem and projects. OCA holders
                                        hold the power over all security and ecosystem changes and they&apos;re approval
                                        is needed to implement such changes.
                                        <br />
                                        <br />
                                        This governance power is most valid in the Orcania Multichain and Chain
                                        projects, validator nodes in these projects hold the power to make changes in
                                        the projects structure and the Orcania ecosystem. OCA holders can delegate their
                                        OCA to the node they wish to represent them in order to increase their
                                        governance power over changes.
                                        <br />
                                        <br />
                                        80% of the total governance power is required for a change in the projects or
                                        ecosystem.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Security
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        OCA inherits the security of the many blockchains it operates on, and comes
                                        equipped with unique security features that accomplish a new standard of
                                        security in the world of cryptos.
                                        <br />
                                        <br />
                                        OCA helps users stay free, safe and secure, it is available on many blockchains
                                        in a non-wrapped form and can be transferred across these blockchains in a
                                        decentralized and permisionless fashion using the Orcania Multichain.
                                        <br />
                                        <br />
                                        It offers users security features such as clearance of allowance, that takes
                                        away the allowance of any and all parties and smart contracts that might have
                                        been given permission to use the users funds. This helps resolve one of the
                                        major issues assets face with rogue users, buggy contracts, hackers, or scam
                                        contracts.
                                        <br />
                                        <br />
                                        Some of the other features include Multi Transfer&apos;, which allows
                                        distribution of OCA to a wide variety of addresses for low cost. This is most
                                        efficient in companies and teams looking to pay a wide variety of addresses in
                                        OCA.
                                    </p>
                                </div>
                                <div
                                    className="column has-text-centered"
                                    data-aos="fade-right"
                                    style={{ display: 'grid', placeItems: 'center' }}
                                >
                                    <img src="media/pages/token/token_security.svg" alt="" width="500px" />
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns is-reverse is-hidden">
                                <div
                                    className="column"
                                    data-aos="fade-left"
                                    style={{ display: 'grid', placeItems: 'center' }}
                                >
                                    <img src="media/pages/token/token_ecosystem.svg" alt="" width="600px" />
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Inflation
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        OCA is a community controlled asset, meaning its developers have no power of
                                        controlling it in any way. New OCA tokens can only be born by staking existing
                                        OCA on the Orcania Multichain or the Orcania Chain, making OCA holders the only
                                        ones capable of providing more OCA to the community and to the Orcania projects.
                                        <br />
                                        <br />
                                        The OCA staking APY is 3%-5%, users participate in staking by delegating their
                                        OCA to a validator node operating on the Multichain or Chain projects.
                                        <br />
                                        <br />
                                        OCA has many deflationary protocols built into the Orcania DEX, Multichain, and
                                        Chain. This pushes the yearly inflation rate of OCA to less than 2% and possibly
                                        to negative values.
                                        <br />
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    {/**
                     * <div className="container">
                        <h1 className="title has-text-contrast has-line-text contrast has-text-centered    ">FT Motive</h1>
                        <div className="container is-max-desktop has-text-light is-size-5">
                            <ul>
                                <li className="mb-6">FT didn't come to existence because we wanted it to be, it came because it needed to be.</li>
                                <li className="mb-6">FT is the soul of governance and fees to all the Orcania projects, without it many of these projects would be impossible.</li>
                                <li className="mb-6">It was made to provide the blockchain community with a new view at technology and blockchain projects.</li>
                                <li className="mb-6">And it lets our developer sleep at night knowing there isn't a contract out there with full allowance that can withdraw his tokens while he's taking a nap (not kidding)</li>
                            </ul>
                        </div>


                    </div>
                    */}
                </div>
            </section>

            <section className="has-background-light">
                <div className="head pt-6 mb-6">
                    <h1 className="title is-3 has-text-primary has-text-centered mb-6">Token info</h1>
                </div>
                <br />
                <div className="hero-body py-6" style={{ overflow: 'hidden' }}>
                    <div className="container">
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">Name</h1>
                                    <p className="has-text-white has-text-center">Orcania</p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">Symbol</h1>
                                    <p className="has-text-white has-text-center">OCA</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">
                                        Total mount issued
                                    </h1>

                                    <p className="has-text-white has-text-center">150,115,877</p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">Max Supply</h1>
                                    <p className="has-text-white has-text-center">1,000,000,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">
                                        Deployment Blockchains
                                    </h1>
                                    <p className="has-text-white has-text-center">Ethereum - BSC</p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">Format</h1>
                                    <p className="has-text-white has-text-center">ERC-20</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">Address</h1>
                                    <p className="has-text-white has-text-center">
                                        0x8AeB42F7b4204C956c51907C89639E3446a787Ea
                                    </p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple">Decimals</h1>
                                    <p className="has-text-white has-text-center">18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head" />
            </section>

            {/* <section className="has-background-light">
                <div className="head">

                </div>
                <br/>
                <div className="hero-body py-6">
                    <div className="container">
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered">
                                <a href="https://www.example.com"><img src={bscscan} alt='' width="200"/></a>
                            </div>
                            <div className="column has-text-centered">
                                <a href="https://www.example.com"><img src={cmc} alt='' width="200"/></a>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="head">

                </div>
            </section> */}

            <section className="has-background-d2p2d is-last-section pb-6 " style={{}}>
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-contrast has-text-centered mb-6 ">Utilities</h1>
                    <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                        <div className="container px-3">
                            <div className="columns">
                                {utilitiesData.map(item => (
                                    <div className="column" key={item.id}>
                                        <div className="box-wrapper has-border-radius-10" style={{ height: '100%' }}>
                                            <div className="box has-background-dark py" style={{ height: '100%' }}>
                                                <div style={{ display: 'grid', placeItems: 'center' }}>
                                                    <div
                                                        className="has-background-"
                                                        style={{
                                                            width: '128px',
                                                            height: '128px',
                                                            borderRadius: '50%',
                                                            display: 'grid',
                                                            placeItems: 'center',
                                                        }}
                                                    >
                                                        <Image src={item.logo} alt="" width={100} height={100} />
                                                    </div>
                                                </div>
                                                <br />
                                                <h1 className="subtitle has-text-white has-text-centered is-3">
                                                    {item.title}
                                                </h1>
                                                <ul className="px-5 mb-5" style={{ listStyle: 'disc', color: 'white' }}>
                                                    {item.list.map(subitem => (
                                                        <li className="mb-3" key={subitem.id}>
                                                            <h1 className="subtitle has-text-white is-5">
                                                                {subitem.description}
                                                            </h1>
                                                        </li>
                                                    ))}
                                                    {/* <li>
                                                        <h1 className="subtitle has-text-white is-5">
                                                            Liquidity token of the Orcania DEX
                                                        </h1>
                                                    </li> 
                                                    <br />
                                                    */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="has-background-d2p2d is-last-section is-hidden">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-contrast has-text-centered mb-6">F . A . Q</h1>
                </div>
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container px-3">
                        <div
                            className="box has-background-dark has-shadow mb-6"
                            data-aos="fade-right"
                            style={{ height: '100%' }}
                        >
                            <h1 className="title is-4 has-text-light-purple">When is the ICO?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                The ICO is still not defined due to development improvements that pushed the release
                                date.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">How to stake OCA?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                In the future, users can earn by running a validator node on the Orcania Multichain or
                                by delegating their OCA to one. For their help running and securing the Multichain,
                                users can get up to 5% APY on their stake .
                            </p>
                        </div>
                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">
                                How to use OCA security and management features?
                            </h1>
                            <p className="has-text-light is-size-5">
                                A control panel interface will be provided for users to use in order to easily manage
                                security of their funds and monitor their state.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

Token.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Token');

export default Token;
