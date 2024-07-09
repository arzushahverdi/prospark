import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link>
          <img
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d9eea831d71fae16b25713_Prospark%20Logo.webp"
            alt="prospark-logo"
            width="180px"
            height="24px"
          />
        </Link>
      </div>
      <div className={style.navbarpages}>
        <Link to="/" className={style.links}>
          Home
        </Link>
        <Link to="/about" className={style.links}>
          About
        </Link>
        <Link to="/pages" className={style.links}>
          Pages
        </Link>
        <Link to="/service" className={style.links}>
          Service
        </Link>
        <Link to="/blog" className={style.links}>
          Blog
        </Link>
        <Link to="/pricing" className={style.links}>
          Pricing
        </Link>
      </div>
      <div className={style.cart_button}>
        <Link to="#" className={style.cartimg}>
          <img
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d3ad07f167f2ee25801f67_cart.png"
            alt="cart"
            width="24px"
            height="23.5px"
          />
        </Link>
        <Link to="/pricing" className={style.links}>
          <button className={style.contact}>GET IN TOUCH →</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
