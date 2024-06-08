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
            <Grid container sx={{ mt: '40px', p: '0px 30px', mb: '30px' }} spacing={3}>
                <Grid item lg={6} sx={{ p: '0px 30px' }}>
                    <HeadingGlobal title="LOCATE US NEAR YOU" />
                    <Typography sx={{ fontWeight: 900, m: '20px 0px', fontSize: '24px' }}>CENTRAL OFFICE</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '43px', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontWeight: 700, m: '10px 0px', fontSize: '20px' }}>HEAD OFFICE</Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>
                            {HEAD_OFFICE_ADDRESS}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{EMAIL_ADDR}</Typography>
                        <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px', opacity: 0.5 }} />
                        
                        <Typography sx={{ fontWeight: 700, m: '10px 0px', fontSize: '20px' }}>PROJECT OFFICE DELHI</Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>
                            {DELHI_ADDRESS}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{EMAIL_ADDR}</Typography>
                    </Box>
                    <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '30px 0px', opacity: 0.5 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '43px', alignItems: 'flex-start' }}>
                        <Typography sx={{ fontWeight: 700, m: '10px 0px', fontSize: '20px' }}>PROJECT OFFICE JAIPUR</Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>
                            {JAIPUR_ADDRESS}
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>{EMAIL_ADDR}</Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <br></br>
                    <br></br>
                    <br></br>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.0306283587639!2d77.2377584!3d28.5660836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24da6d7f3cd%3A0xc4e50eea141a00fc!2sD%2F16%2C%20Block%20D%2C%20Lajpat%20Nagar%20III%2C%20Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1717145804434!5m2!1sen!2sin" 
                        width="80%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Head Office Location Map"
                    ></iframe>
                    <br></br>
                    <br></br>
                    <br></br>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.22546823827733!2d77.14976307871339!3d28.461246247303496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fb4ae9d901f%3A0xb442a62c2ddb156f!2sRPA%20real%20estate!5e0!3m2!1sen!2sin!4v1716704499382!5m2!1sen!2sin"
                        width="80%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Delhi Office Location Map"
                    ></iframe>
                    <br></br>
                    <br></br>
                    <br></br>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.226135099861!2d75.76070197543783!3d26.864555576675833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzUyLjQiTiA3NcKwNDUnNDcuOCJF!5e0!3m2!1sen!2sin!4v1717847650956!5m2!1sen!2sin"
                     width="80%"
                     height="200"
                     style={{border:0}}
                     allowfullscreen=""
                     loading="lazy" 
                     referrerpolicy="no-referrer-when-downgrade"
                     title='Jaipur Office Location Map'
                     ></iframe>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Contact;
