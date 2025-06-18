// src/components/InfoSection.jsx
import React from "react";
import BrewIcon from "../assets/coffee-cup.svg";
import BeansIcon from "../assets/coffee-beans.svg";
import StarIcon from "../assets/badge.svg";
import ShippingIcon from "../assets/best-price.svg";
import "./InfoSection.css";

const features = [
  {
    icon: BrewIcon,
    title: "Freshly Brewed",
    description: "Every cup is brewed fresh using premium beans sourced globally.",
  },
  {
    icon: BeansIcon,
    title: "Organic Beans",
    description: "We use 100% organic beans to ensure the best natural flavor.",
  },
  {
    icon: StarIcon,
    title: "Top Rated Taste",
    description: "Loved by thousands of coffee lovers and professionals alike.",
  },
  {
    icon: ShippingIcon,
    title: "Worldwide Shipping",
    description: "Delivering our coffee experience to your doorstep, globally.",
  },
];

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        <h2 className="info-heading">What Makes Our Coffee Special?</h2>
        <div className="info-grid">
          {features.map((feature, index) => (
            <div key={index} className="info-box">
              <div className="info-icon">
                <img src={feature.icon} alt={feature.title} className="info-svg" />
              </div>
              <h3 className="info-title">{feature.title}</h3>
              <p className="info-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
