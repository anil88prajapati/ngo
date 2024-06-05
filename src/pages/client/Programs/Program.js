import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import PageBanner from '../../../global/PageBanner';
import Footer from '../../../global/Footer';
import aboutusbg from '../../../assets/Programs.jpg';
import HeadingGlobal from '../../../global/HeadingGlobal';
import { HEADER_HOVER_COLOR } from '../../../constant';
import apple from '../../../assets/apple-icon.jpg';
import bulb from '../../../assets/bulb-icon.png';
import monitor from '../../../assets/moniter-icon.png';
import graph from '../../../assets/graph-icon.jpg';
import { ABOUT_US_CONTENT, ABOUT_US_CONTENT1 } from '../../../constant';

const Program = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = (path) => {
        navigate(path);
    };

    return (
        <>
            <Header pageState="PROGRAMS" />
            <PageBanner bannerPic={aboutusbg} text="PROGRAMS"/>
            <Grid container sx={{ mt: "30px", p: '0px 100px' }}>
                <Grid item lg={8}>
                    <Grid item>
                        <HeadingGlobal title="Programs" />
                        <Typography sx={{ opacity: 0.6, mt: '20px', mb: '10px', letterSpacing: '1.3px', lineHeight: '30px', fontSize: '15px' }}>
                            {ABOUT_US_CONTENT}
                        </Typography>
                        <Typography sx={{ opacity: 0.6, mt: '20px', mb: '10px', letterSpacing: '1.3px', lineHeight: '30px', fontSize: '15px' }}>
                            {ABOUT_US_CONTENT1}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12} sx={{ m: '0px 70px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={apple} alt="picapple" style={{ margin: '30px 0px', width: '200px', height: '200px' }} />
                            <Typography textAlign="center" sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>Good Citizenship Programme</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>
                                The mission to improve the quality of education in India and ensure that all children not only attend but also thrive in school is being accomplished by working in collaboration with the government, local communities, parents, teachers, volunteers, and civil society members. Our programs aim to supplement rather than replace governmental efforts. They are implemented on a large scale to not only reach as many children as possible, but also to create an adoptable demonstration model for state governments.
                            </Typography>
                            <Button onClick={() => handleLearnMoreClick('/GoodCitizenshipProgramme')} sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>
                                Learn More
                            </Button>
                        </Grid>
                        <Grid item lg={12} sx={{ m: '0px 70px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={bulb} alt="bulb" style={{ margin: '30px 0px' }} />
                            <Typography textAlign="center" sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>Aftercare Programme</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>
                                Strategies reconfigure teaching methodologies, break down traditional tactics, and challenge the current rote learning mechanisms in our schools. Our programs are innovative and outcome-driven. In its early years SSF developed innovative teaching-learning approaches, materials, and measurement methods. In 2005, we pioneered a nationwide survey of schooling and learning that has had a major impact on national and international policy discussions.
                            </Typography>
                            <Button onClick={() => handleLearnMoreClick('/AftercareProgramme')} sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>
                                Learn More
                            </Button>
                        </Grid>
                        <Grid item lg={12} sx={{ m: '0px 70px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={monitor} alt="monitor" style={{ margin: '30px 0px' }} />
                            <Typography textAlign="center" sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>Skill Development</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>
                                SSF has worked to develop low-cost, replicable models that can easily spread and be adopted by other organizations. Thousands of volunteers work with SSF to implement learning interventions at the grassroots level. These volunteers are mobilized, trained, and monitored by the SSF team. They are also provided with teaching-learning material and books developed by SSF. Not only does this ensure more effective implementation of the programs, but it also helps to build an infrastructure focused on providing quality education to children.
                            </Typography>
                            <Button onClick={() => handleLearnMoreClick('/SkillDevelopment')} sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>
                                Learn More
                            </Button>
                        </Grid>
                        <Grid item lg={12} sx={{ m: '0px 70px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={graph} alt="graph" style={{ margin: '30px 0px',width: '200px', height: '200px' }} />
                            <Typography textAlign="center" sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>Talent Bank Development</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>
                                All our dreams can come true, if we have the courage to pursue them - Walt Disney
                                Talent Bank development is the flagship programme of SSF wherein innate talents are identified in their formative years and nurtured for achievement of their dream careers. Children possessing extraordinary talent are taken under the SSF wings for their all-over holistic grooming from the age of 7-8 years to be part of SSF’s talent development initiative.
                            </Typography>
                            <Button onClick={() => handleLearnMoreClick('/TalentBankDevelopment')} sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Program;
