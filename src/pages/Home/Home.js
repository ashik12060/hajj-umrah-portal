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
    <div className='overflow-hidden'>
      
        <Header  className='overflow-hidden'/>
       <div className='pt-20 overflow-hidden'>
       <Carousel className='overflow-hidden'/>
       </div>
        <CardGrid  className='overflow-hidden'/>
        <div className='overflow-hidden'>
          <div className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>2025-2026 এর জন্য সেরা হজ প্যাকেজ
            </h1>
          </div>
          <Packages  className='overflow-hidden'/>
          <div className='text-center my-6'>
          <Link to='/hajj-packages' className=" bg-white border border-green-800 text-green-800 font-bold py-4 my-6 px-4 rounded mt-auto">আরো দেখুন<FontAwesomeIcon icon={faAnglesRight} /></Link>

          
          </div>
        </div>

        <div className='overflow-hidden'>
          <div className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>2025-2026 এর জন্য সেরা ওমরাহ প্যাকেজ

            </h1>
          </div>
          <UmrahPackage  className='overflow-hidden'/>
          <div className='text-center my-6'>
          <Link to='/umrah-packages' className="bg-white border border-green-800 text-green-800 font-bold py-4 my-6 px-4 rounded mt-auto">আরো দেখুন <FontAwesomeIcon icon={faAnglesRight} /></Link>
          </div>
        </div>
        <AboutUsPage  className='overflow-hidden'/>
        <WhyUs  className='overflow-hidden'/>
        <ContacatInfo  className='overflow-hidden'/>
        <Footer className='overflow-hidden' />
       
    </div>
  )
}

export default Home