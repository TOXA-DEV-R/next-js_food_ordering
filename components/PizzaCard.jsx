import Image from "next/image";
import React from "react";
import StylePizzaCard from "../styles/StylesPizzaCard";

const PizzaCard = () => {
  return (
    <StylePizzaCard>
      <Image
        src="/img/pizza.png"
        alt="pizza.png"
        width="500px"
        height="500px"
      />
      <h1 className="title">FIORI DI ZUCCA</h1>
      <span className="price">$19.90</span>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        aspernatur ducimus facilis!
      </p>
    </StylePizzaCard>
  );
};

export default PizzaCard;
