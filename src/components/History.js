import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import Header from "./Header";
import Footer from "../global/Footer";

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
            <Box sx={{ py: 4, backgroundColor: '#f0f0f0' }}>
                <Container maxWidth="md">
                    <StyledPaper>
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: textColor }}>
                            Our History
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor }}>
                            Seva Srijan Foundation is started by Mr. Siddhartha Pareek and Mrs. Bharti Pareek. A Qualified lawyer and worked as a cop in Delhi for 3 decades, Siddhartha decided to enter into social entrepreneurship in pursuit of teaching of his spiritual Master Sri Baba Sevanand ji Maharaj that "निष्काम सेवा" (SELFLESS SERVICE) is the goal of human life.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor }}>
                            Mrs. Bharti Pareek, an Educationist for 29 years and a Humanist also joined in to contribute to the "child focussed" activities of the NGO. Their pursuit for the cause started way back in the Year 2000 by setting up a 'Children's Club' at their Government residential complex at East of Kailash in Delhi. The club besides running the outdoor and indoor recreational activities for children used to train them for "life skills" too with a view to help them grow as "Good Citizens".
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor }}>
                            Bharti and Siddhartha joined 'Prayas'- A child centric NGO PAN India footprint as their volunteers in 1999 to contribute their bit for improvement in the lives of marginalized children. Prayas Anurag Sponsorship Program gave them the opportunity to nurture young, talented minds having a gap in their dreams and resources.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor }}>
                            In 2010, as a measure to contain "Burgle and Burn" crime menace in National capital, Siddhartha peeped into the minds of juveniles from Delhi Slums involved in such incidents and conceptualized a project for their rehabilitation & reintegration titled "Yuvaconnect" which was run jointly by the NGO "Prayas" Delhi police and Delhi Commission for Protection of Children's Right (DCPCR) as a "pilot project" with 86 children in its fold. This rehabilitation & reintegration programme has expanded manifold and Delhi Police is continuing with the initiative, rechristened as "YUVA".
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor }}>
                            Bharti applied her experience at Primary Education to the "Mewat Rural Education Programme" (MREP) run by the Shri Ram Foundation in the most backward Mewat region of Haryana (in NCR) in 2010-2012. She remained associated with the execution of the programme in the government Schools in Nuh, to improve the educational experience for primary children. SRF has since expanded the programme manifold.
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: textColor }}>
                            Siddhartha has had experience of running skill Development programmes for "Prayas" in Rajasthan under Deen Dayal Upadhayay Grameen Kaushalya Yojana (DDUGKY) and Pradhan Mantri Kaushal Vikas Yojana (PMKVY) scheme of the government, in association with the Rajasthan Skill & Livelihoods Development Corporation (RSLDC). Bharti & Siddhartha have been making their humble contribution in the sphere of education & healthcare activities run by the great Master Sri Baba Sevanandji at the Baba Neem Karoli Seva Trust in Village Jaunapur, New Delhi.
                        </Typography>
                    </StyledPaper>
                </Container>
            </Box>
            <Footer />
        </>
    );
}

export default History;
