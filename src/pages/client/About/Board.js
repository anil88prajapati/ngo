import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import aboutusbg from '../../../assets/aboutUs.jpg'
import Header from '../../../components/Header'
import Footer from '../../../global/Footer'
import HeadingGlobal from '../../../global/HeadingGlobal'
import PageBanner from '../../../global/PageBanner'
import { HEADER_HOVER_COLOR } from '../../../constant'
import apple from '../../../assets/apple-icon.png'
import bulb from '../../../assets/bulb-icon.png'
import monitor from '../../../assets/moniter-icon.png'
import graph from '../../../assets/graph-icon.png'
import contactpartner from '../../../assets/contact-partnericon.png'
import donateicon from '../../../assets/donate-icon.png'
import workwithus from '../../../assets/work-with-usicon.png'
import getInvolved from '../../../assets/get-involvedicon.png'
import {ABOUT_US_CONTENT, ABOUT_US_CONTENT1} from '../../../constant'

const Board = () => {
    return (
       <>
        <Header pageState="BOARD" />
            <PageBanner bannerPic={aboutusbg} />
            <Grid container sx={{ mt: "30px", p: '0px 100px' }}>
                <Grid item lg={8}>
                    <Grid item >
                        <HeadingGlobal title="INTRODUCTION" />
                        <Typography sx={{ opacity: 0.6, mt: '20px', mb: '10px', letterSpacing: '1.3px', lineHeight: '30px', fontSize: '15px' }}>
                        {ABOUT_US_CONTENT} 
                        </Typography>
                        <Typography sx={{ opacity: 0.6, mt: '20px', mb: '10px', letterSpacing: '1.3px', lineHeight: '30px', fontSize: '15px' }}>
                        {ABOUT_US_CONTENT1}
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Grid item lg={5} sx={{ m: '0px 30px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={apple} alt='picapple' style={{ margin: '30px 0px' }} />
                            <Typography textAlign={'center'} sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>DEDICATED TO LARGE-SCALE CHANGE</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>The mission to improve the quality of education in India and ensure that all children not only attend but also thrive in school is being accomplished by working in collaboration with the government, local communities, parents, teachers, volunteers, and civil society members. Our programs aim to supplement rather than replace governmental efforts. They are implemented on a large scale to not only reach as many children as possible, but also to create an adoptable demonstration model for state governments.</Typography>
                        </Grid>
                        <Grid item lg={5} sx={{ m: '0px 30px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={bulb} alt='bulb' style={{ margin: '30px 0px' }} />
                            <Typography textAlign={'center'} sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>A FOCUS ON INNOVATION</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>strategies reconfigure teaching methodologies, break down traditional tactics,
                                and challenge the current rote learning mechanisms in our schools. Our programs are innovative and outcome-driven. In its early years SSF developed innovative teaching-learning approaches, materials, and measurement methods. In 2005, we pioneered a nationwide survey of schooling and learning that has had a major impact on national and international policy discussions.</Typography>
                        </Grid>
                        <Grid item lg={5} sx={{ m: '0px 30px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={monitor} alt='monitor' style={{ margin: '30px 0px' }} />
                            <Typography textAlign={'center'} sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>LOW-COST, REPLICABLE MODELS</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>SSF has worked to develop low-cost, replicable models that can easily spread and be adopted by other organizations. Thousands of volunteers work with SSF to implement learning interventions at the grassroots level. These volunteers are mobilized, trained, and monitored by the SSF team. They are also provided with teaching-learning material and books developed by SSF. Not only does this ensure more effective implementation of the programs, but it also helps to build an infrastructure focused on providing quality education to children.</Typography>
                        </Grid>
                        <Grid item lg={5} sx={{ m: '0px 30px 0px 0px', borderTop: `1px solid ${HEADER_HOVER_COLOR}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={graph} alt='graph' style={{ margin: '30px 0px' }} />
                            <Typography textAlign={'center'} sx={{ fontWeight: 700, m: '0px', fontSize: '14px' }}>PROGRAMS RESULTS AND ACCOUNTABILITY</Typography>
                            <Typography sx={{ m: '20px 0px', opacity: 0.6, letterSpacing: '1.3px', lineHeight: '22px', fontSize: '15px' }}>All programs are designed to ensure that learning levels in schools and communities increase, education reaches all children who are in school or unable to use school facilities, and youth get well trained for job opportunities. Testing tools are also developed by the SSF team to check the learning levels of children so as to determine the course of action best suited to each child and to assess impact of our programs.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <HeadingGlobal title="GET INVOLVED" />
                        <Grid container sx={{ mt: '20px' }}>
                            <Grid item lg={2.6} sx={{ p: '20px 0px', mr: '20px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={contactpartner} alt='contactpartner' />
                                <Button sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>Partner with us</Button>
                            </Grid>
                            <Grid item lg={2.6} sx={{ p: '20px 0px', mr: '20px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={donateicon} alt='donateicon' />
                                <Button sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>Donate</Button>
                            </Grid>
                            <Grid item lg={2.6} sx={{ p: '20px 0px', mr: '20px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={workwithus} alt='workwithus' />
                                <Button sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>Job Opportunities</Button>
                            </Grid>
                            <Grid item lg={2.6} sx={{ p: '20px 0px', mr: '20px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={getInvolved} alt='contactpartner' />
                                <Button sx={{ p: '10px 3px', bgcolor: HEADER_HOVER_COLOR, mt: '30px', width: '100%' }}>Internships</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* <Grid item lg={4} sx={{ pl: '20px' }}>
                    <HeadingGlobal title="Introduction" />

                </Grid> */}
            </Grid>

            <Footer />
            </>
    )
}

export default Board