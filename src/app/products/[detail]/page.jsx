import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="container">
        <p className="my-5">Breadcrumb</p>
        <div className="row">
          <div className="col-6">
            <img src="/image/honey.png" alt="" className="w-100" />
          </div>
          <div className="col-6">
            <p>Category name</p>
            <h4>Title Name</h4>
            <p>Reviews</p>
            <h4>Price</h4>
            <p className="text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus omnis neque praesentium accusantium hic eum voluptatem
              possimus, eius veniam eaque repellendus eveniet quia ea explicabo
              vitae laboriosam dolore placeat culpa.
            </p>
            <select name="" id="" className="form-control">
              <option value="">1 litter</option>
              <option value="">2 litter</option>
            </select>
          </div>
        </div>

        {/* product detail section */}
        <div>
          <h2>Product detail section</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
