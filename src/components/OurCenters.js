import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HeadingGlobal from '../global/HeadingGlobal';
import { HEAD_OFFICE_ADDRESS, DELHI_ADDRESS, JAIPUR_ADDRESS, LOGO_IMG } from '../constant';
import esflogo from './../assets/esflogo.jpg';
import aiflogo from './../assets/aiflogo.png';
import aarologo from './../assets/aarologo.jpg';
import partner from './../assets/Partners.jpg';
import sevalaw from './../assets/sevalawoffice.jpg';

const data = [
    { pic: LOGO_IMG, link: 'Head Office', redirect: HEAD_OFFICE_ADDRESS, mapUrl: 'https://maps.app.goo.gl/jbquwAsaGv1Jczet8' },
    { pic: LOGO_IMG, link: 'Jaunapur (Delhi) Chapter', redirect: DELHI_ADDRESS, mapUrl: 'https://maps.app.goo.gl/ic8cND3c7U4AEfNSA' },
    { pic: LOGO_IMG, link: 'Jaipur (Rajasthan) Chapter', redirect: JAIPUR_ADDRESS, mapUrl: 'https://maps.app.goo.gl/k99MptLTjKA7ho8b7' }
];

const partnerLogos = [esflogo, aiflogo, aarologo, partner, sevalaw];

const OurCenters = () => {
    const textColor = '#5b3c14'; 
    return (
        <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' }, color: textColor }}>
            <HeadingGlobal title="OUR CENTERS" />
            <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: { lg: '20px', xs: '0px' }, mb: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {data.map((item) => {
                    return (
                        <Grid item key={item.link} sx={{ m: '0px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ border: '1px solid lightgray', width: '170px', height: '70px', p: '50px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img width={'100px'} height={'120px'} src={item.pic} alt='pic' />
                            </Box>
                            <Box sx={{ mt: '20px', mb: '20px' }}>
                                <Typography textAlign={'center'}>
                                    <a style={{ color: textColor }} href={item.mapUrl} target="_blank" rel="noopener noreferrer">{item.link}</a>
                                </Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>

            <Box sx={{ mt: '40px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '20px', borderRadius: '10px', backgroundColor: '#fff', overflow: 'hidden' }}>
                <Box
                    sx={{
                        display: 'flex',
                        whiteSpace: 'nowrap',
                        animation: 'marquee 15s linear infinite',
                        alignItems: 'center'
                    }}
                >
                    {partnerLogos.map((logo, index) => (
                        <Box key={index} sx={{ display: 'inline-block', mx: '70px' }}>
                            <Link to="/partners">
                                <img src={logo} alt={`partner-logo-${index}`} width="120px" height="120px" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }} />
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>

            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                `}
            </style>
        </Box>
    );
}

export default OurCenters;
