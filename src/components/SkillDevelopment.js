import React from 'react';
import './SkillDevelopment.css';
import Footer from '../global/Footer';
import Header from './Header';

const SkillDevelopment = () => {
    return (
        <>
        <Header/>
        <div className="skill-development-container">
            <div className="quote-section">
                <h2>Skill Development</h2>
                <blockquote>
                    “Talent you have naturally. Skill is only developed by hours and hours and hours of beating on your craft.”
                    <span>- Will Smith</span>
                </blockquote>
            </div>
            <div className="intro-section">
                    <h3>Why Skill Development Programme</h3>
                    <p>National growth story's fulcrum is skilled, well groomed youth ready to contribute their share in the overall industrial and entrepreneurial growth of the country. Children in the fold of the organization are planned to be put into skilling trade, aligning with their interest and career goal achievement. In the initial phase, SEVA SRIJAN FOUNDATION has plans to operate through skilling centres in Delhi NCR, Rajasthan and Uttarakhand states.

                    </p>
                </div>
            <div className="what-we-do-section">
                    <h3>What We Do</h3>
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
        </div>
        <Footer/>
        </>
    );
};

export default SkillDevelopment;
