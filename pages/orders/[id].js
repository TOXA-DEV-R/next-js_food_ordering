import Image from "next/image";
import React from "react";
import StyleOrder from "../../styles/StyleOrder";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return "done";
    if (index - status === 1) return "inProgress";
    if (index - status > 1) return "undone";
  };
  return (
    <StyleOrder>
      <div className="left">
        <div className="row">
          <table className="table">
            <tr className="tr">
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className="id">465445</span>
              </td>
              <td>
                <span className="name">John Doe</span>
              </td>
              <td>
                <span className="address">Bughm st .2 </span>
              </td>
              <td>
                <span className="total">$39.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className="row">
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className="checkedIcon">
              <Image
                className="checkedIcon"
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
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
          <button disabled className="button">
            PAID
          </button>
        </div>
      </div>
    </StyleOrder>
  );
};

export default Order;
