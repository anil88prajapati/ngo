import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { DELHI_ADDRESS, EMAIL_ADDR, MOBILE_NUMBERS_DELHI, MOBILE_NUMBERS_MUMBAI, MUMBAI_ADDRESS } from '../constant'

const Footer = () => {
    return (<Grid container sx={{ p: '20px 60px' }}>
        <Divider sx={{ border: '1px solid lightgray', width: '100%' }} />
        <Grid container sx={{ mb: '20px', mt: '30px' }}>
            <Grid item lg={2.4} xs={6} sx={{ mb: '20px' }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item sx={{ mb: '10px' }}>
                        <Typography sx={{ fontWeight: 600 }}>About Us</Typography>
                    </Grid>
                    <Grid item >
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>About Seva Srijan Foundation</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>History</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Board</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Leadership</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Partners</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Where We Work</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={2.4} xs={6} sx={{ mb: '20px' }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item sx={{ mb: '10px' }}>
                        <Typography sx={{ fontWeight: 600 }}>Programs</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Good Citizenship Programme</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Juvenile Aftercare Programme</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Skill Development</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Talent Bank Development</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={2.4} xs={6} sx={{ mb: '20px' }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item sx={{ mb: '10px' }}>
                        <Typography sx={{ fontWeight: 600 }}>Get Involved</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Partner with us</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Donate</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Job Opportunities</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, '&:hover': { opacity: 1 } }}>Internships</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={2.4} xs={12} sx={{ mb: '20px' }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item sx={{ mb: '10px' }}>
                        <Typography sx={{ fontWeight: 600 }}>Delhi Office</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, }}>{DELHI_ADDRESS}</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, }}>{EMAIL_ADDR}</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, }}>{MOBILE_NUMBERS_DELHI}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item lg={2.4} xs={12} sx={{ mb: '20px' }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid item sx={{ mb: '10px' }}>
                        <Typography sx={{ fontWeight: 600 }}>Mumbai Office</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, }}>{MUMBAI_ADDRESS}</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, }}>{EMAIL_ADDR}</Typography>
                        <Typography sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 500, opacity: 0.5, }}>{MOBILE_NUMBERS_MUMBAI}</Typography>
                    </Grid>
                </Grid>
            </Grid> */}
        </Grid>
    </Grid>
    )
}

export default Footer