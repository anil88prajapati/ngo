import React from 'react'
import Header from '../../components/Header'
import Footer from '../../global/Footer'
import PageBanner from '../../global/PageBanner'
import contactPic from '../../assets/contactimage.jpg'
import { Divider, Grid, Typography } from '@mui/material'
import { DELHI_ADDRESS, EMAIL_ADDR, MUMBAI_ADDRESS } from '../../constant'
import HeadingGlobal from '../../global/HeadingGlobal'

const Contact = () => {
    return (
        <>
            <Header pageState="contact" />
            <PageBanner bannerPic={contactPic} text='Contact' />
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
            <Footer />
        </>
    )
}

export default Contact