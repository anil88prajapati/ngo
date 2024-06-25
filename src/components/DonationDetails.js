import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import donateQr from './../assets/donateqr.jpg';
import './DonationDetails.css';

function DonationDetails() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const formData = {
        from_donationAmount: queryParams.get('from_donationAmount'),
        from_name: queryParams.get('from_name'),
        from_email: queryParams.get('from_email'),
        from_program: queryParams.get('from_program'),
        from_message: queryParams.get('from_message')
    };

    const [showThankYou, setShowThankYou] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleDone = () => {
        if (formData && !isEmailSent) {
            setIsButtonDisabled(true);
            emailjs.send('service_7qxpor1', 'template_ggtnmxw', formData, 'PmDLW4fe-z9seZ1Mf')
                .then(
                    (result) => {
                        console.log('SUCCESS!', result.text);
                        setShowThankYou(true);
                        setIsEmailSent(true);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setIsButtonDisabled(false); 
                    }
                );
        }
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
                {!isEmailSent && (
                    <button className="done-button" onClick={handleDone} disabled={isButtonDisabled}>
                        {isButtonDisabled ? 'Processing...' : 'Done'}
                    </button>
                )}
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
