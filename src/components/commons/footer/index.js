/* eslint-disable @next/next/no-img-element */
// import { baseURL, logoLight } from '../../../images';

// import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer has-background-light py-6">
            <div className="container">
                <div className="content has-text-left">
                    <div className="is-size-5 py-0 mb-0">
                        <div className="columns is-reverse py-0 footer-logo2">
                            <div className="column has-text-centered-mobile" style={{}}>
                                <h1 className="title has-text-white mb-6 has-line-text-right primary is-3">
                                    {' '}
                                    <strong className="has-text-primary">Orcania</strong>
                                </h1>
                                <h1 className="subtitle has-text-dark is-5">
                                    © Copyright Orcania. All Rights Reserved
                                </h1>
                                <a href="https://twitter.com/Orcaniaio" target="_blank" rel="noreferrer">
                                    <span className="icon has-text-dark is-size-3">
                                        <i className="fab fa-twitter" />
                                    </span>
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://discord.gg/DWvNjXsvmz" target="_blank" rel="noreferrer">
                                    <span className="icon has-text-dark is-size-3">
                                        <i className="fab fa-discord" />
                                    </span>
                                </a>
                                {/* <h1 className="subtitle has-text-dark is-5">
                  cryptofamily@cryptofamily.tech
                </h1> */}
                            </div>

                            <div className="column is-hidden-desktop" style={{ minHeight: ' 100px' }} />
                            <div className="column is-3 p-0 footer-logo has-text-centered">
                                <img src="media/logos/oca-light.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
