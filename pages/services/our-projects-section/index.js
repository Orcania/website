import Slider from 'src/components/slider';
import ourProjectsData from 'src/static/our-projects-data';
import { useState } from 'react';

// const animateCSS = (element, animation, prefix = 'animate__') =>
//     // We create a Promise and return it
//     new Promise(resolve => {
//         const animationName = `${prefix}${animation}`;
//         const node = document.querySelector(element);

//         node.classList.add(`${prefix}animated`, animationName);

//         // When the animation ends, we clean the classes and resolve the Promise
//         function handleAnimationEnd(event) {
//             event.stopPropagation();
//             node.classList.remove(`${prefix}animated`, animationName);
//             resolve('Animation ended');
//         }

//         node.addEventListener('animationend', handleAnimationEnd, { once: true });
//     });

const ProjectsSection = () => {
    const [overlayMenu, setOverlayMenu] = useState(false);

    const [burgerMenu, setBurgerMenu] = useState(false);

    const handleBurgerMenuClick = e => {
        e.preventDefault();
        setBurgerMenu(!burgerMenu);

        if (overlayMenu) {
            setBurgerMenu(false);
            setOverlayMenu(false);
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
                        <h2 className="subtitle is-size-3 has-text-dark pt-4 pb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </h2>
                    </div>
                </div>
                <div className="columns is-gapless is-centered">
                    <div className="column is-narrow is-flex is-justify-content-center is-relative">
                        <iframe
                            className="has-border-radius-20"
                            title="video"
                            src="https://www.youtube.com/embed/QHN-_Z-_Z-Y"
                            height="512"
                            width="1024"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                        {overlayMenu ? (
                            <div className="overlay-menu">
                                <button className="unstyled-button" type="button" onClick={handleBurgerMenuClick}>
                                    <span className="icon is-size-3 is-large has-text-white pt-3">
                                        <i className="fas fa-close" />
                                    </span>
                                </button>

                                <div className="columns has-text-centered is-centered">
                                    <div className="column">
                                        <h1 className="title is-size-2 has-text-white">OCA DEX</h1>
                                    </div>
                                </div>
                                <div className="columns has-text-centered px-5">
                                    <div className="column" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                                        <p className="subtitle is-size-5 has-text-white">
                                            Project description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Fusce ullamcorper metus id orci venenatis consectetur.Ut elementum urna non
                                            nibh molestie, sed fermentum augue vehicula. Project description Lorem ipsum
                                            dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                                <div className="columns has-text-centered is-centered pt-4">
                                    <div className="column is-narrow">
                                        <span className="icon is-size-3 is-large has-text-white">
                                            <i className="fas fa-users" />
                                        </span>
                                    </div>
                                    <div className="column is-narrow">
                                        <span className="icon is-size-3 is-large has-text-white">
                                            <i className="fas fa-calendar" />
                                        </span>
                                    </div>
                                    <div className="column is-narrow">
                                        <span className="icon is-size-3 is-large has-text-white">
                                            <i className="fas fa-clock" />
                                        </span>
                                    </div>
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
                <div className="columns is-centered py-6">
                    <div className="column is-9">
                        <Slider data={ourProjectsData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
