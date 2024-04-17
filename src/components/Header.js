import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { HEADER_BG_COLOR, LOGO_IMG, HEADER_TEXT_COLOR, HEADER_HOVER_COLOR } from "../constant"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Master.css'
import MenuIcon from '@mui/icons-material/Menu';
import useScreenSize from "../utils/useScreenSize";
import { useNavigate } from "react-router-dom";

const navData = [
    {
        navItem: 'ABOUT US', data: [
           { title: 'Leadership', path: '/' }, { title: 'Partners', path: '/' },
            //{ title: 'Teaching at the Right Level', path: '/' }, { title: 'Hamara Gaon', path: '/' },
            { title: 'Recognition', path: '/' }, { title: "What's New", path: '/' }, { title: 'Legal & Financial Information', path: '/' },
            { title: 'FAQ', path: '/' }]
    },
    {
        navItem: 'PROGRAMS', data: [
            { title: 'Good Citizenship Programme', path: '/aboutus', data: [] }, { title: 'Aftercare Programme', path: '/', data: [] }, { title: 'Skill Development', path: '/', data: [] },
            { title: 'Talent Bank Development', path: '/', data: [] }]
    },
    {
        navItem: 'GET INVOLVED', data: [
            { title: 'Partner with us', path: '/' }, { title: 'Job Opportunities', path: '/' }, { title: 'Internships', path: '/' }]
    },
    {
        navItem: 'RESOURCES', data: [
            { title: 'Events', path: '/' }, { title: 'Photos', path: '/' }, { title: 'Videos', path: '/' },]
    //        { title: 'Publications', path: '/' }, { title: 'Annual Reports', path: '/' },]
    }
]

const MegaMenu = ({ nav, expanded, pageState, navRouteHandler }) => {
// const navigate = useNavigate()

    if (expanded) {
        return <div className="mainContainer" >
            <div className="mainContainerInner" onClick={navRouteHandler}  >
                <Typography sx={{ fontWeight: 700, fontSize: '15px', transition: 'all 0.50s ease', color: pageState === nav ? HEADER_HOVER_COLOR : HEADER_TEXT_COLOR, '&:hover': { color: HEADER_HOVER_COLOR } }}>{nav}</Typography>
                <ExpandMoreIcon className="iconExpand" sx={{ color: HEADER_TEXT_COLOR }} />
            </div>

            <div className="hiddenArea">
                <Box sx={{ mt: '5px', mb: '20px', width: '88%' }}>
                    {nav !== "PROGRAMS" ?
                        navData.map((item) => {
                            return item.navItem === nav &&
                                item.data.map((navs) => {
                                    return <Box key={navs.title} sx={{ p: '10px', pl: '20px', pb: '0px', width: '100%', '&:hover': { color: HEADER_HOVER_COLOR } }}>
                                        <Typography sx={{ transition: 'all 0.50s ease', fontWeight: 500, fontSize: '15px', }}>{navs.title}</Typography>
                                    </Box>
                                })

                        })
                        :
                        navData[1].data.map((navs) => {
                            return <Box sx={{ p: '10px', pl: '20px', pb: '0px', width: '100%' }}>
                                <Typography sx={{ transition: 'all 0.50s ease', fontWeight: 500, fontSize: '15px', '&:hover': { color: HEADER_HOVER_COLOR } }}>{navs.title}</Typography>
                                {navs.data.map((ele) => {
                                    return <Box key={ele} sx={{ p: '10px', pl: '20px', pb: '0px', width: '100%' }}>
                                        <Typography onClick={navRouteHandler} sx={{ transition: 'all 0.50s ease', fontWeight: 500, fontSize: '15px', '&:hover': { color: HEADER_HOVER_COLOR } }}>{ele}</Typography>
                                    </Box>
                                })}
                            </Box>
                        })
                    }
                </Box>
            </div>
        </div>
    } else {
        return <Typography onClick={navRouteHandler} sx={{ fontWeight: 700, fontSize: '15px', transition: 'all 0.50s ease', color: pageState === 'contact' ? HEADER_HOVER_COLOR : HEADER_TEXT_COLOR, cursor: 'pointer', '&:hover': { color: HEADER_HOVER_COLOR } }}>{nav}</Typography>
    }
}

const Header = ({ pageState }) => {
    const { state } = useScreenSize()
    const navigate = useNavigate()
    return (<>
        <AppBar>
            <Toolbar sx={{ bgcolor: HEADER_BG_COLOR, display: 'flex', justifyContent: state.currentScreenSize > 990 ? 'space-evenly' : 'space-between', alignItems: 'center' }}>
                <img onClick={() => navigate('/')} src={LOGO_IMG} alt='logoImage' style={{ cursor: 'pointer' }} width={100} />
                {state.currentScreenSize > 990 && <div style={{ display: 'flex', padding: '10px', alignItems: 'center', justifyContent: 'space-evenly', width: '53%' }}>
                    <MegaMenu nav="HOME" expanded={false} pageState={pageState} navRouteHandler={() => navigate('/')} />
                    <MegaMenu nav="ABOUT US" expanded={false} pageState={pageState} navRouteHandler={() => navigate('/about')} />
                    <MegaMenu nav="PROGRAMS" expanded={false} pageState={pageState} navRouteHandler={() => navigate('/programs')} />
                    <MegaMenu nav="JOIN US" expanded={false} pageState={pageState} navRouteHandler={() => navigate('/joinUs')} />
                    <MegaMenu nav="CONTACT" expanded={false} pageState={pageState} navRouteHandler={() => navigate('/contact')} />
                </div>}

                {/* {state.currentScreenSize > 990 && <Box sx={{ borderRadius: '50%', p: '5px 6px', border: '1px solid lightgray', display: 'flex', alignItems: 'center' }}> */}
                    {/* <SearchIcon sx={{ color: HEADER_HOVER_COLOR, cursor: 'pointer' }} /> */}
                {/* </Box>} */}
                {state.currentScreenSize < 990 && <Box sx={{ p: '5px 6px', display: 'flex', alignItems: 'center' }}>
                    <MenuIcon sx={{ color: 'black' }} />
                </Box>}
            </Toolbar>
        </AppBar>
        <Toolbar />
    </>
    )
}

export default Header