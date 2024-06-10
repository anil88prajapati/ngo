import React from 'react';
import './AftercareProgramme.css';
import Footer from '../global/Footer';
import Header from './Header';

const AftercareProgramme = () => {
    return (
        <>
            <Header/>
            <div className="aftercare-container">
                <div className="quote-section">
                    <h2>Aftercare Programme</h2>
                    <blockquote>
                        “The secret of getting ahead is getting started.”
                        <span>- Mark Twain</span>
                    </blockquote>
                </div>

                <div className="intro-section">
                    <h3>Why Aftercare Programme</h3>
                    <p>
                        Juveniles, we feel have not got their due share of caress & nurturing from NFPs. SEVA SRIJAN FOUNDATION aims at helping them through graded intervention based on Education- Skilling- Employment (ΕTE) model for 10 to 14, 14 tο 18 and 18+ years age groups respectively. Counselling, education & Skilling are to work as transformative tools, leading to rebuilding self-confidence and reintegration in Society of this youthful group, which is mostly ushered into dark alleys of crime world for reasons something beyond their comprehension and very often beyond their capacity to deal with it.
                    </p>
                </div>

                <div className="what-we-do-section">
                    <h3>What We Do</h3>
                    <p>
                        SSF in its endeavour to create a just & equitable society for under-privileged children and distressed youth who lose sight of their life objective, has evolved the “Aftercare Programme” to support them in shaping their careers and fulfil their life dreams.
                    </p>
                    <p>
                        Children who stay at orphanages/shelter homes have to leave the homes once they attain the age of 18 years, with no wherewithal to sustain themselves. Likewise, underprivileged children leave their career pursuit owing to scarcity of resources & proper guidance and live in despair. SSF Aftercare model “Educate-Train-Employ” works in a result-oriented manner for these educational dropouts.
                    </p>
                    <p>
                        The objective of SSF behind upgradation of these youth is to provide them with interventions, approaches and strategies that enable them to improve their social functioning with the end goal of getting employment for their sustainability and prove themselves as responsible Citizens.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AftercareProgramme;
