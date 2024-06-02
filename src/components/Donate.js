import React, { useState } from 'react';
import './Donate.css'; 

function Donate() {
    const [donationAmount, setDonationAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleDonate = (event) => {
        event.preventDefault();
        
        setDonationAmount('');
        setName('');
        setEmail('');
        setMessage('');
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
                <div className="bank-details">
                    <h3>Bank Details:</h3>
                    <p>A/c name - SEVA SRIJAN FOUNDATION</p>
                    <p>A/c no.- 50200055500700</p>
                    <p>Bank- HDFC Bank</p>
                    <p>Branch- Lajpat Nagar Ring Road, New Delhi-110024</p>
                    <p>IFSC Code - HDFC0000294</p>
                    <p>SWIFT Code - HDFCINBB</p>
                    <p>Branch Code - 000294</p>
                    <p>MICR Code - 110240040</p>
                </div>
            </div>
        </div>
    );
}

export default Donate;
