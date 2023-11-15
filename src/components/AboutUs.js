import { Box, Grid, Typography } from '@mui/material'
import HeadingGlobal from '../global/HeadingGlobal'
import aboutPic from '../assets/aboutUs.jpg'
import {ABOUT_US_CONTENT, ABOUT_US_CONTENT1} from '../constant'


const AboutUs = () => {
    return (<Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
        <HeadingGlobal title="ABOUT US" />
        <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '10px', mb: '0px' }}>
            <Grid item lg={6} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={'100%'} height={'90%'} src={aboutPic} alt="about us pic" />
            </Grid>
            <Grid item lg={6} xs={12} sx={{ p: { lg: '0px 20px 0px 20px', xs: '0px 0px 0px 0px' } }}>
                <Typography sx={{ lineHeight: '1.4', letterSpacing: '1.2px', fontSize: { lg: '18px', xs: '14px' } }}>{ABOUT_US_CONTENT} </Typography>
                <Typography sx={{ mb: '20px' }}></Typography>
                <Typography sx={{ lineHeight: '1.4', letterSpacing: '1.2px', fontSize: { lg: '18px', xs: '14px' } }}>{ABOUT_US_CONTENT1} </Typography>
            </Grid>
        </Grid>
    </Box>
    )
}

export default AboutUs