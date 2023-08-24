import React from 'react'
import HeadingGlobal from '../global/HeadingGlobal'
import { Box, Grid, Typography } from '@mui/material'
import two from '../assets/22.jpg'
import four from '../assets/14.png'
import five from '../assets/500.png'
import one from '../assets/1.png'
import { HEADER_HOVER_COLOR } from '../constant'

const Progress = () => {
    return (
        <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
            <HeadingGlobal title="PROGRESS-O-METER 2020-21" />
            <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '30px 0px 50px 0px', mb: '20px' }}>
                <Grid item lg={3} xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box style={{ width: '100%' }}>
                        <Typography textAlign={'center'} sx={{ bgcolor: { xs: HEADER_HOVER_COLOR, lg: 'white' }, fontSize: '16px', fontWeight: 900, }}>Activities in</Typography>
                    </Box>
                    <img src={two} alt="numberPic" />
                    <Typography textAlign={'center'} sx={{ fontSize: '16px', fontWeight: 300, opacity: 0.3 }}>States & Union Territories</Typography>
                </Grid>
                <Grid item lg={3} xs={12} sx={{ mt: { xs: '20px', lg: '0px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box style={{ width: '100%' }}>
                        <Typography textAlign={'center'} sx={{ bgcolor: { xs: HEADER_HOVER_COLOR, lg: 'white' }, fontSize: '16px', fontWeight: 900, }}>Government partnerships in</Typography>
                    </Box>
                    <img src={four} alt="numberPic" />
                    <Typography textAlign={'center'} sx={{ fontSize: '16px', fontWeight: 300, opacity: 0.3 }}>States & Union Territories</Typography>
                </Grid>
                <Grid item lg={3} xs={12} sx={{ mt: { xs: '20px', lg: '0px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box style={{ width: '100%' }}>
                        <Typography textAlign={'center'} sx={{ bgcolor: { xs: HEADER_HOVER_COLOR, lg: 'white' }, fontSize: '16px', fontWeight: 900, }}>Activities engaged</Typography>
                    </Box>
                    <img src={five} alt="numberPic" />
                    <Typography textAlign={'center'} sx={{ fontSize: '16px', fontWeight: 300, opacity: 0.3 }}>Thousand Parents & Volunteers</Typography>
                </Grid>
                <Grid item lg={3} xs={12} sx={{ mt: { xs: '20px', lg: '0px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box style={{ width: '100%' }}>
                        <Typography textAlign={'center'} sx={{ bgcolor: { xs: HEADER_HOVER_COLOR, lg: 'white' }, fontSize: '16px', fontWeight: 900, }}>Programs reached</Typography>
                    </Box>
                    <img src={one} alt="numberPic" />
                    <Typography textAlign={'center'} sx={{ fontSize: '16px', fontWeight: 300, opacity: 0.3 }}>Million Children & Youth</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Progress