import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useCartItemApi from "../../api/useCartItemApi";
import useApi from "../../hooks/useApi";
import "./Table.css";
import {
  setQuantity,
  removeItem,
  setEditedList
} from "../../actions/cartActions";

const CartTableItem = ({ _item, _key }) => {
  const currentId = localStorage.getItem("id");
  const dispatch = useDispatch();
  const editedList = useSelector(state => state.cart.editedList);

  const cartItemApi = useCartItemApi();

  const deleteItemFromCurrentCartApi = useApi(
    cartItemApi.deleteItemFromCurrentCart
  );

  const deleteItemFromCurrentCartExtraHandling = async (
    clientId,
    itemId,
    index
  ) => {
    // dispatch(removeItem(itemId, index));

    const response = await deleteItemFromCurrentCartApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      dispatch(removeItem(itemId, index));
    } else {
      alert("deleteItemFromCurrentCart Failed");
    }
  };

  const updateItemQuantityFromCurrentCartApi = useApi(
    cartItemApi.updateItemQuantityFromCurrentCart
  );

  const updateItemQuantityFromCurrentCartExtrahandling = async (
    clientId,
    itemId,
    quantity,
    index
  ) => {
    const response = await updateItemQuantityFromCurrentCartApi.request(
      clientId,
      itemId,
      quantity
    );
    if (response.ok) {
      dispatch(setEditedList(index, false));
    } else {
      alert("updateItemQuantityFromCurrentCart Failed");
    }
  };

  return (
    <tr key={_key}>
      <td className="align-middle">
        <strong>{_key}</strong>
      </td>
      <th>
        <img
          src={
            "http://localhost:3000/uploaded_images/item" +
            _item.item_id +
            ".png"
          }
          alt="No Image"
          width="100"
          className="img-fluid rounded shadow-sm"
        ></img>
        <div className="m-2 d-inline-block align-middle">
          <strong>
            <a className="text-dark d-inline-block align-middle">
              {_item.item_name}
            </a>
          </strong>
          <span className="text-muted font-weight-normal d-block">
            {"$ " + _item.price}
          </span>
        </div>
      </th>
      <td className="align-middle">
        <input
          type="number"
          className="form-control"
          step="1"
          max="9999"
          min="1"
          value={_item.quantity}
          onChange={event => {
            dispatch(setEditedList(_key, true));
            dispatch(setQuantity(event.target.value, _key));
          }}
        ></input>
      </td>
      <td className="align-middle">
        <strong className="text text-dark">
          {"$" + _item.price * _item.quantity}
        </strong>
      </td>
      <td className="align-middle">
        <button
          className="btn btn-danger btn-block"
          onClick={() =>
            deleteItemFromCurrentCartExtraHandling(
              currentId,
              _item.item_id,
              _key
            )
          }
          style={{ color: "white" }}
        >
          Remove
        </button>
        <button
          className="btn btn-warning btn-block"
          hidden={!editedList[_key]}
          onClick={() => {
            updateItemQuantityFromCurrentCartExtrahandling(
              currentId,
              _item.item_id,
              _item.quantity,
              _key
            );
          }}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default CartTableItem;
