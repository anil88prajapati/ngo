import Header from "../../components/Header"
import ImageCarousel from "../../global/ImageCarousel"
import camp from '../../assets/camp.jpg'
import childhood from '../../assets/childhood.jpg'
import skills from '../../assets/skills.jpg'
import secondchance from '../../assets/secondchance.jpg'
import AboutUs from "../../components/AboutUs"
import Programs from "../../components/Programs"
import Progress from "../../components/Progress"
import WhatsNew from "../../components/WhatsNew"
import OtherWebsite from "../../components/OtherWebsite"
import OurPartners from "../../components/OurPartners"
import Footer from "../../global/Footer"

const Homepage = () => {
    const slides = [
        {
            image: camp,
            heading: 'Slide 1 Heading',
            description: 'Description for Slide 1...',
            path: '/'
        },
        {
            image: childhood,
            heading: 'Slide 2 Heading',
            description: 'Description for Slide 2...',
            path: '/'
        },
        {
            image: skills,
            heading: 'Slide 3 Heading',
            description: 'Description for Slide 2...',
            path: '/'
        },
        {
            image: secondchance,
            heading: 'Slide 4 Heading',
            description: 'Description for Slide 2...',
            path: '/'
        },
    ];

    return (<>
        <Header />
        <ImageCarousel slides={slides} />
        <AboutUs />
        <Programs />
        <Progress />
        <WhatsNew />
        <OtherWebsite />
        <OurPartners />
        <Footer />
    </>
    )
}

export default Homepage