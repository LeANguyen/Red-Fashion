import React from "react";

const AdminTableItem = ({ _item, _key, _onClickRemove, _onClickUpdate }) => {
  return (
    <tr key={_key}>
      <td class="align-middle">
        <strong>{_item.id}</strong>
      </td>
      <th>
        <img
          src={"http://localhost:3000/uploaded_images/item" + _item.id + ".png"}
          alt="No Image"
          width="80"
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
      </th>

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

export default AdminTableItem;
