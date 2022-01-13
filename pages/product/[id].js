import Image from "next/image";
import React, { useState } from "react";
import StyleProduct from "../../styles/StyleProduct";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quis in commodi dolor non qui?",
  };
  return (
    <StyleProduct>
      <div className="left">
        <div className="imgContainer">
          <Image
            src={pizza.img}
            alt={pizza.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="right">
        <h1 className="title">{pizza.name}</h1>
        <span className="price">${pizza.price[size]}</span>
        <p className="desc">{pizza.desc}</p>
        <h3 className="choose">Choose the size</h3>
        <div className="sizes">
          <div className="size" onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="size.png" />
            <span className="number">Small</span>
          </div>
          <div className="size" onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="size.png" />
            <span className="number">Meduim</span>
          </div>
          <div className="size" onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="size.png" />
            <span className="number">Large</span>
          </div>
        </div>
        <h3 className="choose">Choose additional ingredients</h3>
        <div className="ingredients">
          <div className="option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="checkbox"
            />
            <label htmlFor="double">Double ingredients</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="checkbox"
            />
            <label htmlFor="double">Extra Cheese</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="checkbox"
            />
            <label htmlFor="double">Spicy Sauce</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              id="double"
              name="double"
              className="checkbox"
            />
            <label htmlFor="double">Garilic Sauce</label>
          </div>
        </div>
        <div className="add">
          <input type="number" defaultValue={1} className="quantity" />
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </StyleProduct>
  );
};

export default Product;
