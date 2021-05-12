import React, { useState } from "react";
import * as cartApi from "../../../APIs/cartApi";
import useApi from "../../../hooks/useApi";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import Input from "../../common/Input";
import Loader from "../../common/Loader";
import Button from "../../common/Button";

const CheckoutForm = () => {
  const history = useHistory();
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const createCartApi = useApi(cartApi.createCart);
  const updateCartApi = useApi(cartApi.updateCart);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [clientName, setClientName] = useState("");

  const checkValidOnCheckOut = () => {
    if (clientName === "") {
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
      alert("There is a connection error !!!. Please try again");
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
      history.push("/");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="container">
          <strong className="text-yellow-g text-xl">
            Shipping Information
          </strong>
          <br></br>
          <br></br>
          <Input
            _iconName="user"
            _placeholder="Receiver's Name"
            _onChange={event => setClientName(event.target.value)}
            _wrapperClass="input-1"
          ></Input>
          <br></br>
          <Input
            _iconName="map-marker"
            _placeholder="Address"
            _onChange={event => setAddress(event.target.value)}
            _wrapperClass="input-1"
          ></Input>
          <br></br>
          <Input
            _iconName="phone"
            _placeholder="Phone Number"
            _onChange={event => setPhone(event.target.value)}
            _wrapperClass="input-1"
          ></Input>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="container">
          <strong className="text-yellow-g text-xl">Order Summary</strong>
          <br></br>
          <br></br>
          <div className="d-flex justify-content-between">
            <strong className="text-pink text-lg">Total</strong>
            <strong className="text-white text-lg">{"$" + totalPrice}</strong>
          </div>
          <br></br>
          {(updateCartApi.isLoading || createCartApi.isLoading) && (
            <>
              <Loader></Loader>
              <p className="text-info text-center">Please Wait...</p>
            </>
          )}
          <Button
            _onClick={() => checkValidOnCheckOut()}
            _iconName="credit-card"
            _className="btn-yellow btn-block"
            _loading={updateCartApi.loading || createCartApi.isLoading}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
