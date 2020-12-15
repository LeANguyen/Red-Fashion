import React, { useEffect, useState } from "react";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import { Link, useHistory } from "react-router-dom";

const Card = ({ _item, _key }) => {
  const cartItemApi = useCartItemApi();
  const history = useHistory();

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

  const [quantity, setQuantity] = useState(100);
  const [itemInCart, setItemInCart] = useState();

  useEffect(async () => {
    const response = await getItemFromCurrentCartByItemIdApi.request(
      1,
      _item.id
    );
    if (response.data[0] != undefined) {
      setItemInCart(true);
      setQuantity(response.data[0].quantity);
    } else {
      setItemInCart(false);
      setQuantity(1);
    }
  }, []);

  return (
    <div className="card text-left" key={_key}>
      <img
        className="card-img-top"
        src={"http://localhost:3000/uploaded_images/item" + _item.id + ".png"}
        alt="Nothing here"
      ></img>
      <div
        className="bg-dark px-4 py-2 text-uppercase font-weight-bold"
        style={{ color: "white" }}
      >
        {_item.item_name}
      </div>
      <div className="card-body">
        {/* <h4 className="card-title">{_item.item_name}</h4> */}
        <li className="d-flex justify-content-between py-2 border-bottom">
          <strong className="text-muted">Category:</strong>
          <h6 id="category_label" className="font-weight-bold">
            {_item.category}
          </h6>
        </li>
        <li className="d-flex justify-content-between py-2 border-bottom">
          <strong className="text-muted">Origin:</strong>
          <h6 id="category_label" className="font-weight-bold">
            {_item.origin}
          </h6>
        </li>
        <li className="d-flex justify-content-between py-2 border-bottom">
          <strong className="text-muted">Price:</strong>
          <h6 id="category_label" className="font-weight-bold">
            {"$" + _item.price}
          </h6>
        </li>
        <li className="d-flex justify-content-between py-2 border-bottom">
          <strong className="text-muted">In Cart:</strong>
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
                updateItemQuantityFromCurrentCartApi.request(
                  1,
                  _item.id,
                  event.target.value
                );
              }}
            ></input>
          )}
        </li>

        <div className="mt-4">
          <button
            className="btn btn-info rounded-pill py-2 btn-block"
            type="submit"
            onClick={() => {
              history.push("/item_detail/" + _item.id);
            }}
          >
            Item Detail
          </button>
          {!itemInCart && (
            <button
              className="btn btn-success rounded-pill py-2 btn-block"
              type="submit"
              onClick={() => {
                addItemIntoCurrentCartApi.request(1, _item.id, quantity);
                setItemInCart(true);
              }}
            >
              Add to Cart
            </button>
          )}
          {itemInCart && (
            <button
              className="btn btn-danger rounded-pill py-2 btn-block"
              type="submit"
              onClick={() => {
                deleteItemFromCurrentCartApi.request(1, _item.id);
                setItemInCart(false);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
