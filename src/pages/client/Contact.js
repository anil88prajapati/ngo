import React from 'react'
import Header from '../../components/Header'
import Footer from '../../global/Footer'
import PageBanner from '../../global/PageBanner'
import contactPic from '../../assets/contactimage.jpg'

const Contact = () => {
    return (
        <>
            <Header pageState="contact" />
            <PageBanner bannerPic={contactPic} text='Contact' />
            <Footer />
        </>
    )
}

export default Contact