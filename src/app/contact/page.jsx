import CommonBanner from "@/component/CommonBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <CommonBanner />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" />
              <label htmlFor="address">Address</label>
              <input type="address" className="form-control" />
              <label htmlFor="" className="">
                Email
              </label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="col">contact page</div>
        </div>
      </div>
    </div>
  );
};

export default page;
