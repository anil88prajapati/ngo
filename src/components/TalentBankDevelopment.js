import React,{ useState } from 'react';
import './TalentBankDevelopment.css'; 
import Footer from '../global/Footer';
import Header from './Header';

const TalentBankDevelopment = () => {
        const [reflection, setReflection] = useState('');
        const [submitted, setSubmitted] = useState(false);
    
        const handleInputChange = (e) => {
            setReflection(e.target.value);
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setSubmitted(true);
        };
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

            <div className="description-section">
                <p>
                    Talent Bank development is the flagship programme of SSF wherein innate talents
                    are identified in their formative years and nurtured for achievement of their dream
                    careers. Children possessing extraordinary talent are taken under the SSF wings for
                    their all-over holistic grooming from the age of 7-8 years to be part of SSF’s
                    talent development initiative.
                </p>
            </div>

            <div className="reflection-section">
                <h3>What does the Talent Bank development mean to you?</h3>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={reflection}
                            onChange={handleInputChange}
                            placeholder="Share your thoughts..."
                        />
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <p>Thank you for your submission!</p>
                )}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default TalentBankDevelopment;
