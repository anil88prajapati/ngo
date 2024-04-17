import Header from "../../components/Header"
import ImageCarousel from "../../global/ImageCarousel"
import slide1 from '../../assets/Slide1.JPG'
import slide2 from '../../assets/Slide2.jpg'
import slide3 from '../../assets/Slide3.jpg'
import slide4 from '../../assets/Slide4.jpg'
import AboutUs from "../../components/AboutUs"
import Programs from "../../components/Programs"
import Progress from "../../components/Progress"
import WhatsNew from "../../components/BeyondClassroom"
import OtherWebsite from "../../components/OurCenters"
import OurPartners from "../../components/OurPartners"
import Footer from "../../global/Footer"

const Homepage = () => {

    const slides = [
        {
            image: slide1
        },
        {
            image: slide2
        },
        {
            image: slide3
        },
        {
            image: slide4
        },
    ];

    return (<>
        <Header />
        <ImageCarousel/>
        <AboutUs />
        <Programs />
        {/* <Progress /> */}
        <WhatsNew />
        <OtherWebsite />
        {/* <OurPartners /> */}
        <Footer />
    </>
    )
}

export default Homepage