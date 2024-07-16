import React, { useState } from 'react';
import './Carousel.css'; // Add this for custom CSS
import image1 from '../../images/cover.jpg';

const images = [
  { id: 1, src: image1, alt: 'Image 1', text: 'Text Overlay 1' },
  { id: 2, src: image1, alt: 'Image 2', text: 'Text Overlay 2' },
  { id: 3, src: image1, alt: 'Image 3', text: 'Text Overlay 3' },
];

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
          <div key={image.id} className="carousel-slide inline-block w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover caro-img"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              {image.text}
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
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
