import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Space from "../../common/Space";
const CheckoutReadOnlyForm = ({ _data }) => {
  const totalPrice = useSelector(state => state.cart.totalPrice);

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="container">
          <strong className="text-yellow text-xl">Shipping Information</strong>
          <li className="divider-dark">
            <strong className="text-yellow">Receiver's Name:</strong>
            <strong className="text-white">{_data.client_name}</strong>
          </li>
          <li className="divider-dark">
            <strong className="text-yellow">Address:</strong>
            <strong className="text-white">{_data.address}</strong>
          </li>
          <li className="divider-dark">
            <strong className="text-yellow">Phone Number:</strong>
            <strong className="text-white">{_data.phone}</strong>
          </li>
        </div>
      </div>

      <div className="col-lg-6">
        <strong className="text-yellow text-xl">Order summary</strong>
        <br></br>
        <br></br>
        <li className="d-flex justify-content-between">
          <strong className="text-pink text-lg">Total</strong>
          <strong className="text-white text-lg">{"$" + totalPrice}</strong>
        </li>
        <br></br>
        <Link className="btn-yellow btn-block" to="/cart">
          <i className="fa fa-arrow-left"></i>
          <Space></Space>
          <Space></Space>
          Back to History
        </Link>
      </div>
    </div>
  );
};

export default CheckoutReadOnlyForm;
