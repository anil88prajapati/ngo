import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css';

function Donate() {
    const [donationAmount, setDonationAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleDonate = (event) => {
        event.preventDefault();

        // Here you can also add form validation or API call to submit the donation details

        // Navigate to the donation details page
        navigate('/donation-details');
    };

    return (
        <div className="donate-page">
            <div className="donate-container">
                <h2>Donate to SEVA SRIJAN FOUNDATION</h2>
                <form className="donate-form" onSubmit={handleDonate}>
                    <div className="form-group">
                        <label htmlFor="donationAmount">Donation Amount:</label>
                        <input
                            type="number"
                            id="donationAmount"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message (Optional):</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button className="donate-button" type="submit">Donate Now</button>
                </form>
            </div>
        </div>
    );
}

export default Donate;
