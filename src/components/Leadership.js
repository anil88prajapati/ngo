import React from 'react';
import Header from "./Header";
import Footer from "../global/Footer";
import HeadingGlobal from '../global/HeadingGlobal';
import { Box, Typography, Avatar } from '@mui/material';
import bharti from './../assets/bharti.png';
import siddhart from './../assets/Siddhartha.jpeg';
import anil from './../assets/anil.png';
import leadfirst from './../assets/leadfront.jpg';
import bhartagg from './../assets/Bhartagg.jpg'

const Leadership = () => {
    const textColor = '#5b3c14';

    return (
        <>
            <Header />
            <Box
                component="img"
                src={leadfirst}
                alt="Leadership Introduction"
                sx={{
                    width: '100%',
                    height: { lg: '500px', xs: '300px' },
                    objectFit: 'cover'
                }}
            />
            <Box sx={{ p: { lg: '50px 40px', xs: '40px 20px' }, color: textColor }}>
                <HeadingGlobal title="INTRODUCTION" />
                <Typography 
                    component="div" 
                    sx={{ 
                        fontSize: { lg: '18px', xs: '16px' }, 
                        lineHeight: '1.6',
                        mt: 2 
                    }}
                >
                    Professor. Social worker. Educationist. Economist. Activist.
                    These are SEVA SRIJAN FOUNDATION's leaders: visionaries dedicated to improving opportunities for children and youth in India.
                    Here are some of the pillars of SEVA SRIJAN FOUNDATION.
                </Typography>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Mr. Siddhartha Pareek" 
                    src={siddhart} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Mr. Siddhartha Pareek
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                        A Qualified lawyer and worked as a cop in Delhi for 3 decades, Siddhartha decided to enter into social entrepreneurship in pursuit of teaching of his spiritual Master Sri Baba Sevanand ji Maharaj that "निष्काम सेवा" (SELFLESS SERVICE) is the goal of human life.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Bharti Pareek" 
                    src={bharti} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Mrs. Bharti Pareek
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                        An Educationist for 29 years and a Humanist also joined in to contribute to the "child focussed" activities of the NGO.
                        Their pursuit for the cause started way back in the Year 2000 by setting up a 'Children's Club' at their Government residential complex at East of Kailash in Delhi.
                        The club besides running the outdoor and indoor recreational activities for children used to train them for "life skills" too with a view to help them grow as "Good Citizens".
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Anil Kumar" 
                    src={anil} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Anil Kumar
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                        Working as Senior software engineer with having 10 years of experience in a fortune 500 company.
                        Done BCA from MDU and MCA from BIT Mesra.
                        Volunteering with Seva Srijan Foundation which is dedicated to the wellbeing of society in a meaningful way to give back to our community, make a positive impact, and foster personal growth of everyone.
                        By finding the right organization, aligning my skills and interests with their mission, and committing my time and energy to it.
                    </Typography>
                </Box>
            </Box>
            <Box 
                sx={{ 
                    p: { lg: '50px 40px', xs: '40px 20px' },
                    mt: 4,
                    boxShadow: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="Bharti Agrawal" 
                    src={bhartagg} 
                    variant="square"
                    sx={{ 
                        width: { lg: '150px', xs: '100px' }, 
                        height: { lg: '150px', xs: '100px' }, 
                        mr: 10 
                    }} 
                />
                <Box>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '20px', xs: '18px' }, 
                            fontWeight: 'bold',
                            color: textColor,
                            mb: 1 
                        }}
                    >
                        Bharti Agrawal
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: { lg: '18px', xs: '16px' }, 
                            lineHeight: '1.6',
                            color: textColor
                        }}
                    >
                        Currently Working as Scientific Executive-1 in Anusandhan National Research Foundation (ANRF) a statuary body under Department of Science and Technology, New Delhi.
                        Volunteering as a craft instructor at Srijan Seva foundation (SSF) offers a unique opportunity to make a meaningful impact on the community by empowering children through creative expression. As a craft instructor, I can provide valuable skills and a therapeutic outlet for those in need, fostering creativity, boosting self-esteem, and promoting mental well-being. Additionally, I will gain personal fulfilment from seeing the positive changes in children lives, develop my own teaching and interpersonal skills, and contribute to the foundation mission of creating a more inclusive and supportive society.
                    </Typography>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Leadership;
