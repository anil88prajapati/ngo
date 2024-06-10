import React from 'react';
import './TalentBankDevelopment.css'; 
import Footer from '../global/Footer';
import Header from './Header';

const TalentBankDevelopment = () => {
    return (
        <>
        <Header/>
        <div className="talent-bank-development-container">
            <div className="quote-section">
                <h2>Talent Bank Development</h2>
                <blockquote>
                    “All our dreams can come true, if we have the courage to pursue them”
                    <span>- Walt Disney</span>
                </blockquote>
            </div>
            <div className="intro-section">
                    <h3>Why Skill Development Programme</h3>
                    <p>
                    Children possessing extraordinary talent and identified by domain experts - Psychological and career counsellors of the SEVA SRIJAN FOUNDATION will be inducted in talent groom right from the age of 7-8 years and would be hand held by experts to be part of innovative talent pool. To fulfil gap between dreams and resources SEVA SRIJAN FOUNDATION will collaborate with other governmental agencies and NGO's also.
                    </p>
                </div>
            <div className="what-we-do-section">
                    <h3>What We Do</h3>
                    <p>
                    Talent Bank development is the flagship programme of SSF wherein innate talents
                    are identified in their formative years and nurtured for achievement of their dream
                    careers. Children possessing extraordinary talent are taken under the SSF wings for
                    their all-over holistic grooming from the age of 7-8 years to be part of SSF’s
                    talent development initiative.
                </p>
                </div>
        </div>
        <Footer/>
        </>
    );
};

export default TalentBankDevelopment;
