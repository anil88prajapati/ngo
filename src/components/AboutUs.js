import { Box, Grid, Typography } from '@mui/material'
import HeadingGlobal from '../global/HeadingGlobal'
import aboutPic from '../assets/pratham.jpg'


const AboutUs = () => {
    return (<Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
        <HeadingGlobal title="ABOUT US" />
        <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '10px', mb: '0px' }}>
            <Grid item lg={6} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img width={'100%'} height={'90%'} src={aboutPic} alt="about us pic" />
            </Grid>
            <Grid item lg={6} xs={12} sx={{ p: { lg: '0px 20px 0px 20px', xs: '0px 0px 0px 0px' } }}>
                <Typography sx={{ lineHeight: '1.4', letterSpacing: '1.2px', fontSize: { lg: '18px', xs: '14px' } }}>Pratham is an innovative learning organization created to improve the quality of education in India. Established in 1995 to provide education to children in the slums of Mumbai, Pratham has grown in both scope and scale, with programs today reaching children and youth across the country.</Typography>
                <Typography sx={{ mb: '20px' }}></Typography>
                <Typography sx={{ lineHeight: '1.4', letterSpacing: '1.2px', fontSize: { lg: '18px', xs: '14px' } }}>As one of the largest non-governmental organizations in the country, Pratham focuses on high-quality, low-cost and replicable interventions to address gaps in the education system. Working directly with children and youth as well as through large-scale collaborations with government systems, Pratham programs reach millions of lives every year. Pratham’s Teaching at the Right Level (TaRL) approach has demonstrated proven impact on children’s learning outcomes and is now being adapted to contexts outside India.</Typography>
            </Grid>
        </Grid>
    </Box>
    )
}

export default AboutUs