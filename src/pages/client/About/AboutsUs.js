import aboutusbg from '../../../assets/About-Us.jpg'
import Header from '../../../components/Header'
import Footer from '../../../global/Footer'
import PageBanner from '../../../global/PageBanner'

const AboutsUs = () => {
    return (
        <>
            <Header pageState="ABOUT US" />
            <PageBanner bannerPic={aboutusbg} text='ABOUT US' />
            <Footer />
        </>
    )
}

export default AboutsUs