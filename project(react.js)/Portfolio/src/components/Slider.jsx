import React from 'react';

const Slider = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <h1 className="hero-title">Creative Developer & Designer</h1>
        <p className="hero-desc">
          I build clean, minimal, and highly functional web experiences. 
          Focusing on simplicity and solid design principles.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">See My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
