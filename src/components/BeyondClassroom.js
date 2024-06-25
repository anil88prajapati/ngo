import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import HeadingGlobal from '../global/HeadingGlobal';
import computer from '../assets/computer.jpg';
import artCraft from '../assets/ArtCraft.jpeg';
import music from '../assets/music.jpg';
import tution from '../assets/tution.jpg';
import englishClass from '../assets/englishClass.JPG';
import careerCounsil from '../assets/careerCounsil.jpeg';
import library from '../assets/Library.jpg';

const data = [
    { pic: computer, title: 'Computer Classes', para: 'Computer classes help to refine and discover new computing skills, such as networking or programming creating leeway for employment and livelihood. Computer courses offered by SSF are curated to provide the best benefits to the children who are covered under the Skill Development Programme. ', path: '/about' },
    { pic: englishClass, title: 'English Speaking Classes', para: 'Learning to speak English fluently aids in boosting confidence to communicate effectively and to articulate your thoughts and ideas precisely. The Spoken English classes, which comes under Skill Development Programme at SSF are designed to enhance employment opportunities for the youth.', path: '/' },
    { pic: artCraft, title: 'Art & Craft', para: 'Art & Craft benefits a child in fostering creativity, boosting memory and nurturing the brain towards positive mental health. SSF’s Art & Craft classes provide students with fun and relaxing activities to explore their imagination and self-expression skills.', path: '/' },
    { pic: music, title: 'Dance & Music', para: 'Dance and Music promote neurological development and mental dexterity which is extremely beneficial to children. The Dance & Music classes at SSF centres are well-equipped to develop children and youth physically, emotionally, socially, and cognitively, teaching them dedication & discipline.', path: '/' },
    { pic: tution, title: 'Academic Support', para: 'Academic Support at SSF through supplementary education system benefits students to excel in studies, understand the subjects better and achieve better grades in class, as it makes it easier to work on the school assignments and projects. SSF also promotes “Earn while Learn” programme to help students fud their education.', path: '/' },
    { pic: library, title: 'Library', para: 'Library is essential in local communities by providing access to information and resources, supporting literacy and education, promoting lifelong learning, and serving as a community gathering space. Library facility offered by SSF helps students increase their knowledge and sparks imaginative ideas in them.', path: '/' },
    { pic: careerCounsil, title: 'Career Counselling', para: 'Career counselling sessions at SSF are formulated to help students identify their strengths and weaknesses and provide support in areas where they need improvement. SSF counsellors also assist with course selection and provide career options guidance.', path: '/about' },
];

const runningEvents = [
    'Summer Camp starts on July 5th!',
    'Art & Craft Exhibition on June 30th!',
    'Music & Dance Competition on July 20th!',
    'Library Week from August 1st to August 7th!',
];

const WhatsNew = () => {
    return (
        <>
            <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
                <HeadingGlobal title="Learning Beyond Classroom" />
                <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '10px', mb: '0px' }}>
                    <Grid item lg={8} xs={12} sx={{ pr: { lg: 2, xs: 0 } }}>
                        {data.map((item) => (
                            <Grid key={item.title} item container sx={{ mb: '18px' }}>
                                <Grid item lg={2} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img width={"150px"} height={'150px'} src={item.pic} alt="schooldreams" />
                                </Grid>
                                <Grid item lg={10} xs={12} sx={{ p: '0px 15px' }}>
                                    <Typography sx={{ textAlign: { lg: 'left', xs: 'center' }, mt: '10px', fontWeight: 900, color: '#5b3c14', fontSize: { lg: '24px', xs: '22px' } }}>{item.title}</Typography>
                                    <Typography sx={{ fontSize: { lg: '18px', xs: '16px' }, mt: '20px', fontWeight: 500, color: '#5b3c14' }}>{item.para}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Paper elevation={3} sx={{ p: 2, flex: 1, height: '90%', margin: '5%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Notifications</Typography>
                            <Paper elevation={3} sx={{ p: 2, mt: 2, flex: 1, overflow: 'hidden', height: '1050px' }}>
                                <Box
                                    sx={{
                                        animation: 'scrollTopToBottom 10s linear infinite',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {runningEvents.map((event, index) => (
                                        <Typography key={index} sx={{ my: 1 }}>
                                            {event}
                                        </Typography>
                                    ))}
                                </Box>
                                <style>
                                    {`
                                        @keyframes scrollTopToBottom {
                                            0% { transform: translateY(100%); }
                                            100% { transform: translateY(-100%); }
                                        }
                                    `}
                                </style>
                            </Paper>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default WhatsNew;
