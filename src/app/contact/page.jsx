import CommonBanner from "@/component/CommonBanner";
import React from "react";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <div>
      <CommonBanner />
      <div className="container">
        <div className="row my-5">
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center flex-column border rounded p-5 gap-3 all-shadow">
                  <span>
                    <FaWhatsapp fontSize={34} />
                    <FaViber fontSize={34} />
                  </span>
                  <h4 className="title m-0">Phone</h4>
                  <p className="m-0">+977 9851055040</p>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-center align-items-center flex-column border rounded p-5 gap-3 all-shadow">
                  <span>
                    <MdEmail fontSize={34} />
                  </span>
                  <h4 className="title m-0">Email</h4>
                  <p className="m-0">info@testemail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 contact-form-container rounded border">
            <div className="">
              <h4>Contact Us</h4>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" className="form-control" />
              <label htmlFor="address">Address</label>
              <input type="address" className="form-control" />
              <label htmlFor="" className="">
                Email
              </label>
              <input type="email" className="form-control" />
              <span className="py-2 d-flex justify-content-end">
                <button type="submit" className="btn btn-sm btn-dark">
                  Submit
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
