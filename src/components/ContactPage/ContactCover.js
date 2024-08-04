// import React from 'react'
// import contactCover from '../../images/aboutUs.jpg'
// const ContactCover = () => {
//   return (
//     <div className="pt-20">
//       <div className="cover-photo-container">
//         <img src={contactCover} alt="Cover" className="cover-image" />
//         <div className="cover-text">
//           <h1 className='text-3xl'>Contact Portal</h1>
//           <p className='text-xl'>Your Hajj & Umrah Inquiry Await</p>
//         </div>
//       </div>
//       </div>
//   )
// }

// export default ContactCover



import React from 'react';
import contactCover from '../../images/aboutUs.jpg';

const ContactCover = () => {
  return (
    <div className="pt-20">
      <div className="relative w-full h-96 sm:h-[120px] md:h-[250px] lg:h-[300px]">
        <img src={contactCover} alt="Cover" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Contact Portal</h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Your Hajj & Umrah Inquiry Await</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCover;
