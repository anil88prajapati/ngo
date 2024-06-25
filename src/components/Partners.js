import Header from '../components/Header';
import Footer from './../global/Footer';
import partnersbg from '../assets/Partners.jpg';
import sevalawoffice from './../assets/sevalawoffice.jpg';
import esflogo from './../assets/esflogo.jpg';
import aiflogo from './../assets/aiflogo.png';
import aarologo from './../assets/aarologo.jpg';
import { Box, Grid } from '@mui/material';

const Partners = () => {
    const images = [partnersbg, sevalawoffice, esflogo, aiflogo, aarologo];

    return (
        <>
            <Header pageState="Partners" />
            <Box sx={{ p: { lg: '40px', xs: '20px' }, mt: '20px', textAlign: 'center' }}>
                <Grid container spacing={4} justifyContent="center">
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    borderRadius: '8px',
                                    overflow: 'hidden'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={image}
                                    alt={`partner-${index}`}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        maxHeight: { xs: '150px', sm: '200px', md: '250px' },
                                        maxWidth: { xs: '150px', sm: '200px', md: '250px' }
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default Partners;
