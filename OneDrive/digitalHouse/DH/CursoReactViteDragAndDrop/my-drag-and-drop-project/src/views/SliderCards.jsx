import React from 'react';
import Slider from '../components/Slider';
import './SliderCards.css';

const plantInfo = [
  {
    title: 'Rosa',
    description: 'La rosa es una flor de la familia de las rosáceas, conocida por su belleza y fragancia.',
    imageUrl: '/images/rosa.jpg'
  },
  {
    title: 'Girasol',
    description: 'El girasol es una planta anual de la familia de las asteráceas, conocida por sus grandes flores.',
    imageUrl: '/images/girasol.jpg'
  },
  {
    title: 'Tulipán',
    description: 'El tulipán es una planta bulbosa de la familia de las liliáceas, apreciada por sus flores coloridas.',
    imageUrl: '/images/tulipan.jpg'
  }
];

function SliderCards() {
  return (
    <div className="slider-cards-container">
      <h1>Slider Cards</h1>
      <Slider items={plantInfo} />
    </div>
  );
}

export default SliderCards;
