import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-bottom">
      <div className="container">
        <div className="navbar">
          <div className="logo-img">
            <Link href="/">
              <img src="/image/logo.svg" alt="" />
            </Link>
          </div>
          <div className="nav-items">
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/product-list">
                <li>Products</li>
              </Link>
              <li>About</li>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
              <Link href="cart">
                <li>Cart</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
