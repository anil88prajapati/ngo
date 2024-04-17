import { Box, Grid, Typography } from '@mui/material'
import { HEADER_HOVER_COLOR } from '../constant'

const PageBanner = ({ bannerPic, text }) => {
    return (<>
        <Grid container sx={{ position: 'relative', height: { lg: '500px', md: '400px', xs: '200px', sm: '300px' }, width: '100%', backgroundImage: `url(${bannerPic})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            {/* <Box sx={{ position: 'absolute', bottom: '40px', left: 0, bgcolor: HEADER_HOVER_COLOR, p: '15px 30px' }}>
                <Typography variant='h4' sx={{ fontWeight: 900, fontSize: { lg: '35px', md: '20px', sm: '20px', xs: '12px' } }}>{text}</Typography>
            </Box> */}
        </Grid>
    </>

    )
}

export default PageBanner