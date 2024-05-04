import React from "react";
import { MdDelete } from "react-icons/md";

const page = () => {
  return (
    <div>
      <div className="container">
        <h4 className="my-4">Shopping Cart</h4>
        <table className="table table-striped cart-table">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/image/honey.png" />
              </td>
              <td>Product 1</td>
              <td>NRs 1200 /-</td>
              <td>1</td>
              <td>NRs 1200 /-</td>
              <td>
                <span role="button">
                  <MdDelete color="red" />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <img src="/image/honey.png" />
              </td>
              <td>Product 2</td>
              <td>NRs 1200 /-</td>
              <td>1</td>
              <td>NRs 1200 /-</td>
              <td>
                <span role="button">
                  <MdDelete color="red" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="my-5 delivery-detail">
          <div className="row">
            <div className="col-6">
              <h4>Delivery Details</h4>
              <form action="" className="d-flex gap-3 flex-column">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="full name"
                  className="form-control"
                />
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                />
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                />
                <span>
                  <input type="checkbox" className="me-2" />
                  <label htmlFor="">Cash on delivery</label>
                </span>

                <div className="">
                  <button className="btn btn-sm btn-dark" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6 border all-shadow rounded p-3">
              <h4>Details</h4>
              <p>Name:</p>
              <p>Phone Number:</p>
              <p>Address:</p>
              <p>Total Price: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
