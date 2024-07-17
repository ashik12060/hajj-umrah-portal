import React from 'react'
import Header from '../../components/Shared/Header/Header'
import PackageCover from '../../components/HajjPackagesInfo/PackageCover'
import Packages from '../../components/HajjPackagesInfo/Packages'
import Footer from '../../components/Shared/Footer/Footer'

const HajjPackages = () => {
  return (
    <>
    <Header />
    <PackageCover />
    <h2 className="text-center text-4xl font-bold mt-6">Our Packages</h2>
    <Packages />
    <Footer />

    
    </>
  )
}

export default HajjPackages