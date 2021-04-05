import React, { useState } from "react";
import cartApi from "../api/cartApi";
import useApi from "../hooks/useApi";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import AppTextInput from "./common/AppInput";
import AppLoader from "./common/AppLoader";
import AppButton from "./common/AppButton";

const CheckoutForm = () => {
  const history = useHistory();
  const totalPrice = useSelector(state => state.cart.totalPrice);
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
        <h5 _text="Shipping Information"></h5>
        <div className="p-4">
          <form>
            <AppTextInput
              _iconName="user"
              _inputType="text"
              _placeHolder="Receiver's Name"
              _onChange={event => setClientName(event.target.value)}
            ></AppTextInput>

            <AppTextInput
              _iconName="map-marker"
              _inputType="text"
              _placeHolder="Address"
              _onChange={event => setAddress(event.target.value)}
            ></AppTextInput>

            <AppTextInput
              _iconName="phone"
              _inputType="text"
              _placeHolder="Phone Number"
              _onChange={event => setPhone(event.target.value)}
            ></AppTextInput>
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <h4>"Order Summary"</h4>
        <div className="p-4">
          <ul className="list-unstyled">
            <strong className="text-muted">Total</strong>
            <strong>{"$" + totalPrice}</strong>
          </ul>
          {(updateCartApi.isLoading || createCartApi.isLoading) && (
            <>
              <AppLoader></AppLoader>
              <p className="text-info text-center">Please Wait...</p>
            </>
          )}
          <AppButton
            _variant="info"
            _text="Procceed to Checkout"
            _disabled={updateCartApi.isLoading || createCartApi.isLoading}
            _onClick={() => checkValidOnCheckOut()}
          ></AppButton>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
