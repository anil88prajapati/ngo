import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { DELHI_ADDRESS, EMAIL_ADDR, MOBILE_NUMBERS_DELHI, HEAD_OFFICE_ADDRESS } from '../constant';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import FacebookIcon from './../assets/facebook.png';
import InstagramIcon from './../assets/instagram.png';
import LinkedinIcon from './../assets/linkedin.png';
import TwitterIcon from './../assets/twitter.png';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Grid container sx={{ p: '20px 60px' }}>
                <Divider sx={{ border: '1px solid lightgray', width: '100%' }} />
                <Grid container sx={{ mb: '20px', mt: '30px' }}>
                    <Grid item lg={2.4} xs={6} sx={{ mb: '20px' }}>
                        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid item sx={{ mb: '10px' }}>
                                <Typography sx={{ fontWeight: 600 }}>About Us</Typography>
                            </Grid>
                            <Grid item>
                                <Typography onClick={() => handleNavigation('/Aboutssf')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>About Seva Srijan Foundation</Typography>
                                <Typography onClick={() => handleNavigation('/History')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>History</Typography>
                                <Typography onClick={() => handleNavigation('/Partners')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Partners</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2.4} xs={6} sx={{ mb: '20px' }}>
                        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid item sx={{ mb: '10px' }}>
                                <Typography sx={{ fontWeight: 600 }}>Programs</Typography>
                            </Grid>
                            <Grid item>
                                <Typography onClick={() => handleNavigation('/GoodCitizenshipProgramme')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Good Citizenship Programme</Typography>
                                <Typography onClick={() => handleNavigation('/AftercareProgramme')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Aftercare Programme</Typography>
                                <Typography onClick={() => handleNavigation('/SkillDevelopment')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Skill Development</Typography>
                                <Typography onClick={() => handleNavigation('/TalentBankDevelopment')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Talent Bank Development</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2.4} xs={6} sx={{ mb: '20px' }}>
                        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid item sx={{ mb: '10px' }}>
                                <Typography sx={{ fontWeight: 600 }}>Join Us</Typography>
                            </Grid>
                            <Grid item>
                                <Typography onClick={() => handleNavigation('/joinUs')} sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Partner with us</Typography>
                                <a href="/Donate" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
    <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>
        Donate
    </Typography>
</a>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2.4} xs={12} sx={{ mb: '20px' }}>
                        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid item sx={{ mb: '10px' }}>
                                <Typography sx={{ fontWeight: 600 }}>Head Office</Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, opacity: 0.5 }}>{HEAD_OFFICE_ADDRESS}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, opacity: 0.5 }}>{EMAIL_ADDR}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, opacity: 0.5 }}>{MOBILE_NUMBERS_DELHI}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2.4} xs={12} sx={{ mb: '20px' }}>
                        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Grid item sx={{ mb: '10px' }}>
                                <Typography sx={{ fontWeight: 600 }}>Delhi Office</Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, opacity: 0.5 }}>{DELHI_ADDRESS}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, opacity: 0.5 }}>{EMAIL_ADDR}</Typography>
                                <Typography sx={{ fontSize: '14px', fontWeight: 500, opacity: 0.5 }}>{MOBILE_NUMBERS_DELHI}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className="social-media-links">
                <p>© 2024 Seva Srijan Foundation. All Rights Reserved.</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/sevasrijanfoundation?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" className="social-icon" />
                        Facebook
                    </a>
                    <a href="https://x.com/sevasrijan" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt="Twitter" className="social-icon" />
                        Twitter
                    </a>
                    <a href="https://www.instagram.com/sevasrijanfoundation?igsh=MTB6NHNzdHUzNmVjYg==" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="Instagram" className="social-icon" />
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/company/seva-srijan-foundation/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="LinkedIn" className="social-icon" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </>
    );
};

export default Footer;
