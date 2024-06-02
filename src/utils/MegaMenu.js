import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { HEADER_TEXT_COLOR, HEADER_HOVER_COLOR } from '../constant';

const MegaMenu = ({ nav, expanded, pageState, navRouteHandler, navData }) => {
    return (
        <div className="mainContainer">
            <div className="mainContainerInner">
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: '15px',
                        transition: 'all 0.50s ease',
                        color: pageState === nav ? HEADER_HOVER_COLOR : HEADER_TEXT_COLOR,
                        '&:hover': { color: HEADER_HOVER_COLOR },
                    }}
                >
                    {nav}
                </Typography>
                {expanded && <ExpandMoreIcon className="iconExpand" sx={{ color: HEADER_TEXT_COLOR }} />}
            </div>
            {expanded && (
                <div className="hiddenArea">
                    <Box sx={{ mt: '5px', mb: '20px', width: '88%' }}>
                        {navData
                            .find((item) => item.navItem === nav)
                            ?.data.map((navs) => (
                                <Box
                                    key={navs.title}
                                    sx={{
                                        p: '10px',
                                        pl: '20px',
                                        pb: '0px',
                                        width: '100%',
                                        '&:hover': { color: HEADER_HOVER_COLOR },
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => navRouteHandler(navs.path)}
                                >
                                    <Typography sx={{ transition: 'all 0.50s ease', fontWeight: 500, fontSize: '15px' }}>
                                        {navs.title}
                                    </Typography>
                                </Box>
                            ))}
                    </Box>
                </div>
            )}
        </div>
    );
};

export default MegaMenu;
