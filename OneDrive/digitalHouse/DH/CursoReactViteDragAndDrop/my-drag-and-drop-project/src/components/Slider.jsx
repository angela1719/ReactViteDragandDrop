import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para ir al siguiente elemento
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Función para ir al elemento anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    // Esta función se encarga de animar la transición entre elementos
    const sliderContent = document.querySelector('.slider-content');
    sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider-button">{"<"}</button>
      <div className="slider-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imageUrl} alt={item.title} className="slider-image" />
            <div className="slider-info">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider-button">{">"}</button>
    </div>
  );
};

export default Slider;
