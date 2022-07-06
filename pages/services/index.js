/* eslint-disable @next/next/no-img-element */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import IntroSection from 'src/components/intro-section';
import { useRef } from 'react';
import {
    servicesData,
    sliderFirstColumn,
    sliderSecondColumn,
    sliderThirdColumn,
} from 'src/static/services/services-data';
import Image from 'next/image';
import TiltedSquareBox from './tilted-square-box';
import styles from './styles.module.scss';
import ContactUsBox from './contact-us-box';
import ProjectsSection from './our-projects-section';

const { columns_container, second_column } = styles;

const Services = () => {
    const firstColumn = useRef(null);
    const secondColumn = useRef(null);

    return (
        <div>
            <IntroSection
                title="Services"
                subtitle="We offer a variety of services to help you get the most out of your business."
                image="/media/pages/bridge/bridge_decentralization.svg"
            />
            <section className="has-background-light">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-primary has-text-centered mb-6">Supported Blockchains</h1>
                </div>
                <div className="hero-body pb-6 px-0" style={{ overflow: 'hidden' }}>
                    <div id="infinite" className="highway-slider">
                        <div className="highway-barrier">
                            <ul className="highway-lane">
                                {sliderFirstColumn.map(item => (
                                    <li className="highway-car ml" key={item.id}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="box has-background-dark is-shadowless"
                                            rel="noopener noreferrer"
                                        >
                                            <Image
                                                src={item.logo}
                                                alt={item.alt}
                                                width={sliderFirstColumn.width || 178}
                                                height={sliderFirstColumn.height || 41}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div id="infinite" className="highway-slider">
                        <div className="highway-barrier">
                            <ul className="highway-lane phase2">
                                {sliderSecondColumn.map(item => (
                                    <li className="highway-car ml" key={item.id}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="box has-background-dark is-shadowless"
                                            rel="noopener noreferrer"
                                        >
                                            <Image src={item.logo} alt={item.alt} width={178} height={41} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div id="infinite" className="highway-slider">
                        <div className="highway-barrier">
                            <ul className="highway-lane">
                                {sliderThirdColumn.map(item => (
                                    <li className="highway-car ml" key={item.id}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            className="box has-background-dark is-shadowless"
                                            rel="noopener noreferrer"
                                        >
                                            <Image src={item.logo} alt={item.alt} width={178} height={41} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section has-background-primary2dark-v">
                <div className="container">
                    <div className="columns has-text-centered" data-aos="fade-up">
                        <div className="column">
                            <h1 className="title is-size-1 has-text-light-purple">Our Services</h1>
                        </div>
                    </div>

                    <div className={columns_container}>
                        <div className="columns is-centered pt-6 is-marginless" ref={firstColumn}>
                            {servicesData.slice(0, 3).map(item => (
                                <div className="column is-4" key={item.id} data-aos="fade">
                                    <TiltedSquareBox title={item.title} subtitle={item.subtitle} icon={item.icon} />
                                </div>
                            ))}
                        </div>
                        <div className={`columns is-centered ${second_column} is-marginless`} ref={secondColumn}>
                            {servicesData.slice(3, 5).map(item => (
                                <div className="column is-4" key={item.id} data-aos="fade">
                                    <TiltedSquareBox title={item.title} subtitle={item.subtitle} icon={item.icon} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="is-hidden-mobile" style={{ height: '300px' }} />
                </div>
            </section>
            <ProjectsSection />
            <section className="section has-background-primary2dark-v" style={{ paddingBottom: '8rem' }}>
                <div className="container">
                    <div className="columns" data-aos="fade-up">
                        <div className="column is-5">
                            <h1 className="title is-size-1 has-text-white">Have a project? We would love to help.</h1>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <ContactUsBox />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

Services.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Services');

export default Services;
