"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
    console.log("test");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="border-bottom">
      <div className="container">
        <div className="navbar">
          <div className="logo-img">
            <Link href="/">
              <img src="/image/logo.svg" alt="" />
            </Link>
          </div>
          <IoMenu
            onClick={menuToggle}
            className="menu-icon d-block d-md-none"
          />
          <div
            className={`nav-items d-md-block ${menuOpen ? "d-flex" : "d-none"}`}
          >
            <ul
              className={`menu-items d-md-inline-flex ${
                menuOpen ? "d-md-inline-flex" : "d-none"
              }`}
            >
              <Link href="/">
                <li className="menu-links" onClick={closeMenu}>
                  Home
                </li>
              </Link>
              <Link href="/product-list">
                <li className="menu-links" onClick={closeMenu}>
                  Products
                </li>
              </Link>
              <li className="menu-links" onClick={closeMenu}>
                About
              </li>
              <Link href="/contact">
                <li className="menu-links" onClick={closeMenu}>
                  Contact
                </li>
              </Link>
              <Link href="cart">
                <li
                  className="menu-links d-flex gap-1 align-items-center"
                  onClick={closeMenu}
                >
                  <FaShoppingCart />
                  Cart
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
