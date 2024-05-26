import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Header from '../../../components/Header';
import PageBanner from '../../../global/PageBanner';
import Footer from '../../../global/Footer';
import aboutusbg from '../../../assets/JoinUs.jpg';

const JoinUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
        // Handle form submission logic here (e.g., send the data to an API or email)
        console.log(formData);
        setIsSubmitted(true);
    };

    return (
        <>
            <Header pageState="Join Us" />
            <PageBanner bannerPic={aboutusbg} text='Join Us' />
            <Box sx={{ p: { lg: '40px 80px', xs: '20px 40px' }, textAlign: 'center' }}>
                <Typography variant='h4' sx={{ mb: '20px', fontWeight: 600 }}>
                    Join Us
                </Typography>
                <Typography variant='body1' sx={{ mb: '40px' }}>
                    We are excited to have you join us in making a difference. Please fill out the form below to get started.
                </Typography>
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3} justifyContent="center">
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
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
            <Footer />
        </>
    );
};

export default JoinUs;
