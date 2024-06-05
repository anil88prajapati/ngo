import React, { useState } from 'react';
import donateQr from './../assets/donateqr.jpg';
import './DonationDetails.css';

function DonationDetails() {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleDone = () => {
        setShowThankYou(true);
    };

    const closeModal = () => {
        setShowThankYou(false);
    };

    return (
        <div className="donation-details-page">
            <div className="container">
                <div className="qr-code-container">
                    <h3>Scan the QR code to donate</h3>
                    <img src={donateQr} alt="Donate QR Code" className="qr-code-image" />
                </div>
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
                <button className="done-button" onClick={handleDone}>Done</button>
            </div>
            {showThankYou && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <div className="thank-you-message">
                            <h3>Thank you for your donation!</h3>
                            <p>Your support helps us.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DonationDetails;
