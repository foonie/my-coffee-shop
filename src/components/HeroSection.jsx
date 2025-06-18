import React from "react";
import "./HeroSection.css";
import heroBg from "../assets/coffee_image.png";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content">
        <h4>We’ve got your morning covered with</h4>
        <h1>Coffee</h1>
        <p>
          It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. 
          We provide the best for our customers.
        </p>
        <Link to="/menu">
           <button className="order-btn">Order Now</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
