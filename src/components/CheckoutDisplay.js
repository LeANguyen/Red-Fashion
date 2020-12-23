import React from "react";

const CheckoutDisplay = ({ _data }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="bg-dark text-white rounded-pill px-4 py-3 text-uppercase font-weight-bold">
          Shipping Information
        </div>
        <div className="p-4">
          <div className="container">
            <li className="d-flex justify-content-between py-2 border-bottom">
              <strong className="text-muted">Receiver's Name:</strong>
              <h6 id="category_label" className="font-weight-bold">
                {_data.client_name}
              </h6>
            </li>
            <li className="d-flex justify-content-between py-2 border-bottom">
              <strong className="text-muted">Address:</strong>
              <h6 id="category_label" className="font-weight-bold">
                {_data.address}
              </h6>
            </li>
            <li className="d-flex justify-content-between py-2 border-bottom">
              <strong className="text-muted">Phone Number:</strong>
              <h6 id="category_label" className="font-weight-bold">
                {_data.phone}
              </h6>
            </li>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        {/* <div className="bg-dark text-white rounded-pill px-4 py-3 text-uppercase font-weight-bold">
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
        </div> */}
      </div>
    </div>
  );
};

export default CheckoutDisplay;
