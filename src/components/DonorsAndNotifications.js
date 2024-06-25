import React from 'react';
import { Box, Paper, Typography } from "@mui/material";

const DonorsAndNotifications = () => {
    return (
        <Box sx={{ maxWidth: '93%', mx: 'auto', p: 2, boxShadow: '3px 3px 13px rgba(0,0,0,0.40), -3px -3px 13px rgba(0,0,0,0.40)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Paper elevation={3} sx={{ p: 2, mr: 2, flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold',textAlign:'center' }}></Typography>
                    <Paper elevation={3} sx={{ p: 15, mr: 2, flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}></Typography>
                    
                </Paper>
                </Paper>
                <Paper elevation={3} sx={{ p: 2, ml: 2, flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign:'center' }}></Typography>
                    <Paper elevation={3} sx={{ p: 15, mr: 2, flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}></Typography>
                </Paper>
                </Paper>
            </Box>
        </Box>
    );
};

export default DonorsAndNotifications;
