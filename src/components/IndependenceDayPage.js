import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import independence1 from '../assets/independence_day_24/img1.jpg';
import independence2 from '../assets/independence_day_24/img2.jpg';
import independence3 from '../assets/independence_day_24/img3.jpg';
import independence4 from '../assets/independence_day_24/img4.jpg';
import independence5 from '../assets/independence_day_24/img5.jpg';
import independence6 from '../assets/independence_day_24/img6.jpg';
import independence7 from '../assets/independence_day_24/img7.jpg';
import independence8 from '../assets/independence_day_24/img8.jpg';
import independence9 from '../assets/independence_day_24/img9.jpg';
import independence10 from '../assets/independence_day_24/img10.jpg';
import independence11 from '../assets/independence_day_24/img11.jpg';
import Header from './Header';
import Footer from "../global/Footer";

const images = [
  independence1, independence9, independence3, independence4, independence8,
  independence2, independence7, independence5, independence11, independence10,
  independence6
];

const IndependenceDayPage = () => {
  return (
    <>
    <Header/>
    <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' }, color: '#5b3c14', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: '20px' }}>
        Independence Day 2024
      </Typography>
      <Grid container spacing={0} justifyContent="center">
        {images.map((image, index) => (
          <Grid item lg={8} xs={12} key={index}>
            <img src={image} alt={`Independence Day ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
    <Footer/>
    </>
  );
};

export default IndependenceDayPage;
