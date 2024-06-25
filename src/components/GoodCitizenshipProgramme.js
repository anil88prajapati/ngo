import React from 'react';
import './GoodCitizenshipProgramme.css';
import Footer from '../global/Footer';
import Header from './Header';

const GoodCitizenshipProgramme = () => {
    return (
        <>
            <Header />
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
                    <h3>Why Good Citizenship Programme</h3>
                    <p>
                        Good citizens are the basic unit for a nation. India’s journey from a "developing" to a "developed" nation would require wheels of good citizens. Association with schools for supplemental & value education right from primary lives is the organization's approach towards the development of good citizenry, contributing to national growth.
                    </p>
                </div>

                <div className="what-we-do-section">
                    <h3>What We Do</h3>
                    <p>
                        Good Citizenship is an important element of Life Skills & Value Education that transforms children into concerned, thinking, and active citizens. It’s never too early for children to start playing an active role in our society & democracy. SSF’s concept of Good Citizenship is based on the following principles:
                    </p>
                    <ul>
                        <li>Learn democratic values like justice, liberty, equality, inclusivity, sustainability, and social responsibility through experiential learning techniques.</li>
                        <li>Understand what their rights are as citizens and gain the confidence to act in pursuit of these rights – thus learning important life skills.</li>
                        <li>Gain a sense of duty and responsibility as citizens to work for the betterment of their communities, the environment, society, and the nation.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GoodCitizenshipProgramme;
