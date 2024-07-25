import React from "react"
import Header from "../../components/Header"
import ImageCarousel from "../../global/ImageCarousel"
import AboutUs from "../../components/AboutUs"
import Programs from "../../components/Programs"
import WhatsNew from "../../components/BeyondClassroom"
import OtherWebsite from "../../components/OurCenters"
import Footer from "../../global/Footer"

import './Homepage.css'
import ActivityVideos from "../../components/ActivityVideos"

const Homepage = () => {
    return (<>
        <Header />
        <ImageCarousel/>
        <AboutUs />
        <ActivityVideos />
        <br></br>
        <Programs />
        <WhatsNew />
        <OtherWebsite />
        <Footer />
    </>
    )
}

export default Homepage