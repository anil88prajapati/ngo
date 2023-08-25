import { Box, Divider, Grid, Typography } from '@mui/material'
import { DELHI_ADDRESS, EMAIL_ADDR, HEADER_HOVER_COLOR, MUMBAI_ADDRESS } from '../constant'
import HeadingGlobal from './HeadingGlobal'

const PageBanner = ({ bannerPic, text }) => {
    return (<>
        <Grid container sx={{ position: 'relative', height: { lg: '500px', md: '400px', xs: '200px', sm: '300px' }, width: '100%', backgroundImage: `url(${bannerPic})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Box sx={{ position: 'absolute', bottom: '40px', left: 0, bgcolor: HEADER_HOVER_COLOR, p: '15px 30px' }}>
                <Typography variant='h4' sx={{ fontWeight: 900, fontSize: { lg: '35px', md: '20px', sm: '20px', xs: '12px' } }}>{text}</Typography>
            </Box>
        </Grid>
        <Grid container sx={{ mt: '40px', p: '0px 30px', mb: '30px' }}>
            <Grid item lg={6} sx={{ p: '0px 30px' }}>
                <HeadingGlobal title="LOCATE US NEAR YOU" />
                <Typography sx={{ fontWeight: 900, m: '20px 0px' }}>CENTRAL OFFICES</Typography>
                <Grid item>
                    <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>DELHI OFFICE</Typography>
                    <Typography sx={{ fontWeight: 300, color: 'gray' }}>
                        {DELHI_ADDRESS}
                    </Typography>
                    <Typography sx={{ fontWeight: 300, color: 'gray' }}>{EMAIL_ADDR}</Typography>
                </Grid>
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '30px 0px', opacity: 0.5 }} />
                <Grid item>
                    <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>MUMBAI OFFICE (REGISTERED)</Typography>
                    <Typography sx={{ fontWeight: 300, color: 'gray' }}>
                        {MUMBAI_ADDRESS}
                    </Typography>
                    <Typography sx={{ fontWeight: 300, color: 'gray' }}>{EMAIL_ADDR}</Typography>
                </Grid>
            </Grid>
            <Grid item lg={6}>
                <HeadingGlobal title="SEND US A MESSAGE" />
                <Typography sx={{ fontWeight: 500, m: '10px 0px' }}>
                    Please feel free to drop all your queries at {EMAIL_ADDR}.
                </Typography>
            </Grid>
        </Grid>
    </>

    )
}

export default PageBanner