import React from 'react'
import coverAbout from '../../images//aboutUs.jpg'

const AboutCover = () => {
  return (
    <div>
         <div className="cover-photo-container">
        <img src={coverAbout} alt="Cover" className="cover-image" />
        <div className="cover-text">
          <h1 className='text-3xl'>About Us</h1>
          <p className='text-xl'>Faithful Journeys, Trusted Care</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCover