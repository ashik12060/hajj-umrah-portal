import React from 'react';
import './CardGrid.css'; // Add this for custom CSS
import cardImage1 from '../../images/cover.jpg'; // Adjust the path and name as per your actual image files
import cardImage2 from '../../images/cover.jpg';
import cardImage3 from '../../images/cover.jpg';
import cardImage4 from '../../images/cover.jpg';

const cards = [
  { id: 1, title: 'Card 1', image: cardImage1, description: 'Description for Card 1' },
  { id: 2, title: 'Card 2', image: cardImage2, description: 'Description for Card 2' },
  { id: 3, title: 'Card 3', image: cardImage3, description: 'Description for Card 3' },
  { id: 4, title: 'Card 4', image: cardImage4, description: 'Description for Card 4' },
];

const CardGrid = () => {
  return (
    <div className="card-grid-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
