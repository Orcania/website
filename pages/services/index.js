/* eslint-disable @next/next/no-img-element */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import Slider from 'src/components/commons/slider';
import IntroSection from 'src/components/intro-section';
import { useRef } from 'react';
import {
    servicesData,
    sliderFirstColumn,
    sliderSecondColumn,
    sliderThirdColumn,
} from 'src/static/services/services-data';
import TiltedSquareBox from './tilted-square-box';
import styles from './styles.module.scss';
import ContactUsBox from './contact-us-box';
import ProjectsSection from './our-projects-section';

const { columns_container, second_column } = styles;

let items1 = [...sliderFirstColumn, ...sliderFirstColumn, ...sliderFirstColumn];
items1 = items1.map((item, i) => ({ ...item, id: i }));

let items2 = [...sliderSecondColumn, ...sliderSecondColumn, ...sliderSecondColumn];
items2 = items2.map((item, i) => ({ ...item, id: i }));

let items3 = [...sliderThirdColumn, ...sliderThirdColumn, ...sliderThirdColumn];
items3 = items3.map((item, i) => ({ ...item, id: i }));

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
                <div className="py-6">
                    <Slider items={items1} dir="l" />
                    <br />
                    <Slider items={items2} dir="r" />
                    <br />
                    <Slider items={items3} dir="l" />
                </div>
            </section>

            <section className="section has-background-primary2dark-v">
                <div className="container">
                    <div className="columns has-text-centered" data-aos="fade-up">
                        <div className="column">
                            <h1 className="title is-size-3 has-text-light-purple">Our Services</h1>
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
                        <div className="column is-6">
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
