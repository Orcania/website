import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import IntroSection from 'src/components/intro-section';
import TiltedSquareBox from './tilted-square-box';

const Services = () => {
    const data = [
        {
            id: 1,
            title: 'Smart Contracts Development',
            subtitle: 'We can help you build a smart contract that will be secure and easy to use.',
            icon: 'fa-solid fa-file-contract',
        },
        {
            id: 2,
            title: 'Blockchain Development',
            subtitle: 'We can help you build a blockchain that will be secure and easy to use.',
            icon: 'fa-brands fa-hive',
        },
        {
            id: 3,
            title: 'Server Development',
            subtitle: 'We can help you build a server that will be secure and easy to use.',
            icon: 'fa-solid fa-server',
        },
        {
            id: 4,
            title: 'DAPP Development',
            subtitle: 'We can help you build a DAPP that will be secure and easy to use.',
            icon: 'fa-solid fa-dice',
        },
        {
            id: 5,
            title: 'Bots Development',
            subtitle: 'We can help you build a bot that will be secure and easy to use.',
            icon: 'fa-solid fa-robot',
        },
    ];

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

                    <div className="columns is-centered pt-6">
                        {data.slice(0, 3).map(item => (
                            <div className="column is-4" key={item.id} data-aos="fade">
                                <TiltedSquareBox title={item.title} subtitle={item.subtitle} icon={item.icon} />
                            </div>
                        ))}
                    </div>
                    <div className="columns is-centered">
                        {data.slice(3, 5).map(item => (
                            <div className="column is-4" key={item.id} data-aos="fade">
                                <TiltedSquareBox title={item.title} subtitle={item.subtitle} icon={item.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

Services.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Services');

export default Services;
