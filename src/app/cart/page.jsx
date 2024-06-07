"use client";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const page = () => {
  const [name, setName] = useState();
  const [nameList, setNameList] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberList, setPhoneNumberList] = useState();
  const [address, setAddress] = useState();
  const [addressList, setAddressList] = useState();

  const getValue = () => {
    setNameList([...nameList, name]);
    setPhoneNumberList([...phoneNumberList, phoneNumber]);
    setAddressList([...addressList, address]);
    setName("");
    setPhoneNumber("");
    setAddress("");
  };
  return (
    <div>
      <div className="container">
        <h4 className="my-4">Shopping Cart</h4>
        <div className="table-responsive">
          <table className="table table-striped cart-table">
            <thead>
              <tr>
                <th>Items</th>
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
                <td width={250}>NRs 1200</td>
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
                <td width={250}>NRs 1200</td>
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
        </div>

        <div className="my-5 delivery-detail">
          <div className="row flex-column flex-md-row justify-content-between">
            <div className="col-12 col-md-6 my-3">
              <h4>Delivery Details</h4>
              <form action="" className="d-flex gap-3 flex-column">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="full name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <span>
                  <input type="checkbox" className="me-2" />
                  <label htmlFor="">Cash on delivery</label>
                </span>

                <div className="d-flex justify-content-end">
                  <button className="btn btn-sm btn-dark" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 my-3 ">
              <h4>Details</h4>
              <div className="border all-shadow rounded p-3">
                <p className="fw-bold">Items:</p>
                <p>Name: {name}</p>
                <p>Phone Number: {phoneNumber}</p>
                <p>Address: {address}</p>
                <p>Total Price: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
