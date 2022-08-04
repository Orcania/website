/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import brandLogos from 'src/static/home/brand-logos';
import Link from 'next/link';
import { partnerSection, partnerSectionSecondDivision } from 'src/static/home/partners-section';
import TeamCard from 'src/components/base/team-card';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
// import InfiniteSlider from 'src/components/infinite-slider';

const style = {
    // height: '100%',
    width: '100%',
};

const Home = () => {
    return (
        <div style={style}>
            <section className="hero is-fullheight has-background-primary2dark mb-0">
                <div className="hero-body" style={{ overflow: 'hidden' }}>
                    <div className="container">
                        <div className="py-6 is-hidden-desktop" />
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered-mobile" data-aos="fade-right">
                                <h1 className="title has-text-light-purple is-2 mb-5">Welcome to Orcania</h1>
                                <h1 className="subtitle has-text-white is-4">
                                    Building the future of blockchain technology
                                </h1>
                                <div
                                    className="columns is-mobile has-background is-centered-a is-multiline"
                                    style={{ width: '80%' }}
                                >
                                    {brandLogos.slice(0, 6).map(e => (
                                        <div className="column is-mobile" key={e.id}>
                                            <figure className="image is-32x32 ">
                                                <img src={e.logo} alt="" />
                                            </figure>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className="columns is-mobile has-background is-centered-a is-multiline"
                                    style={{ width: '80%' }}
                                >
                                    {brandLogos.slice(6, 12).map(e => (
                                        <div className="column is-mobile" key={e.id}>
                                            <figure className="image is-32x32 ">
                                                <img src={e.logo} alt="" />
                                            </figure>
                                        </div>
                                    ))}
                                </div>
                                <br />
                            </div>

                            <div className="column">
                                <img
                                    src="media/pages/home/orcania-welcome-screen.gif"
                                    alt=""
                                    data-aos="fade-left"
                                    width="auto"
                                    height="auto"
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        boxShadow: 'none',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-d2p2d">
                <div className="head pt-6" />
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container">
                        <div className="columns">
                            <div className="column" data-aos="fade-up">
                                <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                    About us
                                </h1>
                                <p className="has-text-light  has-text-distriute is-size-5">
                                    Orcania is a technologically driven team focused on efficient blockchain development
                                    and growth, we aim to break the limits of blockchain technology and improve upon the
                                    features it offers. We strive to achieve these goals through a series of
                                    technologically and logically advanced projects such as the Orcania DEX, Multichain,
                                    and Chain projects.
                                    <br />
                                    <br />
                                    Our goals are many but are always focused on one concept... Building a better future
                                    for blockchain technology.
                                </p>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-right">
                                <img src="media/pages/home/home_about.svg" alt="" style={{ width: '400px' }} />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="columns is-reverse">
                            <div className="column has-text-left" data-aos="fade-left">
                                <img src="media/pages/home/home_work.svg" alt="" style={{ width: '500px' }} />
                            </div>
                            <div className="column" data-aos="fade-up">
                                <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                    Our work
                                </h1>
                                <p className="has-text-light  has-text-distribute is-size-5">
                                    Orcania is all about hard and smart work. We want what&apos;s best for the world and
                                    we know that no dream can be fulfilled without an ambitious mind and a strong body
                                    willing to give it all for the dream.
                                </p>
                                <br />
                                <br />
                                <p className="has-text-light  has-text-distriute is-size-5">
                                    Our work focuses on advanced logical design and implementation to offer new
                                    protocols, and new ideas with a vast range of features, options, and environments.
                                    We also focus on improving some of the current protocols available or even replace
                                    them with more efficient ones. &nbsp;&nbsp;&nbsp;&nbsp;
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="columns ">
                            <div className="column" data-aos="fade-up">
                                <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                    Our goal
                                </h1>
                                <p className="has-text-light  has-text-distriute is-size-5">
                                    As daily crypto users we want to push the blockchain technology to its fullest, to
                                    offer the world not only a better financial and technological system but the best
                                    system possible, we want to improve upon blockchain technology to make it sci-fi
                                    technology brought to reality, to build a future better than ever before
                                </p>
                                <br />
                                <br />
                                <p className="has-text-light  has-text-distriute is-size-5">
                                    We focus on building a better, more advanced future for blockchain technology. We do
                                    our best to bring the improvements we want to see in the world of cryptos and its
                                    community, we strive to offer the best of protocols, and set the highest of
                                    examples. Our dreams have no limits and our goals know no end.
                                </p>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-right">
                                <img src="media/pages/home/home_goals.svg" alt="" style={{ width: '400px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-light">
                <div className="head pt-6 mb-6">
                    <div className="container pt-6">
                        <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
                            Our projects
                        </h1>
                    </div>
                </div>
                <br />
                <div className="hero-body pb-6">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <Link href="/token" passHref>
                                    <a
                                        className="box has-background-primary2dark-box has-text-centered"
                                        style={{ minHeight: '280px', height: '100%' }}
                                        data-aos="fade-up"
                                    >
                                        <h1 className="title is-4 has-text-light-purple ">Orcania Coin</h1>
                                        <img src="media/pages/home/token.png" alt="" />
                                        <p className="has-text-light is-size-5">
                                            The technologically driven governance asset of Orcania
                                        </p>
                                    </a>
                                </Link>
                            </div>
                            <div className="column">
                                <Link href="/multichain" passHref>
                                    <a
                                        className="box has-background-primary2dark-box has-text-centered"
                                        style={{ minHeight: '280px', height: '100%' }}
                                        data-aos="fade-up"
                                    >
                                        <h1 className="title is-4 has-text-light-purple ">Orcania Multichain</h1>
                                        <img src="media/pages/home/multichain.png" alt="" style={{ width: '40%' }} />
                                        <p className="has-text-light is-size-5">
                                            Linking the world of blockchains together
                                            <br />
                                        </p>
                                    </a>
                                </Link>
                            </div>
                            <div className="column">
                                <Link href="/dex" passHref>
                                    <a
                                        className="box has-background-primary2dark-box has-text-centered"
                                        style={{ minHeight: '280px', height: '100%' }}
                                        data-aos="fade-up"
                                    >
                                        <h1 className="title is-4 has-text-light-purple ">Orcania DEX</h1>
                                        <img src="media/pages/home/exchange.png" alt="" />
                                        <p className="has-text-light is-size-5">
                                            Unbounded Self Sustaining Decentralized Finance
                                            <br />
                                        </p>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-d2p2d">
                <div className="head pt-6">
                    <h1 className="title has-lina-text contrast is-3 has-text-contrast has-text-centered mb-6">
                        Ecosystem and Partners
                    </h1>
                </div>
                <div className="hero-body pb-6 px-0" style={{ overflow: 'hidden' }}>
                    <div id="infinite" className="highway-slider">
                        <div className="highway-barrier">
                            <ul className="highway-lane">
                                {partnerSection.map(item => (
                                    <li className="highway-car ml" key={item.id}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="box has-background-dark is-shadowless"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={item.logo} alt={item.alt} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div id="infinite" className="highway-slider">
                        <div className="highway-barrier">
                            <ul className="highway-lane phase2">
                                {partnerSectionSecondDivision.map(item => (
                                    <li className="highway-car ml" key={item.id}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="box has-background-dark is-shadowless"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={item.logo} alt={item.alt} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-light">
                <div className="head pt-6 mb-6">
                    <div className="container pt-6">
                        <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
                            Meet the team
                        </h1>
                    </div>
                </div>
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container">
                        <div className="columns">
                            <div className="column has-text-centered" style={{ display: 'grid', placeItems: 'center' }}>
                                <div style={{ width: '300px' }} data-aos="fade-up">
                                    <TeamCard
                                        name="Edy Haddad"
                                        charge="Founder, Blockchain, software and smart contracts developer"
                                        imgsrc="media/pages/home/member1.png"
                                        chargeIcon={<i className="fas fa-user-tie" />}
                                        socialmedia={
                                            <div>
                                                <a
                                                    className="has-text-white"
                                                    href="https://www.linkedin.com/in/edy-haddad-42725a211/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon hide">
                                                        <i className="fab fa-linkedin-in" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <a
                                                    className="has-text-white"
                                                    href="https://twitter.com/EAOE_Dev"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <a
                                                    className="has-text-white"
                                                    href="https://t.me/EAOE_Dev"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-telegram-plane" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <div
                                                    className="has-text-white"
                                                    data-tooltip="EAOE#3130"
                                                    style={{
                                                        display: 'inline-block',
                                                    }}
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-discord" />
                                                    </span>
                                                </div>
                                                &nbsp;
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="column has-text-centered" style={{ display: 'grid', placeItems: 'center' }}>
                                <div style={{ width: '300px' }} data-aos="fade-up">
                                    <TeamCard
                                        name="Sebastian Madrid"
                                        charge="Web and DAPP dev"
                                        imgsrc="https://drive.google.com/uc?export=view&id=1TibjOvHroE9R9K0MT-T_Ejv6JccaS9YV"
                                        chargeIcon={<i className="fas fa-code" />}
                                        socialmedia={
                                            <div>
                                                <a
                                                    className="has-text-white"
                                                    href="https://www.linkedin.com/in/sebastian-madrid-38597a200/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-linkedin-in" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <a
                                                    className="has-text-white"
                                                    href="https://twitter.com/GeenKt"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-twitter" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <a
                                                    className="has-text-white"
                                                    href="https://t.me/Loque18"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-telegram-plane" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <div
                                                    className="has-text-white"
                                                    href=""
                                                    data-tooltip="Loque#7657"
                                                    style={{ display: 'inline-block' }}
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-discord" />
                                                    </span>
                                                </div>
                                                &nbsp;
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                            <div className="column has-text-centered" style={{ display: 'grid', placeItems: 'center' }}>
                                <div style={{ width: '300px' }} data-aos="fade-up">
                                    <TeamCard
                                        name="Zero Two"
                                        charge="Hardware Manager / Testing helper"
                                        imgsrc="media/pages/home/member5.png"
                                        chargeIcon={<i className="fa-solid fa-microchip" />}
                                        socialmedia={
                                            <div>
                                                <a
                                                    className="has-text-white"
                                                    href="https://t.me/JaydenR_CF"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-telegram-plane" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <div
                                                    className="has-text-white"
                                                    href=""
                                                    data-tooltip="Zero Two#0764"
                                                    style={{ display: 'inline-block' }}
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-discord" />
                                                    </span>
                                                </div>
                                                &nbsp;
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="column has-text-centered" style={{ display: 'grid', placeItems: 'center' }}>
                            <div style={{ width: '300px' }} data-aos="fade-up">
                                <TeamCard
                                    name="Bechara Maalouf"
                                    charge="Web Developer"
                                    // imgsrc="media/pages/home/member6.jpeg"
                                    chargeIcon={<i className="fas fa-code" />}
                                    socialmedia={
                                        <div>
                                            <a
                                                className="has-text-white"
                                                href="https://www.linkedin.com/in/bechara-maalouf-920645200"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="icon">
                                                    <i className="fab fa-linkedin-in" />
                                                </span>
                                            </a>
                                            &nbsp;
                                            <a
                                                className="has-text-white"
                                                href="https://twitter.com/BecharaxMaalouf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="icon">
                                                    <i className="fab fa-twitter" />
                                                </span>
                                            </a>
                                            &nbsp;
                                            <a
                                                className="has-text-white"
                                                href="https://t.me/TiredZone"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="icon">
                                                    <i className="fab fa-telegram-plane" />
                                                </span>
                                            </a>
                                            &nbsp;
                                            <div
                                                className="has-text-white"
                                                href=""
                                                data-tooltip="TiredZone#4106"
                                                style={{ display: 'inline-block' }}
                                            >
                                                <span className="icon">
                                                    <i className="fab fa-discord" />
                                                </span>
                                            </div>
                                            &nbsp;
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <br />
                    <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
                        Advisors
                    </h1>
                    <br />
                    <div className="container">
                        <div className="columns">
                            <div className="column has-text-centered" style={{ display: 'grid', placeItems: 'center' }}>
                                <div style={{ width: '330px' }} data-aos="fade-up">
                                    <TeamCard
                                        name="Full Professor Youakim Badr"
                                        charge="Advisor"
                                        imgsrc="media/pages/home/member3.png"
                                        chargeIcon={<i className="fas fa-chalkboard-teacher" />}
                                        socialmedia={
                                            <div>
                                                <a
                                                    className="has-text-white"
                                                    href="https://www.linkedin.com/in/youakim/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fab fa-linkedin-in" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                                <a
                                                    className="has-text-white"
                                                    href="https://youakim.info/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <span className="icon">
                                                        <i className="fas fa-globe" />
                                                    </span>
                                                </a>
                                                &nbsp;
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
                        {' '}
                        Collaborators
                    </h1>
                    <br />
                    <div className="container">
                        <div className="columns">
                            <div className="column has-text-centered" style={{ display: 'grid', placeItems: 'center' }}>
                                <div style={{ width: '300px' }} data-aos="fade-up">
                                    <TeamCard
                                        name="Glomp"
                                        charge="Graphic designer"
                                        chargeIcon={<i className="fas fa-paint-brush" />}
                                    />
                                </div>
                            </div>
                            <div className="column has-text-centered" style={{ display: 'grid', placeItems: 'center' }}>
                                <div style={{ width: '300px' }} data-aos="fade-up">
                                    <TeamCard
                                        name="Rusty"
                                        charge="Graphic designer"
                                        chargeIcon={<i className="fas fa-paint-brush" />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-d2p2d is-last-section">
                <div className="head pt-6">
                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered mb-6">
                        F . A . Q
                    </h1>
                </div>
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container px-3">
                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">Where do you want to go?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                As we progress and grow, our goals continue to grow with us. We do our best to bring the
                                improvements we want to see in the world of cryptos and it&apos;s community, we strive
                                our hardest to offer the most efficient of technologies. Our projects and plans grow
                                with us, and we&apos;ll keep on growing.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">What are you focusing on?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                Right now our focus is on the release of the Orcania Multichain V1.0 and spreading it
                                across multiple blockchains and multiple communities, linking the world of blockchain
                                finance and technology all together in a decentralized, permisionless, secure, cheap,
                                and fast fashion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

Home.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');

export default Home;
