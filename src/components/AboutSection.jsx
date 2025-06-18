import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cupBeans from "../assets/cup.png"; // main about image
import splashImage from "../assets/coffee_blast.png"; // splash image below the section
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <>
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-text">
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee that helps
            boost your productivity and build your mood. Having a cup of coffee is good,
            but having a cup of real coffee is greater. There is no doubt that you will
            enjoy this coffee more than others you have ever tasted.
          </p>
          <Link to="/about">
            <button className="about-btn">Learn More</button>
          </Link>
        </div>
        <div className="about-image">
          <img src={cupBeans} alt="coffee beans shaped like a cup" />
        </div>
      </motion.section>

      {/* Splash image after section */}
      <motion.div
        className="splash-wrapper"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src={splashImage} alt="Coffee Splash" className="splash-image" />
      </motion.div>
    </>
  );
};

export default AboutSection;
