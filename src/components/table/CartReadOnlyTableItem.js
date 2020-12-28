import React from "react";

const CartReadOnlyTableItem = ({ _item, _key }) => {
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
          disabled={true}
          value={_item.quantity}
        ></input>
      </td>
      <td className="align-middle">
        <strong>{"$" + _item.price * _item.quantity}</strong>
      </td>
    </tr>
  );
};

export default CartReadOnlyTableItem;
