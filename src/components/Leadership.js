import React from 'react';
import Header from "./Header";
import Footer from "../global/Footer";
import HeadingGlobal from '../global/HeadingGlobal';
import { Box, Typography } from '@mui/material';

const Leadership = () => {
    const textColor = '#5b3c14';
    return (
        <>
            <Header />
            <Box sx={{ p: { lg: '50px 40px', xs: '40px 20px' }, color: textColor }}>
                <HeadingGlobal title="INTRODUCTION" />
                <Typography 
                    component="div" 
                    sx={{ 
                        fontSize: { lg: '18px', xs: '16px' }, 
                        lineHeight: '1.6',
                        mt: 2 
                    }}
                >
                    Professor. Social worker. Educationist. Economist. Activist.
                    These are SEVA SRIJAN FOUNDATION's leaders: visionaries dedicated to improving opportunities for children and youth in India.
                    Here are some of the pillars of SEVA SRIJAN FOUNDATION.
                </Typography>
            </Box>
            <Footer />
        </>
    );
};

export default Leadership;
