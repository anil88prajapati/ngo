import React, { useState, useRef } from 'react';
import { Box, Button, Grid, TextField, Typography, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
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
        message: '',
        interests: {
            Administration: false,
            FieldWork: false,
            Fundraising: false,
            ProjectImplementation: false,
            ProjectPlanning: false,
            Teaching: false,
            VocationalTraining: false,
            VolunteerCoordination: false,
        },
        availability: {
            Sunday: { Morning: false, Afternoon: false, Evening: false },
            Monday: { Morning: false, Afternoon: false, Evening: false },
            Tuesday: { Morning: false, Afternoon: false, Evening: false },
            Wednesday: { Morning: false, Afternoon: false, Evening: false },
            Thursday: { Morning: false, Afternoon: false, Evening: false },
            Friday: { Morning: false, Afternoon: false, Evening: false },
            Saturday: { Morning: false, Afternoon: false, Evening: false },
        },
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const [day, time] = name.split('_');
        setFormData({
            ...formData,
            availability: {
                ...formData.availability,
                [day]: {
                    ...formData.availability[day],
                    [time]: checked,
                },
            },
        });
    };

    const handleInterestChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            interests: {
                ...formData.interests,
                [name]: checked,
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedInterests = Object.entries(formData.interests)
            .filter(([key, value]) => value)
            .map(([key]) => key.replace(/([A-Z])/g, ' $1').trim())
            .join(', ');

        const selectedAvailability = Object.entries(formData.availability)
            .map(([day, times]) => {
                const availableTimes = Object.entries(times)
                    .filter(([time, available]) => available)
                    .map(([time]) => time)
                    .join(', ');
                return `${day}: ${availableTimes}`;
            })
            .filter((availability) => availability.split(': ')[1])
            .join('; ');

        const formDataWithDetails = {
            ...formData,
            selectedInterests,
            selectedAvailability,
        };

        emailjs.send('service_7qxpor1', 'template_12umir8', formDataWithDetails, 'PmDLW4fe-z9seZ1Mf')
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
                    Volunteer Form
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
                                <Typography variant="h6" sx={{ mt: '20px', fontWeight: 600 }}>
                                    Availability
                                </Typography>
                                <FormGroup>
                                    {Object.keys(formData.availability).map((day) => (
                                        <Grid container key={day} spacing={2} sx={{ mb: '10px' }}>
                                            <Grid item xs={2}>
                                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                    {day}
                                                </Typography>
                                            </Grid>
                                            {Object.keys(formData.availability[day]).map((time) => (
                                                <Grid item xs={3} key={time}>
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={formData.availability[day][time]}
                                                                onChange={handleCheckboxChange}
                                                                name={`${day}_${time}`}
                                                            />
                                                        }
                                                        label={time}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    ))}
                                </FormGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" sx={{ mt: '20px', fontWeight: 600 }}>
                                    Interests
                                </Typography>
                                <FormGroup>
                                    <Grid container spacing={2}>
                                        {Object.keys(formData.interests).map((interest, index) => (
                                            <Grid item xs={12} sm={6} md={3} key={interest}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={formData.interests[interest]}
                                                            onChange={handleInterestChange}
                                                            name={interest}
                                                        />
                                                    }
                                                    label={interest.replace(/([A-Z])/g, ' $1').trim()}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </FormGroup>
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
