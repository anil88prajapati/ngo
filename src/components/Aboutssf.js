import React from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';
import Header from './Header';
import Footer from '../global/Footer';

const Aboutssf = () => {
    return (
        <>
            <Header pageState="Aboutssf" />
            <Box sx={{ backgroundColor: '#f5f5f5', py: 5 }}>
                <Container>
                    <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, textAlign: 'left' }}>
                        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
                            About Seva Srijan Foundation
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            <i>“Children are the living messages we send to a time we will not see.”</i> - John F. Kennedy
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                            INTRODUCTION
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Established in the year 2020 by Mrs. Bharti and Mr. Siddhartha Pareek, SEVA Srijan Foundation (SSF), a Non-Profit Organization (NPO) incorporated under the Companies Act, 2013, is working towards the attainment of its mission “REACHING THE UNREACHED” and justifying its motto “HOPE HELP HUMANITY”.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            SSF, a dream initiative of Mr. Siddhartha Pareek, helps marginalized youth in realizing their dreams of becoming skilled, contributing, and cosmopolitan ‘Good Citizens’. The idea behind the establishment of SSF is the upliftment of under-privileged children and their families, by way of education, holistic healthcare, skill development; leading them to employability.
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                            FOUNDER DIRECTORS
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Mr. Siddhartha Pareek has witnessed the day-to-day travails for survival faced by the marginalized youth in society. In his 3 decades’ career as a Cop, he has conceptualized several social projects amongst which “YuvaConnect” - a pilot project run jointly by Delhi Police, Prayas JAC Society & Delhi Commission for Protection of Child Rights (DCPCR) and Mewat Rural Education Programme are worth mentioning.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Mrs. Bharti Pareek, an educationist for nearly three decades, plays a pivotal role in sketching and running the programs conducted by the Organization. She has proven her mettle in the Mewat Rural Education Programme, run in the backward region of Mewat for improvisation of educational infrastructure in the Govt. schools.
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Their pursuit for ‘Child-focused’ activities can be traced back to the year 2000 when they both set up a “Children’s Club” in East of Kailash, New Delhi; where besides outdoor & indoor recreational activities children were trained for ‘Life Skills’ too, for ensuring their holistic development. This Club is the thematic base for the ideation of SSF programs, having the objective of nurturing young minds to achieve their life dreams. Mr. Pareek’s association with NGOs for execution of various Skill Development programs run by the Rajasthan Skills & Livelihood Development Corporation under Deen Dayal Upadhyay Grameen Kaushalya Yojana (DDUGKY) and Pradhan Mantri Kaushal Vikas Yojana (PMKVY) has contributed amply in his designing the “Skill Development Programme” for SSF.
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                            VISION
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            A society based on legitimate rights, equity, social sensitivity & justice; built on the foundation of Good Citizens.
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                            MISSION
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            SSF has its motto - “HOPE HELP HUMANITY” and its mission - “To identify and channelize the energies of economically & socially marginalized youth towards self-reliance & helping them through awareness, education & skilling” by employing “Educate-Train-Employ” as their pedagogy.
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        OUR ACTIVITY FOCUS
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                        CHILD RIGHTS
<br></br>
                        JUVENILE RIGHTS
<br></br>
                        SUPPLEMENTAL EDUCATION
<br></br>
                        CAREER COUNSELLING
<br></br>
                        SKILL DEVELOPMENT
<br></br>
                        TALENT BANK DEVELOPMENT
<br></br>
                        GOOD CITIZENSHIP
                        </Typography>
                    </Paper>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Aboutssf;
