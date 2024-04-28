"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-4">
          <img src="image/logo.svg" alt="" />
          <p>Phone: +977 9851055040</p>
          <p>Email: test@email.com</p>
          <p>Address: Kathmandu</p>
        </div>

        <div className="col-4">
          <h4>Our Company</h4>
          <ul className="m-0">
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Delivery Policy</li>
            <li>Terms and Condition</li>
            <li>Return and Exchange</li>
          </ul>
        </div>

        <div className="col-4">
          <h4>Our Company</h4>
          <ul className="m-0">
            <li>About us</li>
            <li>Privacy Policy</li>
            <li>Delivery Policy</li>
            <li>Terms and Condition</li>
            <li>Return and Exchange</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
