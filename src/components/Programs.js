import { Box, Button, Grid, Typography } from '@mui/material';
import HeadingGlobal from '../global/HeadingGlobal';
import aboutPic from '../assets/goodCitizenship.jpg';
import vocational from '../assets/skillDevelopment.jpeg';
import reserch from '../assets/juvenile.jpg';
import vulne from '../assets/talentBank.jpg';
import background from '../assets/blurredbackground.png';
import { useNavigate } from "react-router-dom";
import { ABOUT_US_CONTENT2,BROWN_COLOR} from '../constant';

const Programs = () => {
    const handleClick = () => {
        navigate('/programs');
        window.scrollTo(0, 0);
    };
    
    const navigate = useNavigate();
    return (
        <Box sx={{ m: { lg: '0px 40px', xs: '0px' }, p: { lg: '40px 40px', xs: '0px 20px' }, backgroundImage: `url(${background})`, color: {BROWN_COLOR} }}>
            <HeadingGlobal title="PROGRAMMES" />
            <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: { lg: '20px', xs: '0px' }, mb: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item lg={6} xs={12} sx={{ mb: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={'100%'} height={'90%'} src={aboutPic} alt="about us pic" />
                    <Box sx={{ position: 'absolute', bottom: '60px', left: 0, bgcolor: '#5BA6A6', p: '5px 10px' }}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: { lg: '25px', md: '20px', sm: '20px', xs: '12px' } }}>GOOD CITIZENSHIP PROGRAMME</Typography>
                    </Box>
                </Grid>   
                <Grid item lg={6} xs={12} sx={{ p: '0px 20px', mb: { xs: '20px', lg: '0px' } }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ p: { lg: '10px 10px 10px 20px', xs: '5px 5px 5px 10px' }, mt: '0px' }}>
                            <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: { lg: '40px', md: '20px', sm: '20px', xs: '30px' } }}>OUR PROGRAMMES</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', bgcolor: 'transparent', p: { lg: '10px 10px 10px 20px', xs: '5px 5px 5px 10px' }, m: '0px 0px' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: { lg: '19px', md: '16px', sm: '12px', xs: '12px' } }}>
                                <Typography sx={{ lineHeight: '1.4', letterSpacing: '1.2px', fontSize: { lg: '18px', xs: '14px' }, textAlign: 'justify' }}>{ABOUT_US_CONTENT2}</Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ ml: { lg: '20px', xs: '5px' }, mt: '20px' }}>
                            <Button variant='contained' size='small' sx={{ fontSize: { lg: '14px', xs: '10px' }, textTransform: 'unset', bgcolor: 'rgb(46, 139, 87)', color: 'black', fontWeight: 'bold', '&:hover': { bgcolor: '#5b3c14' } }} onClick={handleClick}>Learn more</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3.5} xs={12} sx={{ mr: '20px', mb: { xs: '20px', lg: '0px' }, ml: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={'100%'} height={'100%'} src={vocational} alt="about us pic" />
                    <Box sx={{ position: 'absolute', bottom: '23px', left: 0, bgcolor: '#FF7700', p: '5px 10px' }}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: { lg: '18px', md: '15px', sm: '13px', xs: '10px' } }}>SKILL DEVELOPMENT</Typography>
                    </Box>
                </Grid>
                <Grid item lg={3.5} xs={12} sx={{ mr: '20px', mb: { xs: '20px', lg: '0px' }, ml: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={'100%'} height={'100%'} src={reserch} alt="about us pic" />
                    <Box sx={{ position: 'absolute', bottom: '23px', left: 0, bgcolor: '#00bfff', p: '5px 10px' }}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: { lg: '18px', md: '15px', sm: '13px', xs: '10px' } }}>AFTERCARE PROGRAMME</Typography>
                    </Box>
                </Grid>
                <Grid item lg={3.5} xs={12} sx={{ mr: '20px', mb: { xs: '20px', lg: '0px' }, ml: '20px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={'100%'} height={'100%'} src={vulne} alt="about us pic" />
                    <Box sx={{ position: 'absolute', bottom: '23px', left: 0, bgcolor: '#80CC33', p: '5px 10px' }}>
                        <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: { lg: '18px', md: '15px', sm: '13px', xs: '10px' } }}>TALENT BANK DEVELOPMENT</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Programs;
