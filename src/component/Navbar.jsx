import React from "react";

const Navbar = () => {
  return (
    <div className="border-bottom">
      <div className="container">
        <div className="navbar">
          <div className="logo-img">
            <img src="image/logo.svg" alt="" />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
