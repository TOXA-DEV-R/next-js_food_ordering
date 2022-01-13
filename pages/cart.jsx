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
        </table>
      </div>
      <div className="right"></div>
    </StyleCart>
  );
};

export default Cart;
