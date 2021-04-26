import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as cartItemApi from "../../../APIs/cartItemApi";
import useApi from "../../../hooks/useApi";

import Input from "../../common/Input";

import {
  increaseTotalPrice,
  decreaseTotalPrice,
  setQuantity,
  removeItem,
  setEditedList
} from "../../../actions/cartActions";

import Button from "../../common/Button";
import { Link } from "react-router-dom";

import ItemRowCss from "../AdminPage/ItemRow.module.scss";
import baseURL from "../../../APIs/baseURL";

const CartRow = ({ _item, _key }) => {
  const currentUser = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const editedList = useSelector(state => state.cart.editedList);

  const deleteItemFromCurrentCartApi = useApi(
    cartItemApi.deleteItemFromCurrentCart
  );

  const deleteItemFromCurrentCartHandling = async (clientId, itemId, index) => {
    const response = await deleteItemFromCurrentCartApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      dispatch(removeItem(itemId, index));
      dispatch(decreaseTotalPrice(_item.price * _item.quantity));
    } else {
      alert("deleteItemFromCurrentCart Failed");
    }
  };

  const updateItemQuantityFromCurrentCartApi = useApi(
    cartItemApi.updateItemQuantityFromCurrentCart
  );

  const updateItemQuantityFromCurrentCartHandling = async (
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
    <div className="row align-items-center">
      <div className="col-4 align-middle">
        <img
          src={baseURL + "/uploaded_images/item" + _item.item_id + ".png"}
          width={100}
          className={ItemRowCss["img"]}
        ></img>
        <div className="ml-3 d-inline-block align-middle">
          <strong>
            <Link className="text-yellow-w" to={"/item_detail" + _item.id}>
              {_item.item_name}
            </Link>
          </strong>
          <br></br>
          <strong className="text-pink">{"$" + _item.price}</strong>
        </div>
      </div>

      <div className="col-2">
        <Input
          _inputType="number"
          _onChange={event => {
            dispatch(setEditedList(_key, true));
            dispatch(setQuantity(event.target.value, _key));
            onChange(event.target.value);
          }}
          _iconName="shopping-cart"
          _wrapperClass="input-1"
          _value={_item.quantity}
        ></Input>
      </div>

      <div className="col-2 text-center">
        <h5 className="text-pink m-0">{"$" + _item.price * _item.quantity}</h5>
      </div>

      <div className="col-4">
        <div className="d-flex justify-content-around">
          <Button
            _iconName="shopping-cart"
            _hidden={!editedList[_key]}
            _loading={updateItemQuantityFromCurrentCartApi.isLoading}
            _onClick={() =>
              updateItemQuantityFromCurrentCartHandling(
                currentUser.id,
                _item.item_id,
                _item.quantity,
                _key
              )
            }
            _loading={updateItemQuantityFromCurrentCartApi.loading}
            _className="btn-yellow"
          >
            Update
          </Button>
          <Button
            _iconName="trash"
            _loading={deleteItemFromCurrentCartApi.loading}
            _onClick={() =>
              deleteItemFromCurrentCartHandling(
                currentUser.id,
                _item.item_id,
                _key
              )
            }
            _className="btn-pink"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default CartRow;
