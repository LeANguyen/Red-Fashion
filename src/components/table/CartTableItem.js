import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useCartItemApi from "../../api/useCartItemApi";
import useApi from "../../hooks/useApi";
import {
  setTotalPrice,
  increaseTotalPrice,
  decreaseTotalPrice,
  setQuantity,
  removeItem,
  setEditedList
} from "../../actions/cartActions";
import FormButton from "../form/FormButton";

const CartTableItem = ({ _item, _key }) => {
  const currentUser = useSelector(state => state.user.data);
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
    if (quantity == "") {
      return alert(
        "The quantity cannot be empty if you want to keep the item in the cart!"
      );
    }
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

  const [lastNum, setLastNum] = useState(_item.quantity);
  function onChange(value) {
    if (lastNum < value) {
      dispatch(increaseTotalPrice(_item.price * (value - lastNum)));
      console.log("increasing");
    } else {
      dispatch(decreaseTotalPrice(_item.price * (lastNum - value)));
      console.log("decreasing");
    }
    if (value == "") {
      setLastNum(0);
    } else {
      setLastNum(value);
    }
    console.log("lastNum: " + lastNum);
  }

  return (
    <tr key={_key}>
      <td className="align-middle">
        <strong>{_key}</strong>
      </td>
      <td className="align-middle">
        <img
          src={
            "http://localhost:3000/uploaded_images/item" +
            _item.item_id +
            ".png"
          }
          width="100"
          className="rounded"
        ></img>
        <div className="ml-4 d-inline-block align-middle">
          <strong>
            <a>{_item.item_name}</a>
          </strong>
          <p className="text-muted">{"$" + _item.price}</p>
        </div>
      </td>
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
            onChange(event.target.value);
          }}
        ></input>
      </td>
      <td className="align-middle">
        <strong>{"$" + _item.price * _item.quantity}</strong>
      </td>
      <td className="align-middle">
        <FormButton
          _text="Update"
          _hidden={!editedList[_key]}
          _variant="warning"
          _loading={updateItemQuantityFromCurrentCartApi.isLoading}
          _onClick={() =>
            updateItemQuantityFromCurrentCartExtrahandling(
              currentUser.id,
              _item.item_id,
              _item.quantity,
              _key
            )
          }
        ></FormButton>
        <FormButton
          _text="Remove"
          _variant="danger"
          // _disabled={
          //   updateItemQuantityFromCurrentCartApi.isLoading ||
          //   deleteItemFromCurrentCartApi.isLoading
          // }
          _loading={deleteItemFromCurrentCartApi.isLoading}
          _onClick={() =>
            deleteItemFromCurrentCartExtraHandling(
              currentUser.id,
              _item.item_id,
              _key
            )
          }
        ></FormButton>
      </td>
    </tr>
  );
};

export default CartTableItem;
