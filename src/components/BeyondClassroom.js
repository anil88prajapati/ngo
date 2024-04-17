import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeadingGlobal from '../global/HeadingGlobal'
import school from '../assets/schoolDreams.png'
import computer from '../assets/computer.jpg'
import artCraft from '../assets/ArtCraft.jpeg'
import music from '../assets/music.jpg'
import tution from '../assets/tution.jpg'
import englishClass from '../assets/englishClass.JPG'
import careerCounsil from '../assets/careerCounsil.jpeg'

const data = [
    { pic: computer, title: 'Computer Classes', para: 'Computer classes offer several benefits, especially for those who are new to using computers or have limited experience. With this we can improve job oppurtunities, enhance communication and can be efficient in data handling.', path: '/about' },
    { pic: englishClass, title: 'English speaking classes', para: 'English proficiency offers a multitude of benefits, both personality and professionally, due to its widespread use as a global language. Seva Srijan foundation offers a great English classes which can enhance career opportunities and can benefit academics.', path: '/' },
    { pic: artCraft, title: 'Art & Craft', para: 'Art and craft classess offer numerous benefits, fostering creativity, skill development and personal growth across various aspects of life. This helps us to enhance creativity, stress reduction, fine motor skills development, boost self esteem and confidence.', path: '/' },
    { pic: music, title: 'Dance & Music', para: 'Whether as a hobby, for personal enjoyment, or with aspirations for professional career in the arts, participation in dance and music classes offers numerous physical, emotional, cognitive and social benefits that contribute to overall well being and personal development', path: '/' },
    { pic: tution, title: 'Academic Support', para: 'Academic support serves as a supplementary educational support system that can address individual learning needs, boost academic performance, and foster a deeper understanding of subjects. A child can benefit and improve understanding and performance and hence enhance confidence', path: '/' },
    { pic: tution, title: 'Library', para: 'Libraries are valuable community assests that play a vital role in fostering education, literacy, knowledge dissemination, cultural preservation, and community engagement, benefiting individuals and society as a whole', path: '/' },
    { pic: careerCounsil, title: "Career Counselling", para: 'In Seva Srijan foundation we aims to empower individuals to make informed career choices, manage career transitions, and achieve personal and professional fulfillment by aligning their skills, interests and values with suitable career paths.', path: '/about' },
]

const WhatsNew = () => {
    return (
        <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
            <HeadingGlobal title="Learning Beyond Classroom" />
            <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '10px', mb: '0px' }}>
                {data.map((item) => {
                    return <Grid key={item.title} item container sx={{ mb: '18px' }}>
                        <Grid item lg={1.6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img width={"150px"} height={'150px'} src={item.pic} alt="schooldreams" />
                        </Grid>
                        <Grid item lg={10} xs={12} sx={{ p: '0px 15px' }}>
                            <Typography sx={{ textAlign: { lg: 'left', xs: 'center' }, mt: '10px', fontWeight: 900 }}>{item.title}</Typography>
                            <Typography sx={{ fontSize: '13px', mt: '20px', color: 'gray', fontWeight: 500 }}>{item.para}</Typography>
                            {/* <Button disableRipple variant='text' sx={{ textTransform: 'unset' }} size='small' LinkComponent={item.path}>Know More</Button> */}
                        </Grid>
                    </Grid>
                })}
            </Grid>
        </Box >
    )
}

export default WhatsNew