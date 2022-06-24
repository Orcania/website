import { Splide, SplideSlide } from '@splidejs/react-splide';

const Slider = props => {
    const { data } = props;

    const gap = 20;
    const perPage = 4;
    const height = 20;

    return (
        <div className="wrapper">
            <Splide options={{ perPage, height: `${height}rem`, gap }}>
                {data.map(slide => (
                    <SplideSlide key={slide.id}>
                        <figure className="image is-256x256">
                            <img src={slide.src} alt={slide.alt} style={{ borderRadius: '20px' }} />
                        </figure>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Slider;
