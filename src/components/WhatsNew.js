import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import HeadingGlobal from '../global/HeadingGlobal'
import school from '../assets/schoolDreams.png'

const data = [
    { pic: school, title: 'The school of my dreams', para: 'No longer can you see desks and benches in rows facing the blackboard. Now there are rooms with open space where teachers and children can organise themselves in whatever way they want.', path: '/' },
    { pic: school, title: 'Dr. Rukmini Banerji, CEO of Pratham Education Foundation, about the success of ASER and more', para: 'No longer can you see desks and benches in rows facing the blackboard. Now there are rooms with open space where teachers and children can organise themselves in whatever way they want.', path: '/' },
    { pic: school, title: 'Nationwide summer campaigns can plug school education gaps', para: 'No longer can you see desks and benches in rows facing the blackboard. Now there are rooms with open space where teachers and children can organise themselves in whatever way they want.', path: '/' },
    { pic: school, title: "‘सही समय पर उपयोगी आंकड़े मिलें तो दिशा दिखने लगती है’", para: 'निपुण भारत के लक्ष्य को हासिल करना है तो अगले 3-4 वर्षों में हर वर्ष बड़े और ठोस कदम लेने होंगे', path: '/' },
]

const WhatsNew = () => {
    return (
        <Box sx={{ p: { lg: '40px 40px', xs: '40px 20px' } }}>
            <HeadingGlobal title="WHAT'S NEW" />
            <Grid container sx={{ mt: '20px', boxShadow: '1px 5px 13px -1px rgba(0,0,0,0.75)', p: '10px', mb: '0px' }}>
                {data.map((item) => {
                    return <Grid key={item.title} item container sx={{ mb: '18px' }}>
                        <Grid item lg={1.6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img width={"150px"} height={'150px'} src={item.pic} alt="schooldreams" />
                        </Grid>
                        <Grid item lg={10} xs={12} sx={{ p: '0px 15px' }}>
                            <Typography sx={{ textAlign: { lg: 'left', xs: 'center' }, mt: '10px', fontWeight: 900 }}>{item.title}</Typography>
                            <Typography sx={{ fontSize: '13px', mt: '20px', color: 'gray', fontWeight: 500 }}>{item.para}</Typography>
                            <Button disableRipple variant='text' sx={{ textTransform: 'unset' }} size='small'>Know More</Button>
                        </Grid>
                    </Grid>
                })}
            </Grid>
        </Box >
    )
}

export default WhatsNew