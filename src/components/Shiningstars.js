import React from 'react';
import './Shiningstars.css';
import { Card, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material';
import Header from "./Header";
import Footer from "../global/Footer";
import shiningstar1 from './../assets/shiningstar1.jpg';
import shiningstar2 from './../assets/shiningstar2.jpg';
import shiningstar3 from './../assets/shiningstar3.jpg';

const Shiningstars = () => {
    return (
        <>
            <Header pageState="SHINING STARS" />
            <Box className="shiningstars-page" sx={{ flexGrow: 1 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="shiningstars-card">
                            <CardMedia
                                component="img"
                                className="shiningstars-media"
                                image={shiningstar1}
                                alt="Anshika"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className="shiningstars-title">
                                    Anshika
                                </Typography>
                                <Typography variant="body2" className="shiningstars-description">
                                    Anshika... got the Bronze for Extempore
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="shiningstars-card">
                            <CardMedia
                                component="img"
                                className="shiningstars-media"
                                image={shiningstar2}
                                alt="Nikita"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className="shiningstars-title">
                                    Nikita
                                </Typography>
                                <Typography variant="body2" className="shiningstars-description">
                                    Nikita... Art is her life (Silver Medalist)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="shiningstars-card">
                            <CardMedia
                                component="img"
                                className="shiningstars-media"
                                image={shiningstar3}
                                alt="Pritam"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className="shiningstars-title">
                                   Pritam
                                </Typography>
                                <Typography variant="body2" className="shiningstars-description">
                                    Art prodigy Pritam being awarded with "Art Kit" and scholarship cheque by Ms. Vrinda, a Legal Professional & Amateur Artist.....go strength to strength, Pritam
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default Shiningstars;
