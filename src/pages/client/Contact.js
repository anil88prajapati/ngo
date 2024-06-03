import React from 'react';
import Header from '../../components/Header';
import Footer from '../../global/Footer';
import PageBanner from '../../global/PageBanner';
import contactPic from '../../assets/contactimage.jpg';
import { Divider, Grid, Typography, Box } from '@mui/material';
import { DELHI_ADDRESS, EMAIL_ADDR, HEAD_OFFICE_ADDRESS, JAIPUR_ADDRESS } from '../../constant';
import HeadingGlobal from '../../global/HeadingGlobal';

const Contact = () => {
    return (
        <>
            <Header pageState="contact" />
            <PageBanner bannerPic={contactPic} text='Contact' />
            <Grid container sx={{ mt: '40px', p: '0px 30px', mb: '30px' }} spacing={2}>
                <Grid item lg={6} sx={{ p: '0px 30px' }}>
                    <HeadingGlobal title="LOCATE US NEAR YOU" />
                    <Typography sx={{ fontWeight: 900, m: '20px 0px' }}>CENTRAL OFFICE</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>HEAD OFFICE</Typography>
                        <Typography sx={{ fontWeight: 300, color: 'gray' }}>
                            {HEAD_OFFICE_ADDRESS}
                        </Typography>
                        <Typography sx={{ fontWeight: 300, color: 'gray' }}>{EMAIL_ADDR}</Typography>
                        <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px', opacity: 0.5 }} />
                        <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>DELHI OFFICE</Typography>
                        <Typography sx={{ fontWeight: 300, color: 'gray' }}>
                            {DELHI_ADDRESS}
                        </Typography>
                        <Typography sx={{ fontWeight: 300, color: 'gray' }}>{EMAIL_ADDR}</Typography>
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
                <Grid item lg={6} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.0306283587639!2d77.2377584!3d28.5660836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24da6d7f3cd%3A0xc4e50eea141a00fc!2sD%2F16%2C%20Block%20D%2C%20Lajpat%20Nagar%20III%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1717145804434!5m2!1sen!2sin" 
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Head Office Location Map"
                    ></iframe>
                    <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '30px 0px', opacity: 0.5 }} />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.22546823827733!2d77.14976307871339!3d28.461246247303496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fb4ae9d901f%3A0xb442a62c2ddb156f!2sRPA%20real%20estate!5e0!3m2!1sen!2sin!4v1716704499382!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Delhi Office Location Map"
                    ></iframe>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Contact;
