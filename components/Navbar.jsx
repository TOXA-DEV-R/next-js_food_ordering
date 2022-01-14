import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { StyleNavbar } from "../styles/StyleNavbar";

const Navbar = () => {
  const menuData = [
    { label: "Homepage", path: "/" },
    { label: "Products", path: "/" },
    { label: "Menu", path: "/", img: true },
    { label: "Events", path: "/" },
    { label: "Blog", path: "/" },
    { label: "Contact", path: "/" },
  ];
  return (
    <StyleNavbar>
      <a className="item order" href="tel:+77781001543">
        <div className="order__call-button">
          <Image
            src="/img/telephone.png"
            alt={"image"}
            width="32px"
            height="32px"
          />
        </div>
        <div className="order__call-numbers">
          <span className="number">ORDER NOW!</span>
          <span className="number">+77781001543</span>
        </div>
      </a>
      <nav className="item">
        <ul className="list">
          {menuData.map((item, i) => (
            <Fragment key={i}>
              <li className="list_item">
                <Link href={item.path}>{item.label}</Link>
              </li>
              {item.img && (
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width="160px"
                  height="69px"
                />
              )}
            </Fragment>
          ))}
        </ul>
      </nav>
      <div className="item">
        <div className="cart">
          <button type="button" className="cart_btn">
            <Image src="/img/cart.png" alt="cart" width="30px" height="30px" />
          </button>
          <div className="counter">2</div>
        </div>
      </div>
    </StyleNavbar>
  );
};

export default Navbar;
