import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const images = require.context('../assets/carousel-images', true);
const imageList = images.keys().map(image => ({
    id: image,
    src: images(image)
}));

const ImageCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };

    return (
        <div className='carousel-container'>
            <Slider {...settings}>
                {imageList.map((slide, index) => (
                    <div key={index} className="carousel-slideMain">
                        <img className='carousel-image' src={slide.src} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
