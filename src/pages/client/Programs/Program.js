import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import PageBanner from '../../../global/PageBanner';
import Footer from '../../../global/Footer';
import aboutusbg from '../../../assets/Programs.jpg';
import HeadingGlobal from '../../../global/HeadingGlobal';
import apple from '../../../assets/apple-icon.jpg';
import bulb from '../../../assets/bulb-icon.png';
import monitor from '../../../assets/moniter-icon.png';
import graph from '../../../assets/graph-icon.jpg';

const Program = () => {
    return (
        <>
            <Header pageState="PROGRAMS" />
            <PageBanner bannerPic={aboutusbg} text="PROGRAMMES" />
            <Grid container justifyContent="center" sx={{ mt: "30px", p: '0px 20px' }}>
                <Grid item lg={8} md={10} sm={12}>
                    <HeadingGlobal title="OUR PROGRAMMES" />
                    <Box sx={{ 
                        mt: '20px', 
                        p: '20px', 
                        boxShadow: 3, 
                        borderRadius: '10px',
                        bgcolor: 'background.paper'
                    }}>
                        <Grid container spacing={4}>
                            <Grid item lg={6} md={6} sm={12} textAlign="center">
                                <Link to="/GoodCitizenshipProgramme" style={{ textDecoration: 'none' }}>
                                    <img src={apple} alt="Good Citizenship Programme" style={{ width: '100px', height: '100px' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'green', mt: '10px' }}>
                                        Good Citizenship Programme
                                    </Typography>
                                </Link>
                                <Typography sx={{ mt: '10px', opacity: 1, fontWeight: 'bold' }}>
                                    Empowering Youth: Nurturing Good Citizenship through Life Skills & Value Education
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} textAlign="center">
                                <Link to="/AftercareProgramme" style={{ textDecoration: 'none' }}>
                                    <img src={bulb} alt="Aftercare Programme" style={{ width: '100px', height: '100px' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'lightblue', mt: '10px' }}>
                                        Aftercare Programme
                                    </Typography>
                                </Link>    
                                <Typography sx={{ mt: '10px', opacity: 1, fontWeight: 'bold' }}>
                                    SSF Aftercare Programme: Empowering Underprivileged Youth to Achieve Their Life Dreams
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} textAlign="center">
                                <Link to="/TalentBankDevelopment" style={{ textDecoration: 'none' }}>
                                    <img src={graph} alt="Talent Bank Development" style={{ width: '100px', height: '100px' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'gold', mt: '10px' }}>
                                        Talent Bank Development
                                    </Typography>
                                </Link>    
                                <Typography sx={{ mt: '10px', opacity: 1, fontWeight: 'bold' }}>
                                    Unlocking Potential: SSF Talent Bank Development Programme Fosters Dreams into Careers
                                </Typography>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} textAlign="center">
                                <Link to="/SkillDevelopment" style={{ textDecoration: 'none' }}>
                                    <img src={monitor} alt="Skill Development" style={{ width: '100px', height: '100px' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'orange', mt: '10px' }}>
                                        Skill Development
                                    </Typography>
                                </Link>    
                                <Typography sx={{ mt: '10px', opacity: 1, fontWeight: 'bold' }}>
                                    Fostering Economic Empowerment: SSF's Skill Development Initiative Transforms Lives and Communities
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Program;
