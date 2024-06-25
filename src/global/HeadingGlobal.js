import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { HEADER_HOVER_COLOR } from '../constant'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HeadingGlobal = ({ title }) => {
    return (
        <Grid container sx={{ borderBottom: `1px solid ${HEADER_HOVER_COLOR}` }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', height: '45px' }}>
                <Box sx={{ height: '35px', bgcolor: 'rgb(46, 139, 87)', p: { lg: '5px 10px', xs: '0px 5px' }, }}><KeyboardArrowRightIcon sx={{ color: 'white', fontSize: '32px' }} /></Box>
                <Box sx={{ p: { lg: '5px 10px', xs: '0px 5px' }, height: '35px', bgcolor: HEADER_HOVER_COLOR, display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: { lg: '20px', sm: '20px', md: '20px', xs: '15px' } }} fontWeight={500} >{title}</Typography>
                </Box>
            </Box>
        </Grid >
    )
}

export default HeadingGlobal