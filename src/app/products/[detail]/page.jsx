"use client";
import React, { useState } from "react";
import { productDetail, productReview } from "./db";
import { FaStar } from "react-icons/fa";
// import Image from "next/image";

const Page = () => {
  const [showDescription, setShowDescription] = useState(true);

  // const productDetailBtn = () => {
  //   setShowDescription(true);
  // };

  // const reviewBtn = () => {
  //   setShowDescription(false);
  // };

  return (
    <div className="">
      <div className="container">
        {/* <p className="my-5">Breadcrumb</p> */}
        <div className="row d-flex flex-column flex-md-row mt-5">
          <div className="col-12 col-md-6">
            <img
              src="/image/honey.png"
              alt="honey"
              // layout="fill"
              // objectFit="cover"
              // width={500}
              // height={500}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-6">
            <p className="badge text-bg-success">Category name</p>
            <h4>Title Name</h4>
            <p>Reviews</p>
            <h4>Price: NRs 1500/-</h4>
            <p className="text-muted my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus omnis neque praesentium accusantium hic eum voluptatem
              possimus, eius veniam eaque repellendus eveniet quia ea explicabo
              vitae laboriosam dolore placeat culpa.
            </p>
            <div className="d-flex gap-4">
              <div>
                <label htmlFor="">Weight</label>
                <select name="" id="" className="form-control">
                  <option value="">1 litter</option>
                  <option value="">2 litter</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="">Quatity</label>
                <input type="number" className="form-control" />
              </div>
            </div>

            <div className="my-4">
              <button className="btn btn-sm btn-dark">Add To Cart</button>
            </div>
          </div>
        </div>

        {/* product detail section */}
        <hr />
        <div className="d-flex gap-3">
          <button
            className={`btn btn-sm ${
              showDescription ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => {
              setShowDescription(true);
            }}
          >
            Product Detail
          </button>
          <button
            className={`btn btn-sm ${
              showDescription ? "btn-outline-dark" : "btn-dark"
            }`}
            onClick={() => {
              setShowDescription(false);
            }}
          >
            Reviews
          </button>
        </div>

        <div className="my-3">
          {showDescription
            ? productDetail.map((list, index) => (
                <div key={index}>
                  <p>{list.description1}</p>
                  <p>{list.description2}</p>
                </div>
              ))
            : productReview.map((list, id) => (
                <div key={id}>
                  {/* <img src={list.user1} alt="" width={50} height={50} /> */}
                  <div className="bg-light rounded shadow-sm p-4 my-5">
                    <h4 className="m-0">{list.username}</h4>
                    <span>
                      {" "}
                      {Array.from({ length: list.userrating }, (_, i) => (
                        <FaStar key={i} color="gold" />
                      ))}
                    </span>
                    <p className="mt-2">{list.userreview}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
