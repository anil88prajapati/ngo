import React, { useState } from 'react';
import './AftercareProgramme.css';
import Footer from '../global/Footer';

const AftercareProgramme = () => {
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
        <div className="page-background">
            <div className="aftercare-container">
                <div className="quote-section">
                    <h2>Aftercare Programme</h2>
                    <blockquote>
                        “The secret of getting ahead is getting started.”
                        <span>- Mark Twain</span>
                    </blockquote>
                </div>

                <div className="intro-section">
                    <p>
                        SSF in its endeavour to create a just & equitable society for under-privileged
                        children and distressed youth who lose sight of their life objective, has evolved the
                        “Aftercare Programme” to support them in shaping their careers and fulfil their life
                        dreams.
                    </p>
                    <p>
                        Children who stay at orphanages/shelter homes have to leave the homes once they
                        attain the age of 18 years, with no wherewithal to sustain themselves. Likewise,
                        underprivileged children leave their career pursuit owing to scarcity of resources &
                        proper guidance and live in despair. SSF Aftercare model “Educate-Train-Employ”
                        works in a result-oriented manner for these educational dropouts.
                    </p>
                    <p>
                        The objective of SSF behind upgradation of these youth is to provide them with
                        interventions, approaches and strategies that enable them to improve their social
                        functioning with the end goal of getting employment for their sustainability and
                        prove themselves as responsible Citizens.
                    </p>
                </div>

                <div className="reflection-section">
                    <h3>What does the Aftercare Programme mean to you?</h3>
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
        </div>
        <Footer/>
        </>
    );
};

export default AftercareProgramme;
