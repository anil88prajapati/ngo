import React from 'react';
import { Box, Typography, Grid, Paper, Link } from '@mui/material';
import Header from '../components/Header';
import Footer from './../global/Footer';
import partnersbg from '../assets/Partners.jpg';
import sevalawoffice from '../assets/sevalawoffice.png';

const Partners = () => {
    return (
        <>
            <Header pageState="Partners" />
            <Box
                sx={{
                    p: { lg: '40px 80px', xs: '20px 20px' },
                    textAlign: 'center',
                    position: 'relative',
                    marginTop: '20px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ mb: '20px', fontWeight: 600, textAlign: 'center' }}
                >
                    Our Partners
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={10} md={8}>
                        <Paper elevation={3} sx={{ p: '20px', textAlign: 'left' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, flex: 1 }}>
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
                            <Typography variant="body1" sx={{ mb: '10px' }}>
                                NPA | Funding Management | CSR Consultancy | Corporate Services
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px' }}>
                                H.O.: D -17 (LGF), Lajpat Nagar-III, New Delhi- 110024
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px' }}>
                                Phone: 011-41027140 / 7669179542 / 8527298871
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px' }}>
                                Email: <Link href="mailto:sevaadvisoryllp@gmail.com">sevaadvisoryllp@gmail.com</Link>
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px' }}>
                                Website: <Link href="http://www.sevallp.com" target="_blank" rel="noopener">www.sevallp.com</Link>
                            </Typography>
                            <Typography variant="h6" sx={{ mt: '20px', mb: '10px', fontWeight: 600 }}>
                                INTRODUCTION
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px' }}>
                                SEVA Advisory LLP, incorporated in the year 2011 as a multi-vertical consultancy firm based in New Delhi and catering to PAN India clientele, provides a complete range of solutions for NPA Management and ancillary services. SEVA’s objective is to redefine excellence in the areas of its operation through practicing ethical business principles and transparent work ethos.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px' }}>
                                On its decade-long journey, the LLP has developed a brand in NPA Management services. Enthused by market demand and client appreciation, the LLP has added one more segment to its bouquet of services, providing services supplemental and complementary to the range of services provided by the LLP to corporates, institutions, and HNIs. Now the group comprises, among others, a sister concern which is a full-fledged law firm, SEVA Law Offices.
                            </Typography>
                            <Typography variant="body1">
                                SEVA provides integrated services for NPA Management encompassing the range of services: Investigation, Recovery, Enforcement, Asset disposal, Legal, Corporate Insolvency Resolution - through a professional team of highly qualified professionals including Ex-Bureaucrats, Ex-Bankers, Chartered Accountants, Company Secretaries, Lawyers, Valuers, and Insolvency Resolution Professionals (IRPs), etc.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8}>
                        <Paper elevation={3} sx={{ p: '20px', textAlign: 'left' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: '10px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 600, flex: 1 }}>
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
                            <Typography variant="body1" sx={{ mb: '10px' }}>
                                Advocates & Solicitors
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px' }}>
                                4, Vikram Vihar Extension, Lajpat Nagar-IV, New Delhi- 110024, India
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px' }}>
                                Phone: +91-11-41027140 / 35113989
                            </Typography>
                            <Typography variant="body2" sx={{ mb: '10px' }}>
                                Email: <Link href="mailto:legaladvisory@sevallp.com">legaladvisory@sevallp.com</Link>
                            </Typography>
                            <Typography variant="h6" sx={{ mt: '20px', mb: '10px', fontWeight: 600 }}>
                                ABOUT US
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px' }}>
                                SEVA Law Offices [SLO] is a professional full scale law firm that provides a spectrum of legal services to its clients in a qualitative manner helping them to get a meaningful recourse to legal action. The Firm is unwavering in its commitment to exceptional client service. Based in New Delhi, and operational across various parts of India, our core competence lies in methodology, strategy and above all, a competent team of experienced Lawyers with varied expertise.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px' }}>
                                We believe in long-term congenial business relationships with our clients by developing effective and consistent service delivery processes that cater to their diverse needs. We strive to pursue and address clients' legal concerns, armed with zeal and sound legal representation before the judicial fora. Our integrity, high quality of service, result-oriented approach, determination to succeed and tenacity is directed to address the needs of our clients effectively.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: '10px' }}>
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
