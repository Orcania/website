/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useDispatch } from 'react-redux';
import { set_slider_description, set_slider_title, set_slider_video } from 'src/redux/actions';

const Slider = props => {
    const { data } = props;
    const dispatch = useDispatch();

    const gap = 20;
    const perPage = 4;
    const height = 17;

    return (
        <div className="wrapper">
            <Splide tag="section" options={{ perPage, height: `${height}rem`, gap }}>
                {data.map(slide => (
                    <SplideSlide key={slide.id}>
                        <figure className="image is-256x256">
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                style={{ borderRadius: '20px' }}
                                onClick={() => {
                                    dispatch(set_slider_description(slide.description));
                                    dispatch(set_slider_title(slide.title));
                                    dispatch(set_slider_video(slide.videosrc));
                                }}
                            />
                        </figure>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Slider;
