import React from "react";
import Screen from "../components/Screen";
const ItemDetailScreen = () => {
  return (
    <Screen>
      <div className="container mt-5 mb-5">
        <div className="row py-5 p-4 bg-white rounded shadow-sm item-detail-style">
          <div className="col-md-4">
            <div
              className="bg-dark rounded-pill px-4 py-3 text-uppercase font-weight-bold"
              style={{ color: "white" }}
            >
              Item Information
            </div>
            <img
              src="no_image.jpg"
              id="item_imageview"
              alt="..."
              className="img-thumbnail"
            ></img>
          </div>

          <div className="col-md-8">
            <div className="form-row">
              <div className="form-group col-md-12">
                <div
                  id="item_name_label"
                  className="bg-dark rounded-pill px-4 py-3 text-uppercase font-weight-bold"
                  style={{ color: "white" }}
                ></div>
              </div>

              <div className="form-group col-md-8">
                <div className="p-4">
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Category: </strong>
                      <h5 id="category_label" className="font-weight-bold">
                        $0
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-group col-md-4">
                <div className="p-4">
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Item ID: </strong>
                      <h5 id="id_label" className="font-weight-bold">
                        $0
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-group col-md-8">
                <div className="p-4">
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Made in: </strong>
                      <h5 id="origin_label" className="font-weight-bold">
                        $0
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="form-group col-md-4">
                <div className="p-4">
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Price: </strong>
                      <h5 id="price_label" className="font-weight-bold">
                        $0
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="form-group col-md-8">
                <strong class="text-muted">Description: </strong>
                <textarea
                  name=""
                  cols="30"
                  rows="10"
                  class="form-control"
                  id="des_textarea"
                  disabled="true"
                ></textarea>
              </div>

              <div class="form-group col-md-4">
                <strong class="text-muted" id="quantity_status_label">
                  In Cart:
                </strong>
                <td class="align-middle">
                  <input
                    type="number"
                    class="form-control"
                    id="quantity_input"
                    step="1"
                    max="9999"
                    min="1"
                    value="1"
                    onchange="quantityEdit()"
                    oninput="this.value = Math.abs(this.value)"
                  ></input>
                </td>
                <label
                  type="button"
                  class="btn btn-success rounded-pill py-2 btn-block mt-2"
                  id="add_to_cart_btn"
                  style={{ color: "white" }}
                >
                  Add to Cart
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default ItemDetailScreen;
