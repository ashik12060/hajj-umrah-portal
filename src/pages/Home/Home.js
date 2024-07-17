import React from 'react'
import Header from '../../components/Shared/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import CardGrid from '../../components/CardGrid/CardGrid'
import Footer from '../../components/Shared/Footer/Footer'
import SmallHeader from '../../components/Shared/Header/SmallHeader'
import WhyUs from '../../components/WhyUs/WhyUs'
import Packages from '../../components/HajjPackagesInfo/Packages'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import UmrahPackage from '../../components/UmrahPackage/UmrahPackage'

const Home = () => {
  return (
    <div>
      <SmallHeader />
        <Header />
        <Carousel />
        <CardGrid />
        <div>
          <div className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>BEST HAJJ PACKAGES FOR 2025-2026
            </h1>
          </div>
          <Packages />
          <div className='text-center'>
          <Link to='/umrah-packages' className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded lg:mr-4 md:mr-2 mr-2 block lg:inline-block ">See More <FontAwesomeIcon icon={faAnglesRight} /></Link>
          </div>
        </div>

        <div>
          <div className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>BEST UMRAH PACKAGES FOR 2025-2026
            </h1>
          </div>
          <UmrahPackage />
          <div className='text-center'>
          <Link to='/umrah-packages' className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded lg:mr-4 md:mr-2 mr-2 block lg:inline-block ">See More <FontAwesomeIcon icon={faAnglesRight} /></Link>
          </div>
        </div>
        <WhyUs />
        <Footer/>
       
    </div>
  )
}

export default Home