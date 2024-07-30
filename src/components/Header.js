import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { HEADER_BG_COLOR, LOGO_IMG, HEADER_TEXT_COLOR, HEADER_HOVER_COLOR } from "../constant";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import useScreenSize from "../utils/useScreenSize";
import { useNavigate } from "react-router-dom";
import './Master.css';

const navData = [
    {
        navItem: 'ABOUT US', data: [
            { title: 'Leadership', path: '/Leadership' },
            { title: 'Partners', path: '/Partners' },
            { title: 'Gallery', path: '/Gallery' },
            { title: 'FAQ', path: '/Faq' },
            { title: 'History', path: '/History' }
        ]
    },
    {
        navItem: 'PROGRAMMES', data: [
            { title: 'Good Citizenship Programme', path: '/GoodCitizenshipProgramme' },
            { title: 'Aftercare Programme', path: '/AftercareProgramme' },
            { title: 'Skill Development', path: '/SkillDevelopment' },
            { title: 'Talent Bank Development', path: '/TalentBankDevelopment' },
            { title: 'Shining Stars', path: '/Shiningstars' }
        ]
    },
    {
        navItem: 'JOIN US', data: [
            { title: 'Support Us', path: '/Donate' },
            { title: 'Volunteer Form', path: '/JoinUs' },
            { title: 'Donors List', path: '/Donorlist' } // Added Donors List
        ]
    },
    {
        navItem: 'CONTACT', data: [ // Added CONTACT dropdown
            { title: 'Reach Us', path: '/Contact' },
            { title: 'Write to Us', path: '/Writetous' }
        ]
    }
];

const MegaMenu = ({ nav, expanded, pageState, navRouteHandler, activeNav, setActiveNav }) => {
    if (expanded) {
        return (
            <div className="mainContainer">
                <div className="mainContainerInner">
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: '15px',
                            transition: 'all 0.50s ease',
                            color: pageState === nav || activeNav === nav ? HEADER_HOVER_COLOR : HEADER_TEXT_COLOR,
                            '&:hover': { color: HEADER_HOVER_COLOR }
                        }}
                        onClick={() => setActiveNav(nav)}
                    >
                        {nav}
                    </Typography>
                    <ExpandMoreIcon className="iconExpand" sx={{ color: HEADER_TEXT_COLOR }} />
                </div>

                <div className="hiddenArea">
                    <Box sx={{ mt: '5px', mb: '20px', width: '88%' }}>
                        {navData.map((item) => {
                            return item.navItem === nav &&
                                item.data.map((navs) => (
                                    <Box key={navs.title} sx={{ p: '10px', pl: '20px', pb: '0px', width: '100%', '&:hover': { color: HEADER_HOVER_COLOR } }}>
                                        {navs.title === 'Support Us' ? (
                                            <a href={navs.path} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                                <Typography sx={{ transition: 'all 0.50s ease', fontWeight: 500, fontSize: '15px', color: HEADER_TEXT_COLOR }}>{navs.title}</Typography>
                                            </a>
                                        ) : (
                                            <Typography
                                                onClick={() => { navRouteHandler(navs.path); setActiveNav(nav); }}
                                                sx={{
                                                    transition: 'all 0.50s ease',
                                                    fontWeight: 500,
                                                    fontSize: '15px',
                                                    cursor: 'pointer',
                                                    color: HEADER_TEXT_COLOR
                                                }}
                                            >
                                                {navs.title}
                                            </Typography>
                                        )}
                                    </Box>
                                ))
                        })}
                    </Box>
                </div>
            </div>
        )
    } else {
        return (
            <Typography
                onClick={() => { navRouteHandler(nav.path); setActiveNav(nav); }}
                sx={{
                    fontWeight: 700,
                    fontSize: '15px',
                    transition: 'all 0.50s ease',
                    color: pageState === nav || activeNav === nav ? HEADER_HOVER_COLOR : HEADER_TEXT_COLOR,
                    cursor: 'pointer',
                    '&:hover': { color: HEADER_HOVER_COLOR }
                }}
            >
                {nav}
            </Typography>
        )
    }
}

const Header = ({ pageState }) => {
    const { state } = useScreenSize();
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navRouteHandler = (path) => {
        navigate(path);
        setDrawerOpen(false); // Close drawer on navigation
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    }

    const drawerList = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {navData.map((item) => (
                    <Box key={item.navItem}>
                        <ListItem button onClick={() => setActiveNav(item.navItem)}>
                            <ListItemText primary={item.navItem} />
                        </ListItem>
                        {item.navItem === activeNav && item.data.map((navs) => (
                            <ListItem button key={navs.title} onClick={() => navRouteHandler(navs.path)}>
                                <ListItemText primary={navs.title} sx={{ pl: 4 }} />
                            </ListItem>
                        ))}
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar>
                <Toolbar sx={{ bgcolor: HEADER_BG_COLOR, display: 'flex', justifyContent: state.currentScreenSize > 990 ? 'space-evenly' : 'space-between', alignItems: 'center' }}>
                    <img onClick={() => navigate('/')} src={LOGO_IMG} alt='logoImage' style={{ cursor: 'pointer' }} width={100} />
                    {state.currentScreenSize > 990 ? (
                        <div style={{ display: 'flex', padding: '10px', alignItems: 'center', justifyContent: 'space-evenly', width: '53%' }}>
                            <MegaMenu nav="HOME" expanded={false} pageState={pageState} navRouteHandler={() => navigate('/')} activeNav={activeNav} setActiveNav={setActiveNav} />
                            <MegaMenu nav="ABOUT US" expanded={true} pageState={pageState} navRouteHandler={navRouteHandler} activeNav={activeNav} setActiveNav={setActiveNav} />
                            <MegaMenu nav="PROGRAMMES" expanded={true} pageState={pageState} navRouteHandler={navRouteHandler} activeNav={activeNav} setActiveNav={setActiveNav} />
                            <MegaMenu nav="JOIN US" expanded={true} pageState={pageState} navRouteHandler={navRouteHandler} activeNav={activeNav} setActiveNav={setActiveNav} />
                            <MegaMenu nav="CONTACT" expanded={true} pageState={pageState} navRouteHandler={navRouteHandler} activeNav={activeNav} setActiveNav={setActiveNav} />
                        </div>
                    ) : (
                        <Box sx={{ p: '5px 6px', display: 'flex', alignItems: 'center' }}>
                            <MenuIcon sx={{ color: HEADER_TEXT_COLOR }} onClick={toggleDrawer(true)} />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <Toolbar />
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerList()}
            </Drawer>
        </>
    )
}

export default Header;
