import React from 'react'
import Header from '../../components/Shared/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import CardGrid from '../../components/CardGrid/CardGrid'
import HajjPackages from '../HajjPackages/HajjPackages'
import Footer from '../../components/Shared/Footer/Footer'
import SmallHeader from '../../components/Shared/Header/SmallHeader'
import WhyUs from '../../components/WhyUs/WhyUs'

const Home = () => {
  return (
    <div>
      <SmallHeader />
        <Header />
        <Carousel />
        <CardGrid />
        <WhyUs />
        <Footer/>
       
    </div>
  )
}

export default Home