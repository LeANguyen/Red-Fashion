import React from "react";

const ItemDetailContainer = ({ _item }) => {
  return (
    <div className="row p-4 bg-white rounded shadow-sm item-detail-style">
      <div className="col-md-4">
        <div
          className="bg-dark rounded px-4 py-2 text-uppercase font-weight-bold"
          style={{ color: "white" }}
        >
          {_item.item_name}
        </div>
        <img
          src={"http://localhost:3000/uploaded_images/item" + _item.id + ".png"}
          id="item_imageview"
          alt="..."
          className="img-thumbnail my-4"
        ></img>
      </div>

      <div className="col-md-8">
        <div className="form-row">
          <div className="form-group col-md-12">
            <div
              id="item_name_label"
              className="bg-dark rounded px-4 py-2 text-uppercase font-weight-bold"
              style={{ color: "white" }}
            >
              {_item.item_name}
            </div>
          </div>

          <div className="form-group col-md-8">
            <div className="p-4">
              <li className="d-flex justify-content-between py-2 border-bottom">
                <strong className="text-muted">Category: </strong>
                <h5 id="category_label" className="font-weight-bold">
                  {_item.category}
                </h5>
              </li>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="p-4">
              <li className="d-flex justify-content-between py-2 border-bottom">
                <strong className="text-muted">Item ID: </strong>
                <h5 id="id_label" className="font-weight-bold">
                  {_item.id}
                </h5>
              </li>
            </div>
          </div>

          <div className="form-group col-md-8">
            <div className="p-4">
              <li className="d-flex justify-content-between py-2 border-bottom">
                <strong className="text-muted">Made in: </strong>
                <h5 id="origin_label" className="font-weight-bold">
                  {_item.origin}
                </h5>
              </li>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="p-4">
              <li className="d-flex justify-content-between py-2 border-bottom">
                <strong className="text-muted">Price: </strong>
                <h5 id="price_label" className="font-weight-bold">
                  {"$" + _item.price}
                </h5>
              </li>
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
            >
              {_item.description}
            </textarea>
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
              class="btn btn-success rounded-pill py-2 btn-block my-2"
              id="add_to_cart_btn"
              style={{ color: "white" }}
            >
              Add to Cart
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
