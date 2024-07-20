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
                        After Care is the provision of care as mandated in the Juvenile Justice Act, for all children, including children with special needs, after they have reached the age of 18 years, and are discharged from Children's Homes/Special Homes. Most “Children in conflict with Law (CCL) find their rehabilitation and reintegration in society almost impossible and many young adults find themselves moving in the domain of “Children in need for Care & Protection (CNCP) for want of familial support for pursuits of their life objective – mostly due to lack of knowledge in an uneducated, marginalized society and many a times for sheer lack of resources & guidance. SSF handholds to help prepare these young adults to sustain themselves during the transition from institutional to independent life and wade through the troubled waters of bewilderment.
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
                        The objective of SSF behind upgradation of these youth is to provide them with interventions, approaches and strategies that enable them to improve their social functioning with the end goal of getting employment for their sustainability and prove themselves as responsible Citizens. At SSF, Aftercare thus includes providing advice, guidance, resources and pragmatic support to these youngsters to attain status of self-dependence through sustainable employment.
                    </p>
                    <p>
                        For effective implementation of aftercare programme, the following factors are taken into consideration for each beneficiary of the programme:
                    </p>
                    <div className="factors-container">
                        <div className="factor">1. Education</div>
                        <div className="factor">2. Financing and budgeting matters</div>
                        <div className="factor">3. Training and employment</div>
                        <div className="factor">4. Health and wellbeing (includes counselling)</div>
                        <div className="factor">5. Personal and social development</div>
                        <div className="factor">6. Accommodation</div>
                        <div className="factor">7. Family support</div>
                    </div>
                    <p>
                        “Educate-Train-Employ” (ETE) is invariably applied to all as pedagogy for their sustainability and growth. In its Aftercare initiative, SSF has also initiated a one-year Scholarship Programme to support the educational needs of the shortlisted youth. Such Scholarship is subjected to regular evaluation by the SSF volunteers.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AftercareProgramme;
