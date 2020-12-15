import React, { useEffect } from "react";
import Screen from "../components/Screen";
import Table from "../components/table/Table";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import useTotalPrice from "../components/useTotalPrice";
import CartTableItem from "../components/table/CartTableItem";
import $ from "jquery";

const CartScreen = () => {
  const cartItemApi = useCartItemApi();
  const getAllItemFromCurrentCartApi = useApi(
    cartItemApi.getAllItemFromCurrentCart
  );

  useEffect(() => {
    $("#myModal").modal("show");
    getAllItemFromCurrentCartApi.request(1);
  }, []);

  const totalPrice = useTotalPrice();

  return (
    <Screen>
      <div id="myModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 px-lg-0">
        <div className="p-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <Table
                  _data={getAllItemFromCurrentCartApi.data}
                  _headers={["Product", "Price", "Quantity", "Total", ""]}
                  _component={CartTableItem}
                ></Table>
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
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default CartScreen;
