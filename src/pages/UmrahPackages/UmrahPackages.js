import React from 'react'
import Header from '../../components/Shared/Header/Header'
import UmrahPackageCover from '../../components/UmrahPackage/UmrahPackageCover'
import UmrahPackage from '../../components/UmrahPackage/UmrahPackage'
import Footer from '../../components/Shared/Footer/Footer'

const UmrahPackages = () => {
  return (
    <div>
      <Header />
      <UmrahPackageCover />
      <h2 className="text-center text-4xl font-bold mt-6">Our Packages</h2>
      <UmrahPackage />
      <Footer />
      
    </div>
  )
}

export default UmrahPackages