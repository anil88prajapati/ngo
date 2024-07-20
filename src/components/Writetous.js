import React, { useState } from 'react';
import Header from "./Header";
import Footer from "../global/Footer";
import { Grid, TextField, Button } from '@mui/material';

const Writetous = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        center: 'jaunapur',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false); 

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setSubmitted(true); 
    };

    return(
        <>
            <Header/>
            <div style={{ backgroundColor: "#f9f9f9", minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={10} md={8} lg={6}>
                        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#5b3c14" }}>Write to Us</h2>
                            {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                variant="outlined"
                                                required
                                                InputLabelProps={{ style: { color: '#5b3c14' } }}
                                                InputProps={{ style: { color: '#5b3c14' } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                variant="outlined"
                                                required
                                                InputLabelProps={{ style: { color: '#5b3c14' } }}
                                                InputProps={{ style: { color: '#5b3c14' } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="phoneNumber"
                                                type="tel"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                variant="outlined"
                                                required
                                                InputLabelProps={{ style: { color: '#5b3c14' } }}
                                                InputProps={{ style: { color: '#5b3c14' } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                select
                                                label="Select a Center"
                                                name="center"
                                                value={formData.center}
                                                onChange={handleChange}
                                                variant="outlined"
                                                required
                                                SelectProps={{ native: true }}
                                                InputLabelProps={{ style: { color: '#5b3c14' } }}
                                                InputProps={{ style: { color: '#5b3c14' } }}
                                            >
                                                <option value="jaunapur">Jaunapur</option>
                                                <option value="jaipur">Jaipur</option>
                                            </TextField>
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
                                                variant="outlined"
                                                required
                                                InputLabelProps={{ style: { color: '#5b3c14' } }}
                                                InputProps={{ style: { color: '#5b3c14' } }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button type="submit" variant="contained" fullWidth style={{ backgroundColor: '#5b3c14', color: '#fff' }}>
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            ) : (
                                <div style={{ textAlign: "center", color: "#5b3c14" }}>
                                    <h3>Thank you for your submission!</h3>
                                </div>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    );
}

export default Writetous;
