import { Box, Grid, Typography } from '@mui/material'
import HeadingGlobal from '../global/HeadingGlobal'
import otherWeb from '../assets/otherwebsite.png'
import aser from '../assets/aser.png'
import { DELHI_ADDRESS, JAIPUR_ADDRESS, LOGO_IMG } from '../constant'

const data = [
    { pic: LOGO_IMG, link: 'Pratham Infotech Foundation', address: "Jonapur Village 2nd Floor, New Delhi - 110 047" },
    { pic: LOGO_IMG, link: 'ASER Centre', address: "54/13, Mansarovar, Jaipur-302020, Rajasthan" }
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
                        </Box>
                        <Box sx={{ mt: '20px', mb: '20px' }}>
                            <Typography textAlign={'center'}>
                                {/* <a style={{ color: 'black' }} href={item.redirect}>{item.link}</a> */}
                                <a style={{ color: 'black' }}>{item.address}</a>
                            </Typography>
                        </Box>
                    </Grid>
                })}

            </Grid>
        </Box>
    )
}

export default OtherWebsite