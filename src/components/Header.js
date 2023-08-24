import { AppBar, Box, Toolbar, Typography } from "@mui/material"
import { HEADER_BG_COLOR, LOGO_IMG, HEADER_TEXT_COLOR, HEADER_HOVER_COLOR } from "../constant"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import './Master.css'
import MenuIcon from '@mui/icons-material/Menu';
import useScreenSize from "../utils/useScreenSize";

const navData = [
    {
        navItem: 'ABOUT US', data: [
            { title: 'Board', path: '/' }, { title: 'Leadership', path: '/' }, { title: 'Partners', path: '/' },
            { title: 'Teaching at the Right Level', path: '/' }, { title: 'Hamara Gaon', path: '/' },
            { title: 'Recognition', path: '/' }, { title: "What's New", path: '/' }, { title: 'Legal & Financial Information', path: '/' },
            { title: 'FAQ', path: '/' }]
    },
    {
        navItem: 'PROGRAMS', data: [
            { title: 'Education', path: '/', data: ["Early Childhood Education", "Elementary", "Beyond Elementary", "Digital Initiatives"] }, { title: 'Vocational Training', path: '/', data: [] }, { title: 'Research and Advocacy', path: '/', data: [] },
            { title: 'Vulnerable Children', path: '/', data: [] }, { title: 'COVID-19 Response', path: '/', data: ["HOME", "Learning Readiness & Catch Up", "Lessons from the Pandemic"] },]
    },
    {
        navItem: 'GET INVOLVED', data: [
            { title: 'Partner with us', path: '/' }, { title: 'Job Opportunities', path: '/' }, { title: 'Internships', path: '/' }]
    },
    {
        navItem: 'RESOURCES', data: [
            { title: 'Pratham Digital', path: '/' }, { title: 'Glimpses', path: '/' }, { title: 'Media', path: '/' },
            { title: 'Publications', path: '/' }, { title: 'Annual Reports', path: '/' },]
    }
]

const MegaMenu = ({ nav, expanded }) => {

    if (expanded) {
        return <div className="mainContainer" >
            <div className="mainContainerInner" >
                <Typography sx={{ fontWeight: 700, fontSize: '15px', transition: 'all 0.50s ease', color: HEADER_TEXT_COLOR, '&:hover': { color: HEADER_HOVER_COLOR } }}>{nav}</Typography>
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
                                        <Typography sx={{ transition: 'all 0.50s ease', fontWeight: 500, fontSize: '15px', '&:hover': { color: HEADER_HOVER_COLOR } }}>{ele}</Typography>
                                    </Box>
                                })}
                            </Box>
                        })
                    }

                </Box>
            </div>
        </div>
    } else {
        return <Typography sx={{ fontWeight: 700, fontSize: '15px', transition: 'all 0.50s ease', color: HEADER_TEXT_COLOR, cursor: 'pointer', '&:hover': { color: HEADER_HOVER_COLOR } }}>{nav}</Typography>
    }
}

const Header = () => {
    const { state } = useScreenSize()
    return (
        <AppBar>
            <Toolbar sx={{ bgcolor: HEADER_BG_COLOR, display: 'flex', justifyContent: state.currentScreenSize > 990 ? 'space-evenly' : 'space-between', alignItems: 'center' }}>
                <img src={LOGO_IMG} alt='logoImage' />
                {state.currentScreenSize > 990 && <div style={{ display: 'flex', padding: '10px', alignItems: 'center', justifyContent: 'space-evenly', width: '53%' }}>
                    <MegaMenu nav="ABOUT US" expanded={true} />
                    <MegaMenu nav="PROGRAMS" expanded={true} />
                    <MegaMenu nav="GET INVOLVED" expanded={true} />
                    <MegaMenu nav="RESOURCES" expanded={true} />
                    <MegaMenu nav="CONTACT" expanded={false} />
                </div>}

                {state.currentScreenSize > 990 && <Box sx={{ borderRadius: '50%', p: '5px 6px', border: '1px solid lightgray', display: 'flex', alignItems: 'center' }}>
                    <SearchIcon sx={{ color: HEADER_HOVER_COLOR, cursor: 'pointer' }} />
                </Box>}
                {state.currentScreenSize < 990 && <Box sx={{ p: '5px 6px', display: 'flex', alignItems: 'center' }}>
                    <MenuIcon sx={{ color: 'black' }} />
                </Box>}
            </Toolbar>
        </AppBar>
    )
}

export default Header