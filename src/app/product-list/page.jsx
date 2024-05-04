"use client";
import React from "react";
import { ProductList } from "@/utils/product";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const page = () => {
  const cartBtn = () => {
    toast.success("Product Added");
  };
  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center gap-2 my-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search items"
            style={{ width: "300px" }}
          />
        </div>
        <div className="row">
          {ProductList.map((list, index) => (
            <div className="col-4">
              <div className="card product-card my-3">
                <div key={list.id}>
                  <img src={list.image} alt={list.title} />
                  <div className="card-body">
                    <h4 className="card-title">{list.title}</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0">Price: NRs {list.price} /-</p>
                      <button className="btn btn-warning" onClick={cartBtn}>
                        <FaCartPlus className="me-2" />
                        Add to cart
                      </button>
                    </div>
                    <div className="product-badge d-flex gap-2">
                      <span className="badge text-bg-warning">
                        {list.badgeFeatured}
                      </span>
                      <span className="badge text-bg-danger">
                        {list.badgeTopSeller}
                      </span>
                      <span className="badge text-bg-success">
                        {list.badgeBestSelling}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
