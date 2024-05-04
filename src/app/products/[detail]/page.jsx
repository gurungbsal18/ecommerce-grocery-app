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
          <button className="btn btn-sm btn-dark">Description</button>
          <button className="btn btn-sm btn-dark">Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default page;
