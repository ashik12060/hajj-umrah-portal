import React from 'react'
import contactCover from '../../images/aboutUs.jpg'
const ContactCover = () => {
  return (
    <div className="pt-20">
      <div className="cover-photo-container">
        <img src={contactCover} alt="Cover" className="cover-image" />
        <div className="cover-text">
          <h1 className='text-3xl'>Contact Portal</h1>
          <p className='text-xl'>Your Hajj & Umrah Inquiry Await</p>
        </div>
      </div>
      </div>
  )
}

export default ContactCover