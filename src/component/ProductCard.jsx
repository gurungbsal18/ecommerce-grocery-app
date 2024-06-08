"use client";
import { ProductList } from "@/utils/product";
import Link from "next/link";
import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = () => {
  const productIdsToShow = [1, 2, 3];

  // Filter ProductList based on the productIdsToShow
  const filteredProducts = ProductList.filter((product) =>
    productIdsToShow.includes(product.id)
  );

  const cartBtn = () => {
    toast.success("Product Added");
  };

  return (
    <div className="row flex-column flex-md-row">
      {filteredProducts.map((list, index) => (
        <div key={index} className="col-12 col-lg-6 col-xl-4">
          <div className="card product-card my-3">
            <div key={list.id}>
              <img src={list.image} alt={list.title} />
              <div className="card-body">
                <Link href={list.link}>
                  <h4 className="card-title">{list.title}</h4>
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">Price: NRs {list.price} /-</p>
                  <button
                    className="btn btn-warning d-flex align-items-center"
                    onClick={cartBtn}
                  >
                    <FaCartPlus className="me-2" />
                    Add to cart
                  </button>
                </div>
                <div className="product-badge d-flex gap-2">
                  <span className="badge text-bg-warning">
                    {list?.badgeFeatured}
                  </span>
                  <span className="badge text-bg-danger">
                    {list?.badgeTopSeller}
                  </span>
                  <span className="badge text-bg-success">
                    {list?.badgeBestSelling}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
