import React from 'react';
import FlipCard from './FlipCard';
import './FlipCardContainer.css';

const FlipCardContainer = () => {
  return (
    <div className="flip-card-container">
      <FlipCard frontContent="Front 1" backContent="Back 1" />
      <FlipCard frontContent="Front 2" backContent="Back 2" />
      <FlipCard frontContent="Front 3" backContent="Back 3" />
    </div>
  );
};

export default FlipCardContainer;
