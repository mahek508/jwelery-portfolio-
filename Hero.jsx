import React from 'react'
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero">

        <img src="images/image 2.png" alt="ring" className="hero-img" />

        <div className="hero-text">
          <h5>NEW ARRIVALS 2018</h5>
          <h2>The Glam Collection</h2>
          <h3>FINE JEWELLERY, BRIGHT AND BEAUTIFUL</h3>

          <p>
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium.
          </p>

          <a href="#">SHOP NOW →</a>
        </div>

      </section>
    </>
  );
};

export default Hero;