import React, { useState } from 'react';
import './SkillDevelopment.css';

const SkillDevelopment = () => {
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
        <div className="skill-development-container">
            <div className="quote-section">
                <h2>Skill Development</h2>
                <blockquote>
                    “Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft.”
                    <span>- Will Smith</span>
                </blockquote>
            </div>

            <div className="intro-section">
                <p>
                    Skill Development is a significant driver to address poverty through improved
                    employability, productivity and sustainable enterprise development. It facilitates a
                    cycle of high productivity, increased employment opportunities, income growth
                    and development.
                </p>
                <p>
                    SSF works with those youths who are interested to earn early to support
                    themselves & their families. For them, SSF has devised its Skill Development
                    Programme based on “Educate-Train-Employ” model wherein youth are trained in
                    various skills to enable them earn their livelihood and lead a dignified life.
                </p>
            </div>

            <div className="reflection-section">
                <h3>What does Skill Development mean to you?</h3>
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
    );
};

export default SkillDevelopment;
