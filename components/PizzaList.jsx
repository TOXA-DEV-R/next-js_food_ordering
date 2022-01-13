import React from "react";
import StylePizzaList from "../styles/StylePizzaList";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <StylePizzaList>
      <h1 className="title">THE BEST PIZZA IN TOWN</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque
        modi eius assumenda dolore, id vero eum quidem officia, libero itaque
        nostrum illum explicabo doloremque!
      </p>
      <div className="wrapper">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </StylePizzaList>
  );
};

export default PizzaList;
