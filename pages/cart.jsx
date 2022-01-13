import Image from "next/image";
import React from "react";
import StyleCart from "../styles/StyleCart";

const Cart = () => {
  return (
    <StyleCart>
      <div className="left">
        <table className="table">
          <tr className="tr">
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className="imgContainer">
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt="pizza.png"
                />
              </div>
            </td>
            <td>
              <span className="name">CORALZO</span>
            </td>
            <td>
              <span className="extras">Double ingredient, spicy sauce</span>
            </td>
            <td>
              <span className="price">$19.9</span>
            </td>
            <td>
              <span className="quantity">2</span>
            </td>
            <td>
              <span className="total">$39.80</span>
            </td>
          </tr>
        </table>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 className="title">CART TOTAL</h2>
          <div className="totalText">
            <b className="totalTextTitle">Subtotal: </b>$79.60
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Discount: </b>$0.00
          </div>
          <div className="totalText">
            <b className="totalTextTitle">Total: </b>$79.60
          </div>
          <button className="button">CHECKOUT NOW!</button>
        </div>
      </div>
    </StyleCart>
  );
};

export default Cart;
