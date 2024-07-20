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
                        As is aptly said that “every good citizen makes his country’s honour his own, and cherishes it not only as precious but as sacred”. Good citizenry is the foundation of an equitable & just society. ‘Good Citizenship’ involves multiple components, including values, norms, ethical ideals, behaviours and expectations of participation. A Good citizen respects and abides by all the law & order of the country and feels aware for their rights and responsibilities for duties towards others, and accordingly conducts themselves in life. Casting a vote, paying taxes, health care, work for the government and helping others with compassion are manifest traits of a Good Citizen. Responsible Good Citizens share their skills, talents, and abilities towards the productivity to augment growth of a nation.
                    </p>
                </div>

                <div className="what-we-do-section">
                    <h3>What We Do in Good Citizenship Programme</h3>
                    <p>
                        SSF, in its pursuit of transforming young minds into responsible & contributing citizens, develops them holistically by imparting supplemental education for balanced growth – Physical, Intellectual, Emotional, Social & Nationalistic. Through this activity-based weekend programme, young members inculcate important 24 personality traits that are manifest in 24 spokes of the wheel of our tricolour National Flag. These traits are:
                    </p>
                    <table className="traits-table">
                        <tbody>
                            <tr>
                                <td>Hope</td>
                                <td>Gentleness</td>
                                <td>Gracefulness</td>
                            </tr>
                            <tr>
                                <td>Love</td>
                                <td>Selflessness</td>
                                <td>Humility</td>
                            </tr>
                            <tr>
                                <td>Courage</td>
                                <td>Self-Control</td>
                                <td>Loyalty</td>
                            </tr>
                            <tr>
                                <td>Patience</td>
                                <td>Self-sacrifice</td>
                                <td>Sympathy</td>
                            </tr>
                            <tr>
                                <td>Peace</td>
                                <td>Truthfulness</td>
                                <td>Forgiveness</td>
                            </tr>
                            <tr>
                                <td>Magnanimity</td>
                                <td>Righteousness</td>
                                <td>Honesty</td>
                            </tr>
                            <tr>
                                <td>Goodness</td>
                                <td>Justice</td>
                                <td>Eternity</td>
                            </tr>
                            <tr>
                                <td>Faith</td>
                                <td>Mercy</td>
                                <td>Spiritual knowledge</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Children of or above the age of 5 years are inducted into the programme by administering our “Good Citizenship” oath, and the programme is run at SSF centres on weekends in the ‘supplemental education’ mode of learning, which includes audio-visual lessons and discussions besides theme-based field activities in the community. Since inception, so far 1367 children have enrolled for this programme, and their development is palpable.
                    </p>
                    <p>
                        This is a character-building exercise for the individual and aimed at transforming our country into a responsible, proud Nation.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GoodCitizenshipProgramme;
