import React, { useState } from "react";
import useCartApi from "../api/useCartApi";
import useApi from "../hooks/useApi";
import { useSelector, useDispatch } from "react-redux";
import FormHeader from "./form/FormHeader";
import FormTextInput from "./form/FormTextInput";
import FormButton from "./form/FormButton";
import FormUnderline from "./form/FormUnderline";

const CheckoutForm = () => {
  const totalPrice = useSelector(state => state.cart.totalPrice);
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
        <FormHeader _text="Shipping Information"></FormHeader>
        <div className="p-4">
          <form>
            <FormTextInput
              _iconName="user"
              _inputType="text"
              _placeHolder="Receiver's Name"
              _onChange={event => setClientName(event.target.value)}
            ></FormTextInput>

            <FormTextInput
              _iconName="map-marker"
              _inputType="text"
              _placeHolder="Address"
              _onChange={event => setAddress(event.target.value)}
            ></FormTextInput>

            <FormTextInput
              _iconName="phone"
              _inputType="text"
              _placeHolder="Phone Number"
              _onChange={event => setPhone(event.target.value)}
            ></FormTextInput>
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <FormHeader _text="Order Summary"></FormHeader>
        <div className="p-4">
          <ul className="list-unstyled">
            <FormUnderline>
              <strong className="text-muted">Total</strong>
              <strong>{"$" + totalPrice}</strong>
            </FormUnderline>
          </ul>
          {updateCartApi.isLoading && (
            <p className="text-info text-center">Please Wait...</p>
          )}
          {createCartApi.isLoading && (
            <p className="text-info text-center">Please Wait...</p>
          )}
          <FormButton
            _variant="info"
            _text="Procceed to Checkout"
            _onClick={() => checkValidOnCheckOut()}
          ></FormButton>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
