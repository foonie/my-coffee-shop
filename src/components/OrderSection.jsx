import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./OrderSection.css";

import cappuccino from "../assets/cappuccino.png";
import chaiLatte from "../assets/chai-latte.png";
import macchiato from "../assets/macchiato.png";
import expresso from "../assets/expresso.png";

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    ingredients: "Coffee 50% | Milk 50%",
    price: "R70.50",
    image: cappuccino,
  },
  {
    id: 2,
    name: "Chai Latte",
    ingredients: "Coffee 50% | Milk 50%",
    price: "R70.50",
    image: chaiLatte,
  },
  {
    id: 3,
    name: "Macchiato",
    ingredients: "Coffee 50% | Milk 50%",
    price: "R70.50",
    image: macchiato,
  },
  {
    id: 4,
    name: "Expresso",
    ingredients: "Coffee 50% | Milk 50%",
    price: "R70.50",
    image: expresso,
  },
];

const OrderSection = () => {
  return (
    <section className="order-section">
      <h2 className="order-title">Enjoy a new blend of coffee style</h2>
      <p className= "order-paragraph"> Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
      <div className="order-grid">
        {menuItems.map((item) => (
          <motion.div
            className="order-card"
            key={item.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.name} className="order-img" />
            <div className="order-content">
              <h3>{item.name}</h3>
              <p>{item.ingredients}</p>
              <strong>{item.price}</strong>
              <button className="order-btn">Order Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OrderSection;
