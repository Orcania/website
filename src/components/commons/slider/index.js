/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/destructuring-assignment */
import { useEffect, useRef } from 'react';

let instanceCount = 0;

const Slider = props => {
    const { dir, items } = props;
    const animationDuration = props.duration || 30;

    const sliderTrackRef = useRef(null);

    useEffect(() => {
        //
        // get ref width / 2 rounded to nearest integer
        instanceCount += 1;

        if (sliderTrackRef.current === null) return;

        const sliderTrackWidth = Math.round(sliderTrackRef.current.offsetWidth / 3);

        // create css animation keyframes based on the width of the slider track

        const keyframes = `
            @keyframes slider-animation-${instanceCount} {
                0% {
                    ${dir === 'l' ? 'transform: translateX(0px)' : `transform: translateX(-${sliderTrackWidth}px)`}
                }
                100% {
                    
                    transform: translateX(${dir === 'l' ? -sliderTrackWidth : '0'}px);
                }
            }
        `;

        // animate the slider track with the keyframes, 15s duration, infinite loop
        const style = document.createElement('style');
        // style.type = 'text/css';
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        sliderTrackRef.current.style.animation = `slider-animation-${instanceCount} ${animationDuration}s linear infinite`;
    }, [sliderTrackRef, dir, animationDuration]);

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <ul
                className="is-flex is-flex-direction-row"
                style={{ width: 'max-content', height: '90px' }}
                ref={sliderTrackRef}
            >
                {items.map(({ id, link, logo, alt }) => (
                    <li key={id} className=" p-1" style={{ height: '100%' }}>
                        <a
                            className="box has-background-dark p-2 ml-6 px-6"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                height: '100%',
                                placeItems: 'center',
                                width: '250px',
                                borderRadius: '80px',
                            }}
                        >
                            <div style={{ height: '100%', width: '100%', display: 'grid', placeItems: 'center' }}>
                                <img src={logo} alt={alt} />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Slider;
