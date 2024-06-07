import React, { useState } from 'react';
import './GoodCitizenshipProgramme.css';
import Footer from '../global/Footer';
import Header from './Header';


const GoodCitizenshipProgramme = () => {
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
        <div className="gcp-container">
            <div className="quote-section">
                <h2>Good Citizenship Programme</h2>
                <blockquote>
                    “My hope of the future lies in the youths of character,
                    intelligence, renouncing all for the service of others,
                    and obedient – good to themselves and the country at large”
                    <span>- Swami Vivekananda</span>
                </blockquote>
            </div>

            <div className="intro-section">
                <p>
                    Good Citizenship is an important element of Life Skills & Value Education that
                    transforms children into concerned, thinking, and active citizens. It’s never too early
                    for children to start playing an active role in our society & democracy. SSF’s concept
                    of Good Citizenship is based on the following principles:
                </p>
                <ul>
                    <li>Learn democratic values like justice, liberty, equality, inclusivity, sustainability, and social responsibility through experiential learning techniques.</li>
                    <li>Understand what their rights are as citizens and gain the confidence to act in pursuit of these rights – thus learning important life skills.</li>
                    <li>Gain a sense of duty and responsibility as citizens to work for the betterment of their communities, the environment, society, and the nation.</li>
                </ul>
            </div>

            <div className="reflection-section">
                <h3>What does Good Citizenship mean to you?</h3>
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
export default GoodCitizenshipProgramme;
