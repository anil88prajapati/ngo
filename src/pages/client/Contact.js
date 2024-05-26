import React from 'react';
import Header from '../../components/Header';
import Footer from '../../global/Footer';
import PageBanner from '../../global/PageBanner';
import contactPic from '../../assets/contactimage.jpg';
import { Divider, Grid, Typography, Box } from '@mui/material';
import { DELHI_ADDRESS, EMAIL_ADDR, JAIPUR_ADDRESS } from '../../constant';
import HeadingGlobal from '../../global/HeadingGlobal';

const Contact = () => {
    return (
        <>
            <Header pageState="contact" />
            <PageBanner bannerPic={contactPic} text='Contact' />
            <Grid container sx={{ mt: '40px', p: '0px 30px', mb: '30px' }}>
                <Grid item lg={6} sx={{ p: '0px 30px' }}>
                    <HeadingGlobal title="LOCATE US NEAR YOU" />
                    <Typography sx={{ fontWeight: 900, m: '20px 0px' }}>CENTRAL OFFICES</Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', alignItems: 'flex-start' }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>DELHI OFFICE</Typography>
                            <Typography sx={{ fontWeight: 300, color: 'gray' }}>
                                {DELHI_ADDRESS}
                            </Typography>
                            <Typography sx={{ fontWeight: 300, color: 'gray' }}>{EMAIL_ADDR}</Typography>
                        </Box>
                        <Box sx={{ flex: 1, ml: { md: '20px' } }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.22546823827733!2d77.14976307871339!3d28.461246247303496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fb4ae9d901f%3A0xb442a62c2ddb156f!2sRPA%20real%20estate!5e0!3m2!1sen!2sin!4v1716704499382!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Delhi Office Location Map"
                            ></iframe>
                        </Box>
                    </Box>
                    <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '30px 0px', opacity: 0.5 }} />
                    <Box>
                        <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>JAIPUR OFFICE</Typography>
                        <Typography sx={{ fontWeight: 300, color: 'gray' }}>
                            {JAIPUR_ADDRESS}
                        </Typography>
                        <Typography sx={{ fontWeight: 300, color: 'gray' }}>{EMAIL_ADDR}</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <HeadingGlobal title="SEND US A MESSAGE" />
                    <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>
                        Please feel free to drop all your queries at {EMAIL_ADDR}.
                    </Typography>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Contact;
