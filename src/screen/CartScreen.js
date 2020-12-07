import React, { useEffect } from "react";
import Screen from "../components/Screen";
import CartTable from "../components/table/CartTable";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
const CartScreen = () => {
  const cartItemApi = useCartItemApi();
  const getAllItemFromCurrentCartApi = useApi(
    cartItemApi.getAllItemFromCurrentCart
  );

  useEffect(() => {
    getAllItemFromCurrentCartApi.request(1);
  }, []);

  return (
    <Screen>
      <div className="px-4 px-lg-0">
        <div className="p-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <CartTable
                  _data={getAllItemFromCurrentCartApi.data}
                ></CartTable>
                {/* <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border-0 rounded-left bg-dark text-white"
                        >
                          <div className="p-2 px-3 text-uppercase">Product</div>
                        </th>
                        <th scope="col" className="border-0 bg-dark text-white">
                          <div className="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" className="border-0 bg-dark text-white">
                          <div className="py-2 text-uppercase">Quantity</div>
                        </th>
                        <th scope="col" className="border-0 bg-dark text-white">
                          <div className="py-2 text-uppercase">Total</div>
                        </th>
                        <th
                          scope="col"
                          className="border-0 rounded-right bg-dark text-white"
                        >
                          <div className="py-2 text-uppercase"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="cart_table_body"></tbody>
                  </table>
                </div> */}
              </div>
            </div>

            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-dark text-white rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Shipping Information
                </div>
                <div className="p-4">
                  <div className="container">
                    <form>
                      <div className="form-group">
                        <strong className="text-muted">
                          Receiver's Name:{" "}
                        </strong>
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
                        $0
                      </h5>
                    </li>
                  </ul>
                  <button
                    className="btn btn-info rounded-pill py-2 btn-block"
                    id="checkout_btn"
                    style={{ color: "white" }}
                    onClick="checkValidOnCheckOut()"
                  >
                    Procceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default CartScreen;
