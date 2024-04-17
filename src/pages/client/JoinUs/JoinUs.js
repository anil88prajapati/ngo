import React from 'react'
import Header from '../../../components/Header'
import PageBanner from '../../../global/PageBanner'
import Footer from '../../../global/Footer'
import aboutusbg from '../../../assets/JoinUs.jpg'
const JoinUs = () => {
    return (
        <>
            <Header pageState="Join Us" />
            <PageBanner bannerPic={aboutusbg} text='Join Us' />
            <Footer />

        </>
    )
}

export default JoinUs