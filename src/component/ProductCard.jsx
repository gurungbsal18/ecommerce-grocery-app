import React from "react";
import { Badge } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = () => {
  const categoryCard = [
    {
      id: 1,
      image: "/image/honey.png",
      title: "Goraw Honey",
      price: "1080",
      badgeFeatured: "Featured",
      badgeBestSelling: "Best Selling",
    },
    {
      id: 2,
      image: "/image/honey-product.webp",
      title: "Tueney Raw Honey",
      price: "2090",
      badgeTopSeller: "Top Seller",
      badgeBestSelling: "Best Selling",
    },
  ];
  return (
    <div className="row">
      {categoryCard.map((list, index) => (
        <div className="col-4">
          <div className="card product-card">
            <div key={list.id}>
              <img src={list.image} alt={list.title} />
              <div className="card-body">
                <h4 className="card-title">{list.title}</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">Price: NRs {list.price} /-</p>
                  <button className="btn btn-warning">
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
  );
};

export default ProductCard;
