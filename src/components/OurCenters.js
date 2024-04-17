import { Box, Grid, Typography } from '@mui/material'
import HeadingGlobal from '../global/HeadingGlobal'
import otherWeb from '../assets/otherwebsite.png'
import aser from '../assets/aser.png'
import { HEAD_OFFICE_ADDRESS,DELHI_ADDRESS, JAIPUR_ADDRESS, LOGO_IMG } from '../constant'
import React, { useState, useEffect } from 'react';

const data = [
    // { pic: otherWeb, link: 'Pratham Infotech Foundation', redirect: '#' },
    { pic: LOGO_IMG, link: 'Head Office', redirect: HEAD_OFFICE_ADDRESS,mapUrl:`https://maps.googleapis.com/maps/api/staticmap?center=28.4611191,77.1494163&zoom=10&size=600x450&maptype=roadmap&markers=color:red%7Clabel:A%7C28.4611191,77.1494163` },
    { pic: LOGO_IMG, link: 'Jonapur Center', redirect: DELHI_ADDRESS ,mapUrl:`https://maps.googleapis.com/maps/api/staticmap?center=28.4611191,77.1494163&zoom=10&size=600x450&maptype=roadmap&markers=color:red%7Clabel:A%7C28.4611191,77.1494163`},
    { pic: LOGO_IMG, link: 'Jaipur Centre', redirect: JAIPUR_ADDRESS,mapUrl: `https://maps.googleapis.com/maps/api/staticmap?center=37.7749,-122.4194&zoom=10&size=600x450&maptype=roadmap&markers=color:red%7Clabel:A%7C37.7749,-122.4194`}
]

const OtherWebsite = () => {
    
   
    return (
        <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
            <HeadingGlobal title="OUR CENTER'S" />
            <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: { lg: '20px', xs: '0px' }, mb: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {data.map((item) => {
                    return <Grid item key={item.link} sx={{ m: '0px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ border: '1px solid lightgray', width: '170px', height: '70px', p: '50px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img width={'150px'} height={'70px'} src={item.pic} alt='pic' />
                            {/* <div>
                              <img
                                   src={imageUrl}
                                   alt="Google Map"
                                   width="600"
                                   height="450"
                                  />
                               </div> */}
                        </Box>
                        <Box sx={{ mt: '20px', mb: '20px' }}>
                            <Typography textAlign={'center'}>
                                { <a style={{ color: 'black' }} href={item.mapUrl}  target="_blank" rel="noopener noreferrer">{item.link}</a> }
                    
                            </Typography>
                        </Box>
                    </Grid>
                })}

            </Grid>
        </Box>
    )
}

export default OtherWebsite