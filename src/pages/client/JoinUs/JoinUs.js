import React, { useState, useRef } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Header from '../../../components/Header';
import PageBanner from '../../../global/PageBanner';
import Footer from '../../../global/Footer';
import aboutusbg from '../../../assets/JoinUs.jpg';
import emailjs from '@emailjs/browser';
import HeadingGlobal from '../../../global/HeadingGlobal';
import { EMAIL_ADDR } from '../../../constant';

const JoinUs = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        from_number: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7qxpor1', 'template_12umir8', form.current, 'PmDLW4fe-z9seZ1Mf')
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
                setIsSubmitted(true);
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <>
            <Header pageState="Join Us" />
            <PageBanner bannerPic={aboutusbg} text="Join Us" />
            <Box sx={{ p: { lg: '40px 80px', xs: '20px 40px' }, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ mb: '20px', fontWeight: 600 }}>
                    Join Us
                </Typography>
                <Typography variant="body1" sx={{ mb: '40px' }}>
                    We are excited to have you join us in making a difference. Please fill out the form below to get started.
                </Typography>
                {!isSubmitted ? (
                    <form ref={form} onSubmit={handleSubmit}>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="from_email"
                                    type="email"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    name="from_number"
                                    type="tel"
                                    value={formData.from_number}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" type="submit" sx={{ bgcolor: '#f4bb03', color: 'black', fontWeight: 600, '&:hover': { bgcolor: '#f4bb03' } }}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                ) : (
                    <Typography variant="h6" sx={{ mt: '20px', fontWeight: 600, color: 'green' }}>
                        Thank you for joining us! We appreciate your interest and will get back to you soon.
                    </Typography>
                )}
            </Box>
            <Grid item lg={6} sx={{ p: '0px 30px' }}>
            <HeadingGlobal title="SEND US A MESSAGE" />
                    <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>
                        Please feel free to drop all your queries at {EMAIL_ADDR}.
                    </Typography>
            </Grid>
            <Footer />
        </>
    );
};

export default JoinUs;
