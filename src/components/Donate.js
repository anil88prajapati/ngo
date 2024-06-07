import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Donate.css';

function Donate() {
    const [formData, setFormData] = useState({
        from_donationAmount: '',
        from_name: '',
        from_email: '',
        from_program: '',  // Added new field
        from_message: '' 
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7qxpor1', 'template_ggtnmxw', form.current, 'PmDLW4fe-z9seZ1Mf')
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
                setIsSubmitted(true);
                navigate('/donation-details');
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <div className="donate-page">
            <div className="donate-container">
                <h2>Donate to SEVA SRIJAN FOUNDATION</h2>
                {isSubmitted ? (
                    <div className="success-message">
                        <h3>Thank you for your donation!</h3>
                        <p>We have received your donation successfully.</p>
                    </div>
                ) : (
                    <form ref={form} className="donate-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="donationAmount">Donation Amount:</label>
                            <input
                                type="number"
                                id="donationAmount"
                                name="from_donationAmount"
                                value={formData.from_donationAmount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="program">Program:</label>
                            <select
                                id="program"
                                name="from_program"
                                value={formData.from_program}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a Program</option>
                                <option value="Good Citizenship Programme">Good Citizenship Programme</option>
                                <option value="Aftercare Programme">Aftercare Programme</option>
                                <option value="Skill Development">Skill Development</option>
                                <option value="Talent Bank Development">Talent Bank Development</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message (Optional):</label>
                            <textarea
                                id="message"
                                name="from_message"
                                value={formData.from_message}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="donate-button" type="submit">Donate Now</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Donate;
