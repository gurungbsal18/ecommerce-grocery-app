"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

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
              <Image
                src={"/image/logo.svg"}
                alt="logo"
                layout="responsive"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="d-flex align-items-center gap-3">
            <IoMenu
              onClick={menuToggle}
              className="menu-icon d-block d-md-none"
            />
            <div
              className={`nav-items d-md-block ${
                menuOpen ? "d-flex" : "d-none"
              }`}
            >
              <ul
                className={`menu-items d-md-inline-flex  m-0 ${
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
                {/* <li className="menu-links" onClick={closeMenu}>
                  About
                </li> */}
                <Link href="/contact">
                  <li className="menu-links" onClick={closeMenu}>
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <span>
              <Link href="cart">
                <span
                  className="menu-links d-flex gap-1 align-items-center"
                  onClick={closeMenu}
                >
                  <FaShoppingCart />
                  Cart
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
