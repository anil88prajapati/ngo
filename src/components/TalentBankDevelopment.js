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
                <h3>Why Talent Bank Development</h3>
                <p>
                    The genesis of this idea is to handhold the children through their journey from “who we are” to “who we want to be” from the day they start dreaming up until they have achieved their dream. Our Founder Director, Mr. Siddhartha Pareek spearheads this programme himself for he believes that many talents go haywire in their dream journey for want of career guidance, lack of resources and sometimes due to lack of family support. These handicaps compel them to live their lives of a compromise deal or sometimes with a perennial sense of regret and remorse.
                </p>
            </div>
            <div className="what-we-do-section">
                <h3>What We Do</h3>
                <p>
                    The selected talents among our Good Citizens’ pool are handheld from the inception till the time they have achieved their dream. The selected talents are provided with career counselling guidance, academic support, and library facilities at the SSF centres. ‘Need cum Merit’ scholarships are provided to these talents so that lack of resources does not sap their valuable energy and digress them from their learning focus.
                </p>
                <p>
                    The programme has a method talent induction process, comprising the following steps:
                </p>
                <div className="induction-steps">
                    <ol> 
                        <li>Analysis of life history from socio-economic cultural point of view;</li>
                        <li>SWOT analysis of the talents with the help of SSF mentors;</li>
                        <li>Dream-Resource mapping, taking into account material & intellectual resources of the talent;</li>
                        <li>Identification of ideals to follow;</li>
                        <li>Identification of career goal;</li>
                        <li>Drawing up learning path – What? Why? When? How?</li>
                        <li>Developing Performance Management System (PMS);</li>
                        <li>Establishing Periodic Performance Review (PPR) mechanism.</li>
                    </ol>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default TalentBankDevelopment;
