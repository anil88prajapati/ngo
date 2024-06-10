import { Box, Grid, Typography } from '@mui/material';
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
    { pic: computer, title: 'Computer Classes', para: 'Computer classes offer several benefits, especially for those who are new to using computers or have limited experience. With this we can improve job opportunities, enhance communication and can be efficient in data handling.', path: '/about' },
    { pic: englishClass, title: 'English Speaking Classes', para: 'English proficiency offers a multitude of benefits, both personally and professionally, due to its widespread use as a global language. Seva Srijan Foundation offers great English classes which can enhance career opportunities and benefit academics.', path: '/' },
    { pic: artCraft, title: 'Art & Craft', para: 'Art and craft classes offer numerous benefits, fostering creativity, skill development, and personal growth across various aspects of life. This helps us to enhance creativity, reduce stress, develop fine motor skills, and boost self-esteem and confidence.', path: '/' },
    { pic: music, title: 'Dance & Music', para: 'Whether as a hobby, for personal enjoyment, or with aspirations for a professional career in the arts, participation in dance and music classes offers numerous physical, emotional, cognitive, and social benefits that contribute to overall well-being and personal development.', path: '/' },
    { pic: tution, title: 'Academic Support', para: 'Academic support serves as a supplementary educational support system that can address individual learning needs, boost academic performance, and foster a deeper understanding of subjects. A child can benefit and improve understanding and performance and hence enhance confidence.', path: '/' },
    { pic: library, title: 'Library', para: 'Libraries are valuable community assets that play a vital role in fostering education, literacy, knowledge dissemination, cultural preservation, and community engagement, benefiting individuals and society as a whole.', path: '/' },
    { pic: careerCounsil, title: 'Career Counselling', para: 'At Seva Srijan Foundation, we aim to empower individuals to make informed career choices, manage career transitions, and achieve personal and professional fulfillment by aligning their skills, interests, and values with suitable career paths.', path: '/about' },
];

const WhatsNew = () => {
    return (
        <>
            <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
                <HeadingGlobal title="Learning Beyond Classroom" />
                <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '10px', mb: '0px' }}>
                    {data.map((item) => (
                        <Grid key={item.title} item container sx={{ mb: '18px' }}>
                            <Grid item lg={1.6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img width={"150px"} height={'150px'} src={item.pic} alt="schooldreams" />
                            </Grid>
                            <Grid item lg={10} xs={12} sx={{ p: '0px 15px' }}>
                                <Typography sx={{ textAlign: { lg: 'left', xs: 'center' }, mt: '10px', fontWeight: 900, color: '#5b3c14', fontSize: '20px' }}>{item.title}</Typography>
                                <Typography sx={{ fontSize: '16px', mt: '20px', fontWeight: 500, color: '#5b3c14' }}>{item.para}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default WhatsNew;
