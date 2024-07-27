import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialMediaButton = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 space-y-1 bg-black py-2 rounded ">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block  text-white rounded-full shadow-lg transition"
      >
      <FontAwesomeIcon className="text-2xl px-1" icon={faSquareFacebook} />
      </a>

      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block  text-white rounded-full shadow-lg transition"
      >
        <FontAwesomeIcon className="text-2xl px-1" icon={faSquareInstagram} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block  text-white rounded-full shadow-lg transition"
      >
       <FontAwesomeIcon className="text-2xl px-1" icon={faSquareYoutube} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block  text-white rounded-full shadow-lg transition"
      >
       <FontAwesomeIcon className="text-2xl px-1" icon={faSquareWhatsapp} />
      </a>
    </div>
  );
};

export default SocialMediaButton;
