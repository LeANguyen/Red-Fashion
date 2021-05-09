import React from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import ItemRowCss from "../AdminPage/ItemRow.module.scss";
import baseURL from "../../../APIs/baseURL";

const CartRow = ({ _item, _key }) => {
  return (
    <div className="row align-items-center">
      <div className="col-4 align-middle">
        <img
          src={baseURL + "/images/item-" + _item.item_id + ".png"}
          width={100}
          className={ItemRowCss["img"]}
        ></img>
        <div className="ml-3 d-inline-block align-middle">
          <strong className="text-white d-block">
            <a>{_item.item_name}</a>
          </strong>
          <strong className="text-pink">{"$" + _item.price}</strong>
        </div>
      </div>

      <div className="col-2">
        {/* <Input
          _inputType="number"
          _onChange={event => {
            dispatch(setEditedList(_key, true));
            dispatch(setQuantity(event.target.value, _key));
            onChange(event.target.value);
          }}
          _iconName="shopping-cart"
          _wrapperClass="input-1"
          _value={_item.quantity}
        ></Input> */}
        <strong className="text-pink">X</strong>
      </div>

      <div className="col-2 text-center">
        <h5 className="text-pink m-0">{"$" + _item.price * _item.quantity}</h5>
      </div>
    </div>
  );
};

export default CartRow;
