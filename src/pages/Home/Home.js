import React from 'react'
import Header from '../../components/Shared/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import CardGrid from '../../components/CardGrid/CardGrid'
import Footer from '../../components/Shared/Footer/Footer'
import WhyUs from '../../components/WhyUs/WhyUs'
import Packages from '../../components/HajjPackagesInfo/Packages'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import UmrahPackage from '../../components/UmrahPackage/UmrahPackage'
import ContacatInfo from '../../components/ContactPage/ContacatInfo'
import AboutUsPage from '../../components/AboutUsPage/AboutUsPage'

const Home = () => {
  return (
    <div>
      
        <Header />
       <div className='pt-20'>
       <Carousel/>
       </div>
        <CardGrid />
        <div>
          <div className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>BEST HAJJ PACKAGES FOR 2025-2026
            </h1>
          </div>
          <Packages />
          <div className='text-center mt-6'>
          <Link to='/hajj-packages' className=" bg-white border border-green-800 text-green-800 font-bold py-4 my-6 px-4 rounded mt-auto">See More <FontAwesomeIcon icon={faAnglesRight} /></Link>

          
          </div>
        </div>

        <div>
          <div className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>BEST UMRAH PACKAGES FOR 2025-2026
            </h1>
          </div>
          <UmrahPackage />
          <div className='text-center mt-6'>
          <Link to='/umrah-packages' className="bg-white border border-green-800 text-green-800 font-bold py-4 my-6 px-4 rounded mt-auto">See More <FontAwesomeIcon icon={faAnglesRight} /></Link>
          </div>
        </div>
        <AboutUsPage />
        <WhyUs />
        <ContacatInfo />
        <Footer/>
       
    </div>
  )
}

export default Home