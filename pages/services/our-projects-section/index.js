import Slider from 'src/components/slider';
import ourProjectsData from 'src/static/our-projects-data';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

const ProjectsSection = () => {
    const [overlayMenu, setOverlayMenu] = useState(false);

    const [burgerMenu, setBurgerMenu] = useState(false);

    const { sliderDataReducer } = useSelector(state => state);

    const handleBurgerMenuClick = e => {
        e.preventDefault();
        setBurgerMenu(!burgerMenu);

        if (overlayMenu) {
            animateCSS('.overlay-menu', 'fadeOut').then(() => {
                setBurgerMenu(false);
                setOverlayMenu(false);
            });
        } else {
            setBurgerMenu(true);
            setOverlayMenu(true);
        }
    };

    return (
        <section className="section has-background-light">
            <div className="container">
                <div className="columns is-centered has-text-centered">
                    <div className="column is-8">
                        <h1 className="title is-size-1 has-text-dark">Our Projects</h1>
                        <h2 className="subtitle is-size-3 is-size-4-mobile has-text-dark pt-4 pb-6">
                            We make every project feel personal because our clients matter.
                        </h2>
                    </div>
                </div>
                <div className="columns is-gapless is-centered">
                    <div className="column is-narrow is-flex is-justify-content-center is-relative">
                        <video
                            className="video-container has-border-radius-20"
                            autoPlay
                            loop
                            muted
                            playsInline
                            width="1024"
                            height="512"
                            type="video/mp4"
                            src={sliderDataReducer.video}
                        >
                            Your browser does not support the video tag.
                        </video>

                        {overlayMenu ? (
                            <div className="overlay-menu">
                                <button className="unstyled-button" type="button" onClick={handleBurgerMenuClick}>
                                    <span className="icon is-size-3 is-size-6-mobile is-large has-text-white pt-3">
                                        <i className="fas fa-close" />
                                    </span>
                                </button>

                                <div className="columns is-mobile has-text-centered is-centered">
                                    <div className="column">
                                        <h1 className="title is-size-2 is-size-6-mobile has-text-white">
                                            {sliderDataReducer.title}
                                        </h1>
                                    </div>
                                </div>
                                <div className="columns is-mobile has-text-centered px-5">
                                    <div className="column" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        <p className="subtitle is-size-5 is-size-7-mobile has-text-white">
                                            {sliderDataReducer.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="columns is-mobile has-text-centered is-centered pt-4">
                                    {sliderDataReducer.discord === undefined ? null : (
                                        <div className="column is-narrow">
                                            <a
                                                href={sliderDataReducer.discord}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="icon is-size-3 is-size-4-mobile is-large has-text-white">
                                                    <i className="fab fa-discord" />
                                                </span>
                                            </a>
                                        </div>
                                    )}
                                    {sliderDataReducer.twitter === undefined ? null : (
                                        <div className="column is-narrow">
                                            <a
                                                href={sliderDataReducer.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="icon is-size-3 is-size-4-mobile is-large has-text-white">
                                                    <i className="fab fa-twitter" />
                                                </span>
                                            </a>
                                        </div>
                                    )}
                                    {sliderDataReducer.website === undefined ? null : (
                                        <div className="column is-narrow">
                                            <a
                                                href={sliderDataReducer.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="icon is-size-3 is-size-4-mobile is-large has-text-white">
                                                    <i className="fas fa-globe" />
                                                </span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="closed-menu">
                                <button className="unstyled-button" type="button" onClick={handleBurgerMenuClick}>
                                    <span className="icon is-size-3 is-large has-text-white pt-3">
                                        <i className="fas fa-bars" />
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="columns is-centered py-6 mx-0">
                    <div className="column is-9">
                        <Slider data={ourProjectsData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
