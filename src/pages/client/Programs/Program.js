import React from 'react'
import Header from '../../../components/Header'
import PageBanner from '../../../global/PageBanner'
import Footer from '../../../global/Footer'
import aboutusbg from '../../../assets/Programs.jpg'
const Program = () => {
    return (
        <>
            <Header pageState="PROGRAMS" />
            <PageBanner bannerPic={aboutusbg} text='PROGRAMS' />
            <Footer />

        </>
    )
}

export default Program