import React, { useState } from "react";
import useTotalPrice from "./useTotalPrice";
import useCartApi from "../api/useCartApi";
import useApi from "../hooks/useApi";

const CheckoutForm = () => {
  const totalPrice = useTotalPrice();
  const cartApi = useCartApi();
  const createCartApi = useApi(cartApi.createCart);
  const updateCartApi = useApi(cartApi.updateCart);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [clientName, setClientName] = useState("");

  const checkValidOnCheckOut = () => {
    if (clientName == "") {
      alert("Please enter a receiver's name");
      return false;
    }

    if (address == "") {
      alert("Please enter an address");
      return false;
    }

    if (phone == "") {
      alert("Please enter a phone number");
      return false;
    }
    checkout();
    return true;
  };

  function getCurrentDateTime() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  }

  const checkout = async () => {
    const response = await updateCartApi.request(
      1,
      clientName,
      address,
      phone,
      getCurrentDateTime()
    );
    if (!response.ok) {
      alert("There is a connection error 111. Please try again");
    } else {
      createCart();
    }
  };

  const createCart = async () => {
    const response = await createCartApi.request(1);
    console.log(response);
    if (!response.ok) {
      alert("There is a connection error 222. Please try again");
    } else {
      alert("Checkout completed");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="bg-dark text-white rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Shipping Information
        </div>
        <div className="p-4">
          <form>
            <div className="form-group">
              <strong className="text-muted">Receiver's Name: </strong>
              <input
                type="text"
                className="form-control"
                placeholder="Receiver's name"
                value={clientName}
                onChange={event => setClientName(event.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <strong className="text-muted">Address: </strong>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={event => setAddress(event.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <strong className="text-muted">Phone Number: </strong>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={event => setPhone(event.target.value)}
              ></input>
            </div>
          </form>
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
          {updateCartApi.isLoading && (
            <p className="text text-info text-center">Please Wait...</p>
          )}
          {createCartApi.isLoading && (
            <p className="text text-info text-center">Please Wait...</p>
          )}
          <button
            className="btn btn-info rounded-pill py-2 btn-block"
            id="checkout_btn"
            style={{ color: "white" }}
            onClick={() => {
              checkValidOnCheckOut();
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
