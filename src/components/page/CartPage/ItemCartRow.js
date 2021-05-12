import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as cartItemApi from "../../../APIs/cartItemApi";
import useApi from "../../../hooks/useApi";

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
import NumberInput from "../../common/NumberInput";
import Space from "../../common/Space";

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
    if (quantity === "") {
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
    // Check if the last quantity value is smaller or greater than the current quantity value

    // If greater => the quantity is increased => increase the total price in redux's store accordingly
    // If smaller => the quantity is decreased => decrease the total price in redux's store accordingly
    if (lastNum < value) {
      dispatch(increaseTotalPrice(_item.price * (value - lastNum)));
    } else {
      dispatch(decreaseTotalPrice(_item.price * (lastNum - value)));
    }
    if (value === "") {
      setLastNum(1);
    } else {
      setLastNum(value);
    }
  }

  return (
    <div className={`row ${ItemRowCss["body"]}`}>
      <div className="col-7">
        <div className="d-flex">
          <img
            src={baseURL + "/images/store/item-" + _item.item_id + ".png"}
            className={ItemRowCss["img"]}
          ></img>
          <div className="ml-3">
            <strong>
              <Link className="text-yellow-w" to={"/item_detail/" + _item.id}>
                {/* {
                  "Thắt lưng nam cao cấp dây da bền đẹp khóa tự động thiết kế mặt lịch lãm TP0023 (đen)"
                } */}
                {_item.item_name}
              </Link>
            </strong>
            <br></br>
            <strong className="text-yellow">
              <i className="fa fa-money">
                <Space></Space>
                <Space></Space>
              </i>
              {"$" + _item.price}
            </strong>
          </div>
        </div>
      </div>

      <div className="col-3">
        <li className="divider-dark">
          <strong className="text-yellow">
            <i className="fa fa-money"></i>
            <Space></Space>
            <Space></Space>Total
          </strong>
          <strong className="text-white">
            {"$" + _item.price * _item.quantity}
          </strong>
        </li>
        <br></br>
        <div className="text-center">
          <NumberInput
            _maxLength={2}
            _value={_item.quantity}
            _onChange={event => {
              dispatch(setEditedList(_key, true));
              dispatch(setQuantity(event.target.value, _key));
              onChange(event.target.value);
            }}
            _onClickMinus={() => {
              dispatch(setEditedList(_key, true));
              dispatch(setQuantity(parseInt(lastNum) - 1, _key));
              onChange(parseInt(lastNum) - 1);

              // setQuantity(parseInt(quantity) - 1);
              // setQuantityEdited(true);
            }}
            _onClickPlus={() => {
              dispatch(setEditedList(_key, true));
              dispatch(setQuantity(parseInt(lastNum) + 1, _key));
              onChange(parseInt(lastNum) + 1);
            }}
          ></NumberInput>
        </div>
      </div>

      <div className="col-2">
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
          _className="btn-yellow btn-block"
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
          _className="btn-red btn-block"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartRow;
