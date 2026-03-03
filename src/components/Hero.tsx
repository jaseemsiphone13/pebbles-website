import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__headline">Welcome to Pebbles!</h1>
      <p className="hero__description">Your journey to a better experience starts here.</p>
      <div className="hero__buttons">
        <button className="hero__button">Get Started</button>
        <button className="hero__button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;