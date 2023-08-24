import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'
import { Box } from '@mui/material';
import useScreenSize from '../utils/useScreenSize';

const ImageCarousel2 = ({ slides }) => {
    const { state } = useScreenSize()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: state.currentScreenSize > 700 ? 8 : 2,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };

    return (
        <Box >
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img height={'90px'} width={'160px'} src={slide.image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </Box>
    );
};

export default ImageCarousel2;
