import React, { useState } from "react";
import useTotalPrice from "./useTotalPrice";
import useCartApi from "../api/useCartApi";
import useApi from "../hooks/useApi";

const CheckoutForm = () => {
  const totalPrice = useTotalPrice();
  const cartApi = useCartApi();
  const createCartApi = useApi(cartApi.createCart);
  const updateCartApi = useApi(cartApi.updateCart);

  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [clientName, setClientName] = useState();

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="bg-dark text-white rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Shipping Information
        </div>
        <div className="p-4">
          <div className="container">
            <form>
              <div className="form-group">
                <strong className="text-muted">Receiver's Name: </strong>
                <input
                  type="text"
                  className="form-control"
                  id="client_name_input"
                  placeholder="Receiver's name"
                ></input>
              </div>

              <div className="form-group">
                <strong className="text-muted">Address: </strong>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  id="address_input"
                  placeholder="Address"
                ></input>
              </div>

              <div className="form-group">
                <strong className="text-muted">Phone Number: </strong>
                <input
                  type="text"
                  className="form-control"
                  id="phone_input"
                  placeholder="Phone Number"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="bg-dark text-white rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Order summary
        </div>
        <div className="p-4">
          <ul className="list-unstyled mb-4">
            <li className="d-flex justify-content-between py-3 border-bottom">
              <strong className="text-muted">Total</strong>
              <h5 id="big_total_label" className="font-weight-bold">
                {totalPrice.price}
              </h5>
            </li>
          </ul>
          <button
            className="btn btn-info rounded-pill py-2 btn-block"
            id="checkout_btn"
            style={{ color: "white" }}
            onClick={() => {
              console.log("checkValidOnCheckOut()");
              // totalPrice2.setPrice(2000);
            }}
          >
            Procceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
