import { Box, Grid, Typography } from '@mui/material';
import HeadingGlobal from '../global/HeadingGlobal';
import { HEAD_OFFICE_ADDRESS, DELHI_ADDRESS, JAIPUR_ADDRESS, LOGO_IMG } from '../constant';

const data = [
    { pic: LOGO_IMG, link: 'Head Office', redirect: HEAD_OFFICE_ADDRESS, mapUrl: 'https://maps.app.goo.gl/jbquwAsaGv1Jczet8' },
    { pic: LOGO_IMG, link: 'Jaunapur (Delhi) Center', redirect: DELHI_ADDRESS, mapUrl: 'https://maps.app.goo.gl/ic8cND3c7U4AEfNSA' },
    { pic: LOGO_IMG, link: 'Jaipur (Rajasthan) Chapter', redirect: JAIPUR_ADDRESS, mapUrl: 'https://maps.app.goo.gl/k99MptLTjKA7ho8b7' }
];
const OurCenters = () => {
    return (
        <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
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
                                    <a style={{ color: 'black' }} href={item.mapUrl} target="_blank" rel="noopener noreferrer">{item.link}</a>
                                </Typography>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default OurCenters;
