import { Box, Button, Grid, Typography } from '@mui/material'
import HeadingGlobal from '../global/HeadingGlobal'
import aboutPic from '../assets/education.jpg'
import vocational from '../assets/vocational.jpg'
import reserch from '../assets/reserch.jpg'
import vulne from '../assets/vulne.jpg'
import background from '../assets/blurredbackground.png'
import { HEADER_HOVER_COLOR } from '../constant'

const Programs = () => {
    return (<Box sx={{ m: { lg: '0px 40px', xs: '0px' }, p: { lg: '40px 40px', xs: '0px 20px' }, backgroundImage: `url(${background})` }}>
        <HeadingGlobal title="PROGRAMS" />
        <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: { lg: '20px', xs: '0px' }, mb: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item lg={6} xs={12} sx={{ mb: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={'100%'} height={'90%'} src={aboutPic} alt="about us pic" />
                <Box sx={{ position: 'absolute', bottom: '60px', left: 0, bgcolor: HEADER_HOVER_COLOR, p: '5px 10px 5px 10px' }}>
                    <Typography variant='h4' sx={{ fontWeight: 400, fontSize: { lg: '25px', md: '20px', sm: '20px', xs: '12px' } }}>Education</Typography>
                </Box>
            </Grid>
            <Grid item lg={6} xs={12} sx={{ p: '0px 20px 0px 20px', mb: { xs: '20px', lg: '0px' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Box sx={{ p: { lg: '10px 10px 10px 20px', xs: '5px 5px 5px 10px' }, mt: '0px' }}>
                        <Typography variant='h3' sx={{ fontWeight: 100, fontSize: { lg: '40px', md: '20px', sm: '20px', xs: '30px' } }}>Education</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', bgcolor: 'transparent', p: { lg: '10px 10px 10px 20px', xs: '5px 5px 5px 10px' }, m: '0px 0px', }}>
                        <Typography variant='p' sx={{ fontWeight: 300, fontSize: { lg: '19px', md: '16px', sm: '12px', xs: '12px' } }}>
                            Across the spectrum from Early Childhood Education to Secondary Education, our programs strive to achieve focused objectives across different segments, as defined by our understanding of existing gaps and the impact of our innovations over time.
                        </Typography>
                    </Box>
                    <Box sx={{ ml: { lg: '20px', xs: '5px' }, mt: '20px' }}>
                        <Button variant='contained' size='small' sx={{ fontSize: { lg: '14px', xs: '10px' }, textTransform: 'unset', bgcolor: '#f4bb03', color: 'black', fontWeight: 600, '&:hover': { bgcolor: '#f4bb03' } }}>Learn more</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={3.5} xs={12} sx={{ mr: '20px', mb: { xs: '20px', lg: '0px' }, ml: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={'100%'} height={'100%'} src={vocational} alt="about us pic" />
                <Box sx={{ position: 'absolute', bottom: '23px', left: 0, bgcolor: HEADER_HOVER_COLOR, p: '5px 10px 5px 10px' }}>
                    <Typography variant='h4' sx={{ fontWeight: 400, fontSize: { lg: '18px', md: '15px', sm: '13px', xs: '10px' } }}>Vocational Training</Typography>
                </Box>
            </Grid>
            <Grid item lg={3.5} xs={12} sx={{ mr: '20px', mb: { xs: '20px', lg: '0px' }, ml: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={'100%'} height={'100%'} src={reserch} alt="about us pic" />
                <Box sx={{ position: 'absolute', bottom: '23px', left: 0, bgcolor: HEADER_HOVER_COLOR, p: '5px 10px 5px 10px' }}>
                    <Typography variant='h4' sx={{ fontWeight: 400, fontSize: { lg: '18px', md: '15px', sm: '13px', xs: '10px' } }}>Research & Advocacy</Typography>
                </Box>
            </Grid>
            <Grid item lg={3.5} xs={12} sx={{ mr: '20px', mb: { xs: '20px', lg: '0px' }, ml: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={'100%'} height={'100%'} src={vulne} alt="about us pic" />
                <Box sx={{ position: 'absolute', bottom: '23px', left: 0, bgcolor: HEADER_HOVER_COLOR, p: '5px 10px 5px 10px' }}>
                    <Typography variant='h4' sx={{ fontWeight: 400, fontSize: { lg: '18px', md: '15px', sm: '13px', xs: '10px' } }}>Vulnerable Children</Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
    )
}

export default Programs