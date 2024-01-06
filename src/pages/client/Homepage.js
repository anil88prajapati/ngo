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
            image: slide1,
            heading: 'HOPE',
            description: 'Description for Slide 1...',
            path: '/'
        },
        {
            image: slide2,
            heading: 'HELP',
            description: 'Description for Slide 2...',
            path: '/'
        },
        {
            image: slide3,
            heading: 'HUMANITY',
            description: 'Description for Slide 2...',
            path: '/'
        },
        {
            image: slide4,
            heading: 'Smile',
            description: 'Description for Slide 2...',
            path: '/'
        },
    ];

    return (<>
        <Header />
        <ImageCarousel slides={slides} />
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