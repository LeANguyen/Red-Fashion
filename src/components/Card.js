import React, { useEffect, useState } from "react";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import { Link, useHistory } from "react-router-dom";

const Card = ({ _item, _key }) => {
  const currentId = localStorage.getItem("id");
  const history = useHistory();
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
    if (currentId != null) {
      getItemFromCurrentCartByItemIdExtraHandling(currentId, _item.id);
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
                setQuantityEdited(true);
              }}
            ></input>
          )}
        </li>

        <div className="mt-4">
          <button
            className="btn btn-warning rounded-pill btn-block"
            hidden={!quantityEdited}
            onClick={() => {
              updateItemQuantityFromCurrentExtraHandling(
                currentId,
                _item.id,
                quantity
              );
            }}
          >
            Update
          </button>
          <button
            className="btn btn-info rounded-pill py-2 btn-block"
            onClick={() => {
              history.push("/item_detail/" + _item.id);
            }}
          >
            Item Detail
          </button>
          {currentId !== null && !itemInCart && (
            <button
              className="btn btn-success rounded-pill py-2 btn-block"
              onClick={() => {
                addItemIntoCurrentCartExtraHandling(
                  currentId,
                  _item.id,
                  quantity
                );
              }}
            >
              Add to Cart
            </button>
          )}

          {currentId !== null && itemInCart && (
            <button
              className="btn btn-danger rounded-pill py-2 btn-block"
              type="submit"
              onClick={() => {
                deleteItemFromCurrentCartExtraHandling(currentId, _item.id);
              }}
            >
              Remove from Cart
            </button>
          )}

          {currentId === null && (
            <button
              className="btn btn-success rounded-pill py-2 btn-block"
              onClick={() => {
                history.push("/sign");
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
