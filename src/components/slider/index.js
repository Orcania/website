/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useDispatch } from 'react-redux';
import {
    set_slider_description,
    set_slider_title,
    set_slider_video,
    set_slider_discord,
    set_slider_twitter,
    set_slider_website,
} from 'src/redux/actions';

const Slider = props => {
    const { data } = props;
    const dispatch = useDispatch();

    const optionsSlide = {
        type: 'loop',
        perPage: 4,
        gap: '30px',
        ease: 'easeInOutCubic',
        autoWidth: true,
        autoHeight: true,
        pagination: false,
        arrows: true,
        breakpoints: {
            1024: {
                perPage: 1,
                autoWidth: true,
                arrows: false,
                focus: 'center',
            },
        },
    };

    return (
        <div className="wrapper">
            <Splide
                tag="section"
                aria-roledescription="slider"
                options={optionsSlide}
                onArrowsMounted={(_splide, prev, next) => {
                    prev.classList.add('is-size-4');
                    next.classList.add('is-size-4');
                }}
            >
                {data.map(slide => (
                    <SplideSlide key={slide.id}>
                        <img
                            className="slider-img has-border-radius-20 is-clickable"
                            src={slide.src}
                            alt={slide.alt}
                            onClick={() => {
                                dispatch(set_slider_description(slide.description));
                                dispatch(set_slider_title(slide.title));
                                dispatch(set_slider_video(slide.videosrc));
                                dispatch(set_slider_discord(slide.discord));
                                dispatch(set_slider_twitter(slide.twitter));
                                dispatch(set_slider_website(slide.link));
                            }}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Slider;
