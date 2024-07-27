import React from 'react'
import coverAbout from '../../images/ait ticket buy.jpg'

const AboutCover = () => {
  return (
    <div>
         <div className="cover-photo-container">
        <img src={coverAbout} alt="Cover" className="cover-image" />
        <div className="cover-text">
          <h1>AIR TICKET</h1>
          <p>Exclusive & Regular Umrah Packages from Bangladesh</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCover