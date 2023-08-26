import React from 'react'
import Header from '../../../components/Header'
import PageBanner from '../../../global/PageBanner'
import Footer from '../../../global/Footer'
import aboutusbg from '../../../assets/Get-Involved-1.jpg'
const GetInvolved = () => {
    return (
        <>
            <Header pageState="GET INVOLVED" />
            <PageBanner bannerPic={aboutusbg} text='GET INVOLVED' />
            <Footer />

        </>
    )
}

export default GetInvolved