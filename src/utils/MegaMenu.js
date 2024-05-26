import React from 'react'
import '../pages/Homepage.css'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Grid, Typography } from '@mui/material'
import { HOVER_COLOR, MAIN_COLOR, SECONDARY_COLOR } from '../constant'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// format of getting data as a prop
// const items = [
//     {
//         header: { title: "Header1", item_link: '/' }, data: [{ title: 'item1', item_link: "demo" }, { title: 'item2', item_link: "/" }, { title: 'item3', item_link: "/" }]
//     },
//     {
//         header: { title: "Header2", item_link: '/' }, data: [{ title: 'item1', item_link: "/" }, { title: 'item2', item_link: "/" }, { title: 'item3', item_link: "/" }]
//     },
// ]


const MegaMenuHamburger = ({ title = "GiveTitleName", data = [], navigateHandlerTitleRoute = '/' }) => {
    const navigate = useNavigate()
    const style = {
        navTitle: {
            '&:hover': { opacity: 0.6, borderBottom: `3px solid ${HOVER_COLOR}` },
            transition: "all 0.50s ease",
            mr: "20px",
            color: SECONDARY_COLOR,
            cursor: "pointer",
            textDecoration: "none",
            borderBottom: '3px solid transparent',
            padding: '5px 5px',
            textTransform: 'unset',
            fontSize: '17px',
            fontWeight: 900
        },
        megaMenuTitle: {
            '&:hover': { cursor: 'pointer' },
            fontSize: '18px',
            color: MAIN_COLOR,
            mb: '0px',
            mt: '10px',
            fontWeight: 900,
            lineHeight: 'initial',
            padding: '10px 0px',
            width: 'fit-content'
        },
        megaMenuItems: {
            '&:hover': { cursor: 'pointer', color: MAIN_COLOR },
            color: '#2B2B2B',
            fontSize: '14px',
            padding: '4px 0px',
            lineHeight: 'inherit',
            fontWeight: 100,
            width: 'fit-content',
        }
    }
    if (data.length > 0) {
        return (
            <> 
                <Box component='div' className="dropdown" >
                    <Button onClick={() => navigate(`${navigateHandlerTitleRoute}`)} disableRipple disableElevation disableTouchRipple disableFocusRipple sx={style.navTitle} endIcon={<ExpandMoreIcon />}>
                        {title}
                    </Button>
                    <Box component='div' className="dropdown-content" sx={{ borderTop: `9px solid ${MAIN_COLOR}`, borderBottom: `9px solid ${MAIN_COLOR}` }}>
                        <Grid container className="row">
                            {data.map((item, index) => {
                                return <Grid item xs={2} component='div' key={index} className="column">
                                    <Typography variant='h1' onClick={() => navigate(`${item.header.item_link}`)} sx={style.megaMenuTitle} >{item.header.title}</Typography>
                                    {item.data.map((nav, i) => {
                                        return <Typography variant='h5' key={i} onClick={() => navigate(`${nav.item_link}`)} sx={style.megaMenuItems} >{nav.title}</Typography>
                                    })}
                                </Grid>
                            })}
                        </Grid>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box component='div' className="dropdown">
                    <Button onClick={() => navigate(`${navigateHandlerTitleRoute}`)} disableRipple disableElevation disableTouchRipple disableFocusRipple sx={style.navTitle} >
                        {title}
                    </Button>
                </Box>
            </>
        )
    }

}

export default MegaMenuHamburger