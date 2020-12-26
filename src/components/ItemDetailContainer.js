import React, { useState, useEffect } from "react";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";

const ItemDetailContainer = ({ _item }) => {
  const currentId = localStorage.getItem("id");
  const cartItemApi = useCartItemApi();

  const getItemFromCurrentCartByItemIdApi = useApi(
    cartItemApi.getItemFromCurrentCartByItemId
  );

  const updateItemQuantityFromCurrentCartApi = useApi(
    cartItemApi.updateItemQuantityFromCurrentCart
  );

  const addItemIntoCurrentCartApi = useApi(cartItemApi.addItemIntoCurrentCart);

  const deleteItemFromCurrentCartApi = useApi(
    cartItemApi.deleteItemFromCurrentCart
  );

  const [quantity, setQuantity] = useState();
  const [itemInCart, setItemInCart] = useState();
  const [quantityEdited, setQuantityEdited] = useState(false);

  const addItemIntoCurrentCartExtraHandling = async (
    clientId,
    itemId,
    quantity
  ) => {
    const response = await addItemIntoCurrentCartApi.request(
      clientId,
      itemId,
      quantity
    );
    if (response.ok) {
      setItemInCart(true);
    } else {
      alert("addItemIntoCurrentCart Failed");
    }
  };

  const updateItemQuantityFromCurrentExtraHandling = async (
    clientId,
    itemId,
    quantity
  ) => {
    const response = await updateItemQuantityFromCurrentCartApi.request(
      clientId,
      itemId,
      quantity
    );
    if (response.ok) {
      setQuantityEdited(false);
    } else {
      alert("updateItemQuantityFromCurrentCart Failed");
    }
  };

  const deleteItemFromCurrentCartExtraHandling = async (clientId, itemId) => {
    const response = await deleteItemFromCurrentCartApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      setItemInCart(false);
    } else {
      alert("deleteItemFromCurrentCart Failed");
    }
  };

  const getItemFromCurrentCartByItemIdExtraHandling = async (
    clientId,
    itemId
  ) => {
    const response = await getItemFromCurrentCartByItemIdApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      if (response.data[0] != undefined) {
        setItemInCart(true);
        setQuantity(response.data[0].quantity);
      } else {
        setItemInCart(false);
        setQuantity(1);
      }
    } else {
      alert("getItemFromCurrentCartByItemId Failed");
    }
  };

  useEffect(() => {
    getItemFromCurrentCartByItemIdExtraHandling(currentId, _item.id);
  }, []);

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
              {!itemInCart && (
                <input
                  type="number"
                  step={1}
                  max={9999}
                  min={1}
                  value={quantity}
                  onChange={event => {
                    setQuantity(event.target.value);
                  }}
                ></input>
              )}
              {itemInCart && (
                <input
                  type="number"
                  step={1}
                  max={9999}
                  min={1}
                  value={quantity}
                  onChange={event => {
                    setQuantity(event.target.value);
                    setQuantityEdited(true);
                  }}
                ></input>
              )}
            </td>
            <button
              class="btn btn-warning rounded-pill py-2 btn-block my-2"
              hidden={!quantityEdited}
              onClick={() =>
                updateItemQuantityFromCurrentExtraHandling(
                  currentId,
                  _item.id,
                  quantity
                )
              }
            >
              Update
            </button>
            {itemInCart && (
              <button
                class="btn btn-danger rounded-pill py-2 btn-block my-2"
                onClick={() =>
                  deleteItemFromCurrentCartExtraHandling(currentId, _item.id)
                }
              >
                Remove from Cart
              </button>
            )}
            {!itemInCart && (
              <button
                class="btn btn-success rounded-pill py-2 btn-block my-2"
                onClick={() =>
                  addItemIntoCurrentCartExtraHandling(currentId, _item.id)
                }
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
