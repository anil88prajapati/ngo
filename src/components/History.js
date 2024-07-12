import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Header from "./Header";
import Footer from "../global/Footer";
import logo from './../assets/SevaSrijanLogo.jpeg';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundImage: `url(${logo})`,
    backgroundSize: '230%', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay', 
    padding: theme.spacing(4),
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
}));

const textColor = '#5b3c14';

const History = () => {
    return (
        <>
            <Header />
            <Box sx={{ py: 4, backgroundColor: '#ffb300' }}>
                <Container maxWidth="md">
                    <StyledPaper>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: textColor, fontStyle: 'italic' }}>
                            How the journey began…….
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            The dream to create SEVA Srijan Foundation triggered in the minds of Mrs. Bharti and Mr. Siddhartha Pareek in 1999, when inspired by the teachings of Baba Sevanand Ji Maharaj on “निष्काम सेवा” (SELFLESS SERVICE), they joined ‘Prayas’-A child centric NGO with a PAN India footprint as volunteers of Prayas Anurag Sponsorship Programme to bring smile on the faces of marginalized children.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            After a year, they both set up a ‘Children’s Club’ at their Government residential complex at East of Kailash in Delhi. The club besides running the outdoor and indoor recreational activities for children used to train them for “life skills” too with a view to help them grow as “Good Citizens”.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            A Cop turned lawyer, Siddhartha’s stint at the United Nations was the change maker behind his mindset to enter social entrepreneurship for bringing a positive impact into the lives of hundreds and thousands of underprivileged children. Bharti, an Educationist of more than 3 decades is the prime motivational force & vital contributor in his pursuit to lit up the lives of these children and youth.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            Bharti applied her experience at Primary Education to the "Mewat Rural Education Programme" (MREP) run by the Shri Ram Foundation in the most backward Mewat region of Haryana (in NCR) in 2010-2012. She remained associated with the execution of the programme in the government Schools in Nuh, to improve the educational experience for primary children.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            In 2010, as a measure to cover "Burgle and Burn" crime menace in National capital, Siddhartha got the opportunity to glance into the minds of juveniles from Delhi slums involved in such incidents and conceptualized a project for their rehabilitation & reintegration titled "YuvaConnect" later on rechristened as "YUVA" which was run jointly by the NGO "Prayas" Delhi Police and Delhi Commission for Protection of Children's Right (DCPCR) as a "Pilot Project" with 86 children in its fold.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            Siddhartha possesses experience of running Skill Development programmes for "Prayas" in Rajasthan under Deen Dayal Upadhayay Grameen Kaushalya Yojana (DDUGKY) and Pradhan Mantri Kaushal Vikas Yojana (PMKVY) scheme of the government, in association with the Rajasthan Skill & Livelihoods Development Corporation (RSLDC).
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            Bharti & Siddhartha felt the need to extrapolate their “HOPE HELP HUMANITY” motto that translated in transformation of just 100 lives in three long decades for the benefit of a wider cross section of the marginalized society. Having observed the learning & developmental gaps owing to socio-economic differential in rural children, compared to their urban peers, the duo adopted 8 villages -Jaunapur, Mandi, Fatehpur, Gadaipur, Sultanpur, Manglapuri, Ghitorni & Ayanagar - as their turf to start in 2020, around Sri Baba Neem Karoli Seva Ashram (their alma mater for selfless service) at village Jaunapur, in Mehrauli Tehsil of Delhi.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor, fontWeight: 'bold', textAlign: 'justify' }}>
                            SEVA Srijan Foundation has since set-up three centres in the states of Delhi, Uttarakhand & Rajasthan having around 3000 children in its fold.
                        </Typography>
                    </StyledPaper>
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default History;
