import "./hero.css";
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome guests</h1>
        <p>
          Discover the world with us and create unforgettable memories.
        </p>
        <button>Explore Now</button>
      </div>
    </section>
  );
}

export default Hero;