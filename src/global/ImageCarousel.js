import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'
import { Box, Button, Typography } from '@mui/material';
import { HEADER_HOVER_COLOR } from '../constant';

const ImageCarousel = ({ slides }) => {
    const settings = {
        dots: true,
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
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slideMain" sx={{ height: '440px' }}>
                        <img className='imageBox' height={'80%'} width={'100%'} src={slide.image} alt={`Slide ${index}`} />
                        <Box className="carousel-slide" sx={{ display: { lg: 'block', sm: 'block', md: 'block', xs: 'flex' } }} >
                            <Box className="headingMore" sx={{ bgcolor: HEADER_HOVER_COLOR, p: { lg: '10px 10px 10px 20px', xs: '5px 5px 5px 10px' }, }}>
                                <Typography variant='h3' sx={{ fontWeight: 500, fontSize: { lg: '44px', md: '20px', sm: '20px', xs: '12px' } }}>{slide.heading}</Typography>
                            </Box>
                            {/* <Box sx={{ display: { lg: 'flex', xs: 'none', sm: 'flex', md: 'flex' }, bgcolor: 'white', p: '10px 10px 10px 20px', m: '10px 0px', }}>
                                <Typography variant='p' sx={{ fontWeight: 500, fontSize: { lg: '20px', md: '16px', sm: '12px', xs: '8px' } }}>{slide.description}</Typography>
                            </Box>
                            <Box className="btnReadMore" >
                                <Button variant='contained' sx={{ fontSize: { lg: '20px', md: '16px', sm: '12px', xs: '8px' }, textTransform: 'unset', bgcolor: '#f4bb03', color: 'black', fontWeight: 600, '&:hover': { bgcolor: '#f4bb03' } }}>Read more</Button>
                            </Box> */}
                        </Box>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
