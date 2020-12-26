import React from "react";
import "./Table.css";

const CartTableReadOnlyItem = ({ _item, _key }) => {
  return (
    <tr key={_key}>
      <td class="align-middle">
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
          class="img-fluid rounded shadow-sm"
        ></img>
        <div class="m-2 d-inline-block align-middle">
          <strong>
            <a
              href="item_detail_page?id=${data[i].item_id}"
              class="text-dark d-inline-block align-middle"
            >
              {_item.item_name}
            </a>
          </strong>
          <span class="text-muted font-weight-normal d-block">
            {"$ " + _item.price}
          </span>
        </div>
      </th>
      <td class="align-middle">
        <input
          type="number"
          class="form-control"
          disabled={true}
          value={_item.quantity}
        ></input>
      </td>
      <td class="align-middle">
        <strong>{"$" + _item.price * _item.quantity}</strong>
      </td>
    </tr>
  );
};

export default CartTableReadOnlyItem;
