import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "../../components/Header";
import ImageCarousel from "../../global/ImageCarousel";
import AboutUs from "../../components/AboutUs";
import Programs from "../../components/Programs";
import WhatsNew from "../../components/BeyondClassroom";
import OtherWebsite from "../../components/OurCenters";
import Footer from "../../global/Footer";
import ActivityVideos from "../../components/ActivityVideos";
import './Homepage.css';
import flashImage from '../../assets/flashimg.jpg';  

const Homepage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);  
  const navigate = useNavigate(); 

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleImageClick = () => {
    navigate('/donate');  
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img
              src={flashImage}
              alt="Flash Popup"
              className="popup-image"
              onClick={handleImageClick} 
              style={{ cursor: 'pointer' }} 
            />
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
          </div>
        </div>
      )}

      <Header />
      <ImageCarousel />
      <AboutUs />
      <ActivityVideos />
      <br />
      <Programs />
      <WhatsNew />
      <OtherWebsite />
      <Footer />
    </>
  );
};

export default Homepage;
