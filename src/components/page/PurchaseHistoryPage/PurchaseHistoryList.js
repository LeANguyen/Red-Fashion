import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import * as cartApi from "../../../APIs/cartApi";
import { useSelector, useDispatch } from "react-redux";
import Space from "../../common/Space";
import { Link } from "react-router-dom";
const PurchaseHistoryList = () => {
  const getCartsApi = useApi(cartApi.getCarts);
  const currentUser = useSelector(state => state.user.data);

  useEffect(() => {
    getCartsApi.request(currentUser.id);
  }, []);

  return (
    <div>
      {getCartsApi.data.map((cart, i) => {
        return (
          <>
            <div className="row form-group">
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <strong className="text-yellow">
                    <i className="fa fa-user"></i>
                    <Space></Space>
                    <Space></Space>
                    Receiver's Name
                  </strong>
                  <strong className="text-white">{cart.client_name}</strong>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <strong className="text-yellow">
                    <i className="fa fa-map-marker"></i>
                    <Space></Space>
                    <Space></Space>
                    Delivery Address
                  </strong>
                  <strong className="text-white">{cart.address}</strong>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <strong className="text-yellow">
                    <i className="fa fa-phone"></i>
                    <Space></Space>
                    <Space></Space>
                    Phone Number
                  </strong>
                  <strong className="text-white">{cart.phone}</strong>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <strong className="text-yellow">
                    <i className="fa fa-calendar-check-o"></i>
                    <Space></Space>
                    <Space></Space>
                    Checkout Date
                  </strong>
                  <strong className="text-white">{cart.checkout_date}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <strong className="text-green">
                    <Link className="btn-outline-green" to={"/cart/" + cart.id}>
                      <i className="fa fa-arrow-right"></i>
                      <Space></Space>
                      <Space></Space>
                      Cart Detail
                    </Link>
                  </strong>
                </div>
              </div>
            </div>

            <div className="divider-dark"></div>
          </>
        );
      })}
    </div>
  );
};

export default PurchaseHistoryList;
