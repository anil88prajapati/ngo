import React from 'react';
import { Grid } from '@mui/material';

const PageBanner = ({ bannerPic, text }) => {
    return (
        <Grid
            container
            sx={{
                position: 'relative',
                height: { lg: '150vh', md: '70vh', xs: '50vh' }, 
                backgroundImage: `url(${bannerPic})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
        </Grid>
    );
};

export default PageBanner;
