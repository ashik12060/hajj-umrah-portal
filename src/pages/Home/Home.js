import React from 'react'
import Header from '../../components/Shared/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import CardGrid from '../../components/CardGrid/CardGrid'
import HajjPackages from '../HajjPackages/HajjPackages'
import Footer from '../../components/Shared/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <CardGrid />
        <Footer/>
       
    </div>
  )
}

export default Home