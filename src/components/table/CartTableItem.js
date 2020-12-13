import React, { useState } from "react";
import useTotalPrice from "../useTotalPrice";

const CartTableItem = ({
  _item,
  _key,
  _onClickRemove,
  _onChangeQuantity,
  _totalPrice
}) => {
  const [quantity, setQuantity] = useState(_item.quantity);

  const decreasePrice = () => {
    _totalPrice.setPrice(_totalPrice.price - quantity * _item.price);
  };

  const increasePrice = event => {
    setQuantity(event.target.value);
    _totalPrice.setPrice(_totalPrice.price + quantity * _item.price);
  };

  return (
    <tr key={_key}>
      <th scope="row">
        <div class="p-2">
          <img
            src={
              "https://dosi-in.com/images/detailed/9/Basic-T-shirt-Black.jpg"
            }
            alt="No Image"
            width="70"
            class="img-fluid rounded shadow-sm"
          ></img>
          <div class="ml-3 d-inline-block align-middle">
            <strong>
              <a
                href="item_detail_page?id=${data[i].item_id}"
                class="text-dark d-inline-block align-middle"
              >
                {_item.item_name}
              </a>
            </strong>
            <span class="text-muted font-weight-normal font-italic d-block">
              {"Category: " + _item.category}
            </span>
            <span class="text-muted font-weight-normal font-italic d-block">
              {"Made in: " + _item.origin}
            </span>
          </div>
        </div>
      </th>
      <td class="align-middle">
        <strong id="price_label${data[i].item_id}">{"$" + _item.price}</strong>
      </td>
      <td class="align-middle">
        <input
          type="number"
          class="form-control"
          step="1"
          max="9999"
          min="1"
          value={quantity}
          onChange={event => {
            // totalPrice = totalPrice - quantity * _item.price;
            // _totalPrice.setPrice(_totalPrice.price - quantity * _item.price);
            // setQuantity(event.target.value);
            // totalPrice = totalPrice + quantity * _item.price;
            // _totalPrice.setPrice(_totalPrice.price + quantity * _item.price);
            // _onChangeQuantity();
            decreasePrice();
            increasePrice(event);
          }}
        ></input>
      </td>
      <td class="align-middle">
        <strong id="sub_total_label${data[i].item_id}">
          {"$" + _item.price * quantity}
        </strong>
      </td>
      <td class="align-middle">
        <button
          class="btn btn-danger"
          id="remove_btn${data[i].item_id}"
          onClick={() => {
            _onClickRemove();
          }}
          style={{ color: "white" }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartTableItem;
