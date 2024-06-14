import React from 'react';
import { Box, Typography, Grid, Paper, Link } from '@mui/material';
import Header from '../components/Header';
import Footer from './../global/Footer';
import partnersbg from '../assets/Partners.jpg';
import sevalawoffice from './../assets/sevalawoffice.jpg';

const Partners = () => {
    const textColor = '#5b3c14';

    return (
        <>
            <Header pageState="Partners" />
            <Box
                sx={{
                    p: { lg: '40px 80px', xs: '20px 20px' },
                    textAlign: 'center',
                    position: 'relative',
                    marginTop: '20px',
                    color: textColor
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ mb: '20px', fontWeight: 600, textAlign: 'center', color: textColor }}
                >
                    Our Partners
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={10} md={8}>
                        <Paper elevation={3} sx={{ p: '20px', textAlign: 'left' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, flex: 1, color: textColor }}>
                                    SEVA ADVISORY LLP
                                </Typography>
                                <img
                                    src={partnersbg}
                                    alt="Partners Logo"
                                    style={{
                                        width: 100,
                                        height: 'auto',
                                        marginLeft: '16px'
                                    }}
                                />
                            </Box>
                            <Typography variant="body1" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                NPA | Funding Management | CSR Consultancy | Corporate Services
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                H.O.: D -17 (LGF), Lajpat Nagar-III, New Delhi- 110024
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                Phone: 011-41027140 / 7669179542 / 8527298871
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                Email: <Link href="mailto:sevaadvisoryllp@gmail.com" sx={{ color: textColor }}>sevaadvisoryllp@gmail.com</Link>
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                Website: <Link href="http://www.sevallp.com" target="_blank" rel="noopener" sx={{ color: textColor }}>www.sevallp.com</Link>
                            </Typography>
                            <Typography variant="h6" sx={{ mt: '20px', mb: '10px', fontWeight: 600, color: textColor }}>
                                INTRODUCTION
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                SEVA Advisory LLP, incorporated in the year 2011 as a multi-vertical consultancy firm based in New Delhi and catering to PAN India clientele, provides a complete range of solutions for NPA Management and ancillary services. SEVA’s objective is to redefine excellence in the areas of its operation through practicing ethical business principles and transparent work ethos.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                On its decade-long journey, the LLP has developed a brand in NPA Management services. Enthused by market demand and client appreciation, the LLP has added one more segment to its bouquet of services, providing services supplemental and complementary to the range of services provided by the LLP to corporates, institutions, and HNIs. Now the group comprises, among others, a sister concern which is a full-fledged law firm, SEVA Law Offices.
                            </Typography>
                            <Typography variant="body1" sx={{ color: textColor, textAlign: 'justify' }}>
                                SEVA provides integrated services for NPA Management encompassing the range of services: Investigation, Recovery, Enforcement, Asset disposal, Legal, Corporate Insolvency Resolution - through a professional team of highly qualified professionals including Ex-Bureaucrats, Ex-Bankers, Chartered Accountants, Company Secretaries, Lawyers, Valuers, and Insolvency Resolution Professionals (IRPs), etc.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8}>
                        <Paper elevation={3} sx={{ p: '20px', textAlign: 'left' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, flex: 1, color: textColor }}>
                                    SEVA LAW OFFICES
                                </Typography>
                                <img
                                    src={sevalawoffice}
                                    alt="Partners Logo"
                                    style={{
                                        width: 100,
                                        height: 'auto',
                                        marginLeft: '16px'
                                    }}
                                />
                            </Box>
                            <Typography variant="body1" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                Advocates & Solicitors
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                4, Vikram Vihar Extension, Lajpat Nagar-IV, New Delhi- 110024, India
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                Phone: +91-11-41027140 / 35113989
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                Email: <Link href="mailto:legaladvisory@sevallp.com" sx={{ color: textColor }}>legaladvisory@sevallp.com</Link>
                            </Typography>
                            <Typography variant="h6" sx={{ mt: '20px', mb: '10px', fontWeight: 600, color: textColor }}>
                                ABOUT US
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                SEVA Law Offices [SLO] is a professional full scale law firm that provides a spectrum of legal services to its clients in a qualitative manner helping them to get a meaningful recourse to legal action. The Firm is unwavering in its commitment to exceptional client service. Based in New Delhi, and operational across various parts of India, our core competence lies in methodology, strategy and above all, a competent team of experienced Lawyers with varied expertise.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                We believe in long-term congenial business relationships with our clients by developing effective and consistent service delivery processes that cater to their diverse needs. We strive to pursue and address clients' legal concerns, armed with zeal and sound legal representation before the judicial fora. Our integrity, high quality of service, result-oriented approach, determination to succeed and tenacity is directed to address the needs of our clients effectively.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px', color: textColor, textAlign: 'justify' }}>
                                SLO is run by a team of dynamic Legal Professionals with long-standing experience and expertise in diverse legal disciplines under the leadership of our partners. We offer end-to-end legal services including Advisory, Alternative Dispute Resolution and Litigation in various areas including Labour and Employment Laws, IT and Cyber Laws, Commercial and Contractual Laws, Insolvency Laws, Intellectual Property Laws, Consumer Protection Law, Company Law, Criminal Laws, Environmental Laws, Family & Guardianship Laws, Real Estate, Service Matters, Securities, Banking and Finance, General Corporate & Commercial, and more.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default Partners;
