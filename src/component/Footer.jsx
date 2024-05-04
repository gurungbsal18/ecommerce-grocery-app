import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="container d-flex align-items-center gap-3 flex-column justify-content-center">
        <img src="/image/logo.svg" style={{ width: "150px" }} />
        <span className="d-flex align-items-center mt-2 gap-2">
          <FaFacebook size={24} />
          <FaInstagramSquare size={24} />
        </span>
        <p className="m-0">Kathmandu, Nepal</p>
        <p className="">info@honeybee.com | +977 9851055040</p>
      </div>
      <div className="bg-warning py-2">
        <div className="container  d-flex justify-content-between">
          <p className="m-0">&copy; Honey Bee 2024</p>
          <p className="m-0">Develop By: IT Sansaar</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
