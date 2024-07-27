import React from 'react'
import AboutUsPage from '../../components/AboutUsPage/AboutUsPage'
import Header from '../../components/Shared/Header/Header'
import Footer from '../../components/Shared/Footer/Footer'
import AboutCover from '../../components/AboutUsPage/AboutCover'
import WhyUs from '../../components/WhyUs/WhyUs'

const AboutUs = () => {
  return (
    <>

        <Header /> 
        <div className='pt-20'>
        <AboutCover />
        </div>
        <AboutUsPage />
        <WhyUs />
        <Footer />
    </>
  )
}

export default AboutUs