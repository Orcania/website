/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from 'src/redux/store';

import AOS from 'aos';

import { ReactNotifications } from 'react-notifications-component';
import { custom_notification_types } from 'src/static/notifications';

import WalletsModal from 'src/components/modals/wallets-modal';

import appConfig from 'src/static/app.config';

import 'src/scss/main.scss';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import 'aos/dist/aos.css';
import '@splidejs/splide/dist/css/splide.min.css';

const CelesteProvider = dynamic(() => import('src/components/celeste'), { ssr: false });
// const AOSProvider = dynamic(() => import('src/components/aos-provider'), { ssr: false });

const { FONT_AWESOME_KEY } = process.env;
const { appName } = appConfig;

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => page);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <>
            <Head>
                <title>{appName}</title>

                <meta name="description" content="Bulding the future of blockchain technology" />

                <meta property="og:image" content="https://myurl.com/ogImage.png" />
                <meta property="og:title" content="Orcania" />
                <meta property="og:description" content="Bulding the future of blockchain technology" />
                <meta
                    property="og:image"
                    content="https://drive.google.com/uc?export=view&id=1T5XAdT6zYvdK0UzscoBBS1G1VsdXSOeh"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="orcania.io" />
                <meta property="twitter:url" content="https://orcania.io/home" />
                <meta name="twitter:title" content="Orcania" />
                <meta name="twitter:description" content="Bulding the future of blockchain technology" />
                <meta
                    name="twitter:image"
                    content="https://drive.google.com/uc?export=view&id=1T5XAdT6zYvdK0UzscoBBS1G1VsdXSOeh"
                />
            </Head>
            <Script src={`https://kit.fontawesome.com/${FONT_AWESOME_KEY}.js`} />
            <Provider store={store}>
                <CelesteProvider>
                    {/* <AOSProvider /> */}
                    <ReactNotifications types={custom_notification_types} />

                    <WalletsModal />

                    <Script src={`https://kit.fontawesome.com/${FONT_AWESOME_KEY}.js`} />
                    {getLayout(<Component {...pageProps} />)}
                </CelesteProvider>
            </Provider>
        </>
    );
}

export default MyApp;
