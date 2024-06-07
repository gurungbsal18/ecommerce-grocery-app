import React from "react";
import SalesCountDown from "./SalesCountDown";
import Link from "next/link";

const SalesBanner = () => {
  return (
    <div className="alert alert-warning my-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <SalesCountDown />
            <h3 className="heading">Flash Sale</h3>
            <p>
              Get ready to snag incredible deals before they vanish! Limited
              time only, so hurry!
            </p>
            <Link href="products/a">
              <button className="btn btn-sm btn-dark">View Detail</button>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <img src="/image/honey.png" alt="" className="mw-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesBanner;
