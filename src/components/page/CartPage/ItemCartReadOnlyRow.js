import React from "react";
import Input from "../../common/Input";
import Button from "../../common/Button";
import ItemRowCss from "../AdminPage/ItemRow.module.scss";
import baseURL from "../../../APIs/baseURL";

const CartRow = ({ _item, _key }) => {
  return (
    <div className="row align-items-center">
      <div className="col-8 align-middle">
        <img
          src={baseURL + "/images/store/item-" + _item.item_id + ".png"}
          width={100}
          className={ItemRowCss["img"]}
        ></img>
        <div className="ml-3 d-inline-block align-middle">
          <strong className="text-white d-block">
            <a>{_item.item_name}</a>
          </strong>
          <strong className="text-yellow text-lg">{"$" + _item.price}</strong>
        </div>
      </div>

      <div className="col-4">
        <li className="divider-dark">
          <strong className="text-yellow text-lg">Quantity</strong>
          <strong className="text-white text-lg">{_item.quantity}</strong>
        </li>
        <br></br>
        <li className="d-flex justify-content-between">
          <strong className="text-yellow text-lg">
            <i className="fa fa-money pr-2"></i>Total
          </strong>
          <strong className="text-white text-lg">
            {"$" + _item.price * _item.quantity}
          </strong>
        </li>
      </div>
    </div>
  );
};

export default CartRow;
