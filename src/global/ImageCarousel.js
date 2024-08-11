import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import { Box } from '@mui/material';
const images = require.context('../assets/carousel-images', true);
const imageList = images.keys().map(image => ({
    id: image,
    src: images(image)
}));

const ImageCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
    };

    return (
        <Box maxHeight= '90%' sx={{ m: { lg: '0px 40px', xs: '0px' }, p: { lg: '10px 10px', xs: '0px 10px' } }}>
    <div className='carousel-container'>
        <Slider {...settings}>
            {imageList.map((slide, index) => (
                <div key={index} className="carousel-slideMain" >
                    <img className='carousel-image' src={slide.src} alt={`Slide ${index}`} style={{ height: 'auto', maxHeight: '500px' ,objectFit: 'fill'}} />
                </div>
            ))}
        </Slider>
    </div>
    </Box>
    );
};

export default ImageCarousel;
