import React from 'react'
import coverAbout from '../../images//aboutUs.jpg'

const AboutCover = () => {
  return (
    <div>
         <div className="cover-photo-container">
        <img src={coverAbout} alt="Cover" className="cover-image" />
        <div className="cover-text">
          <h1 className='text-3xl'>আমাদের সম্পর্কে</h1>
          <p className='text-xl'>বিশ্বস্ত যাত্রা, বিশ্বস্ত যত্ন</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCover