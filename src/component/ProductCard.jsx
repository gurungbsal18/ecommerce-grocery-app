import React from "react";

const ProductCard = () => {
  const categoryCard = [
    {
      id: 1,
      image: "",
      title: "Honey",
    },
    {
      id: 2,
      image: "",
      title: "Grocery",
    },
  ];
  return (
    <div className="row">
      {categoryCard.map((list, index) => (
        <div className="col-3">
          <div className="card">
            <div key={list.id}>
              <h1>{list.title}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
