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
                    <p>Skill development bridges the gap between formal education and job market needs. It increases employment opportunities for individuals acquiring skills in a specific field, which assumes all the more importance in the context of marginalized youth.
                    </p>
                </div>
            <div className="what-we-do-section">
                    <h3>What We Do</h3>
                    <p>
                    It supports students to hone their interests and helps them develop their skills into the field for which their aptitude fits the best. Academics are important yet giving a practical approach to learning through these skill trainings, helps budding growth enhance their prospects for employability /employment. 
                </p>
                <p>
                Seva Srijan Foundation believes in holistic development of a child into a confident, self-reliant youth. We believe that though education is the fundamental right of every child irrespective of their background, skill development trainings are important to help majority of children excel in skills/trades that lead them to earn a decent living and lead a dignified life. Children of or above 14 years of age are eligible to benefit from this programme of SSF. Computer classes, spoken English classes, Art & Craft and Dance & Music classes are few programmes to start with.
                </p>
                </div>
        </div>
        <Footer/>
        </>
    );
};

export default SkillDevelopment;
