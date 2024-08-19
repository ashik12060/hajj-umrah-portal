import React, { useState } from 'react';
import './Carousel.css'; // Add this for custom CSS
import hajjCarousel from '../../images/Hajj-carousel.jpg'
import umrahCarousel from '../../images/umrah-carousel.jpg'
import hotelCarousel from '../../images/hotelCarousel.jpg'
import airCarousel from '../../images/airCarousel.jpg'
import { Link } from 'react-router-dom';

const images = [
 
  { id: 1, src: hajjCarousel, alt: 'Hajj Carousel', text: 'হজ্জ প্যাকেজ', text2:'বুক করুন', text3:'হেনা ট্যুরস এন্ড ট্র্যাভেলস এ', buttonText: 'বুক করুন', buttonLink: '/hajj-packages' },
  { id: 2, src: umrahCarousel, alt: 'Umrah Carousel', text: 'উমরাহ্‌ প্যাকেজ', text2:'বুক করুন', text3:'হেনা ট্যুরস এন্ড ট্র্যাভেলস এ', buttonText: 'বুক করুন', buttonLink: '/umrah-packages' },
  { id: 3, src: hotelCarousel, alt: 'Hotel Carousel', text: 'নির্বিঘ্ন হোটেল বুকিং', text2:'সেবা', text3:'আপনার আরাম আমাদের অগ্রাধিকার!', buttonText: 'যোগাযোগ করুন', buttonLink: '/contact' },
  { id: 4, src: airCarousel, alt: 'Air Carousel', text: 'টিকিট এবং ভিসা ', text2:'সেবা', text3:'আপনার স্বপ্নের সম্ভাবনা উন্মোচন করুন!', buttonText: 'অনুসন্ধান করুন', buttonLink: '/visa-process' },
];
//   { id: 1, src: hajjCarousel, alt: 'Hajj Carousel', text: 'Book Your', text2:' Hajj Package', text3:'in Hena Travels And Tours', buttonText: 'Book Now', buttonLink: '/hajj-packages' },
//   { id: 2, src: umrahCarousel, alt: 'Umrah Carousel', text: 'Book Your', text2:' Umrah Package', text3:'in Hena Travels And Tours', buttonText: 'Book Now', buttonLink: '/umrah-packages' },
//   { id: 3, src: hotelCarousel, alt: 'Hotel Carousel', text: 'Seamless hotel booking', text2:'Services', text3:'Your comfort is our priority.!', buttonText: 'Contact Now', buttonLink: '/contact' },
//   { id: 4, src: airCarousel, alt: 'Air Carousel', text: 'Ticket and Visa ', text2:'Services', text3:'Empower your dreams to take flight!', buttonText: 'Explore', buttonLink: '/visa-process' },
// ];
 
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container relative w-full max-w-full overflow-hidden">
      <div className="carousel-wrapper whitespace-nowrap transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image) => (
          <div key={image.id} className="carousel-slide inline-block w-full relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover h-64 sm:h-80 md:h-96 lg:h-[30rem] caro-img"
            />
            <div className="absolute top-0 right-0 w-full h-full flex flex-col items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-black bg-opacity-30 p-4">
              <p className="special-text">{image.text}</p>
              <p>{image.text2}</p>
              <p>{image.text3}</p>
              
              <Link to={image.buttonLink} className="mt-4 ms-3 bg-white border hover:bg-green-800 hover:text-white hover:border hover:border-white hover:text-green-800 text-green-800 font-bold py-2 sm:py-3 px-4 sm:px-5 rounded-full text-center">
                {image.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ›
      </button>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-800' : 'bg-gray-100'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

