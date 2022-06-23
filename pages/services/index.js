import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import IntroSection from 'src/components/intro-section';
import TiltedSquareBox from './tilted-square-box';
import { useEffect, useRef } from 'react';
import servicesData from 'src/static/services/services-data';
import styles from './styles.module.scss';
import ContactUsBox from './contact-us-box';

const { columns_container, second_column, background_photo, contact_box } = styles;

const Services = () => {
    const firstColumn = useRef(null);
    const secondColumn = useRef(null);

    useEffect(() => {
        if (secondColumn.current) {
        }
    }, [secondColumn]);

    return (
        <div>
            <IntroSection
                title="Services"
                subtitle="We offer a variety of services to help you get the most out of your business."
                image={'media/pages/vault/vault_about.svg'}
            />
            <section className="section has-background-primary2dark-v">
                <div className="container">
                    <div className="columns has-text-centered" data-aos="fade-up">
                        <div className="column">
                            <h1 className="title is-size-1 has-text-white">Lorem Ipsum</h1>
                            <h2 className="subtitle is-size-4 has-text-white pt-4">
                                Lorem ipsum dolor sit amet takimata kasd dolor dolor aliquyam gubergren clita.
                            </h2>
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
            <section className={`section ${background_photo}`}>
                <div className="container">
                    <div className="columns is-centered is-flex is-align-items-center" data-aos="fade-up">
                        <div className="column is-4">
                            <h1 className="title is-size-1 is-size-4-mobile has-text-white">
                                Have a project? We would love to help.
                            </h1>
                        </div>
                        <div className="column is-5 is-8-mobile">
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
