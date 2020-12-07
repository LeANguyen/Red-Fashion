import React from "react";
const CartTableItem = ({ _item, _key }) => {
  return (
    <tr key={_key}>
      <th scope="row">
        <div class="p-2">
          <img
            src={
              "https://static.remove.bg/sample-gallery/products/fashion-footwear-19090-thumbnail.jpgxs"
            }
            alt="No Image"
            width="70"
            class="img-fluid rounded shadow-sm"
          ></img>
          <div class="ml-3 d-inline-block align-middle">
            <h5 class="mb-0">
              <a
                href="item_detail_page?id=${data[i].item_id}"
                class="text-dark d-inline-block align-middle"
              >
                {_item.item_name}
              </a>
            </h5>
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
          id="quantity_input${data[i].item_id}"
          oninput="this.value = Math.abs(this.value)"
          class="form-control"
          step="1"
          max="9999"
          min="1"
          value="${data[i].quantity}"
          onfocusin="quantity_focus(this.value)"
          onchange="quantity_edit(${data[i].item_id})"
        ></input>
      </td>
      <td class="align-middle">
        <strong id="sub_total_label${data[i].item_id}">
          {/* $${data[i].price * data[i].quantity} */}
          {"$" + _item.price * _item.quantity}
        </strong>
      </td>
      <td class="align-middle">
        <button
          class="btn btn-danger"
          id="remove_btn${data[i].item_id}"
          onclick="remove(${data[i].item_id})"
          style="color: white"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartTableItem;
