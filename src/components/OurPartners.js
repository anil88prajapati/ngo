import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageCarousel2 from '../global/OurPartnerSlide'
import logocomp from '../assets/logocomp.png'
import cgpl from '../assets/cgplcom.jpg'

const OurPartners = () => {
    const slides = [{ image: cgpl, }, { image: cgpl, }, { image: cgpl, }, { image: logocomp, }, { image: logocomp, }, { image: logocomp, }, { image: cgpl, }, { image: cgpl, }, { image: logocomp, }, { image: cgpl, }, { image: cgpl, }, { image: cgpl, }, { image: logocomp, }, { image: logocomp, },];
    return (
        <>
            <Typography textAlign={'center'} sx={{ mt: '30px', mb: '20px', fontWeight: 300, letterSpacing: '1.2px' }}>OUR PARTNERS</Typography>
            <ImageCarousel2 slides={slides} />
            <Box sx={{ mb: '50px' }}></Box>
        </>
    )
}

export default OurPartners