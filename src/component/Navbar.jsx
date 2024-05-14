"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

// const [menu, setMenu] = useState("false");

const menuToggle = () => {
  const navItems = document.querySelector(".nav-items");
  const menuItems = document.querySelector(".menu-items");
  if (menuItems.classList.contains("d-none")) {
    navItems.classList.remove("d-none");
    menuItems.classList.remove("d-none");
    menuItems.classList.add("d-flex");
  } else {
    menuItems.classList.remove("d-flex");
    menuItems.classList.add("d-none");
    navItems.classList.add("d-none");
  }
};

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
          <IoMenu
            onClick={menuToggle}
            className="menu-icon d-block d-md-none"
          />
          <div className="nav-items d-none d-md-block">
            <ul className="menu-items d-none d-md-inline-flex">
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
