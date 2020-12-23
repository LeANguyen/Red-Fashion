import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import useCartItemApi from "../../api/useCartItemApi";
import useApi from "../../hooks/useApi";

const CartTable = ({ _data, _headers = [], _readOnly = false }) => {
  const [data, setData] = useState(_data);

  const cartItemApi = useCartItemApi();

  const updateItemQuantityFromCurrentCartApi = useApi(
    cartItemApi.updateItemQuantityFromCurrentCart
  );

  const deleteItemFromCurrentCartApi = useApi(
    cartItemApi.deleteItemFromCurrentCart
  );

  const [quantityEdited, setQuantityEdited] = useState(false);

  const updateItemQuantityFromCurrentExtraHandling = async (
    clientId,
    itemId,
    quantity
  ) => {
    const response = await updateItemQuantityFromCurrentCartApi.request(
      clientId,
      itemId,
      quantity
    );
    if (response.ok) {
      setQuantityEdited(false);
    } else {
      alert("updateItemQuantityFromCurrentCart Failed");
    }
  };

  const deleteItemFromCurrentCartExtraHandling = async (clientId, itemId) => {
    const response = await deleteItemFromCurrentCartApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      setData(data.filter(item => item.item_id !== itemId));
    } else {
      alert("deleteItemFromCurrentCart Failed");
    }
  };

  const reloadTableData = data => {
    // const table = $(".data-table-wrapper")
    //   .find("table")
    //   .DataTable();
    // table.clear();
    // table.rows.add(data);
    // table.draw();

    // $("#cartTable")
    //   .DataTable()
    //   .destroy();
    $("#cartTable")
      .DataTable()
      .ajax.reload();
    // table.clear();
    // table.ajax.reload(data, true);
    // table.clear();
    // table.rows.add(data);
    // table.draw();
    // table.clear();
  };

  const handleQuantityValueChange = (event, id) => {
    let newData = [...data];
    newData[id].quantity = event.target.value;
    setData(newData);
  };

  useEffect(() => {
    $("#cartTable").DataTable();
  }, []);

  return (
    <div className="table-responsive">
      <button
        className="btn btn-danger"
        hidden
        onClick={() => reloadTableData(data)}
      >
        Reload Table
      </button>
      <table id="cartTable" className="table">
        <thead>
          <TableHeader _headers={_headers}></TableHeader>
        </thead>

        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td class="align-middle">
                  <strong>{i}</strong>
                </td>
                <th>
                  <img
                    src={
                      "http://localhost:3000/uploaded_images/item" +
                      item.item_id +
                      ".png"
                    }
                    alt="No Image"
                    width="80"
                    class="img-fluid rounded shadow-sm"
                  ></img>
                  <div class="m-2 d-inline-block align-middle">
                    <strong>
                      <a
                        href="item_detail_page?id=${data[i].item_id}"
                        class="text-dark d-inline-block align-middle"
                      >
                        {item.item_name}
                      </a>
                    </strong>
                    <span class="text-muted font-weight-normal font-italic d-block">
                      {"Category: " + item.category}
                    </span>
                    <span class="text-muted font-weight-normal font-italic d-block">
                      {"Made in: " + item.origin}
                    </span>
                  </div>
                </th>

                <td class="align-middle">
                  <strong>{"$" + item.price}</strong>
                </td>
                <td class="align-middle">
                  <input
                    type="number"
                    class="form-control"
                    step="1"
                    max="9999"
                    min="1"
                    disabled={_readOnly}
                    value={item.quantity}
                    onChange={event => {
                      handleQuantityValueChange(event, i);
                      setQuantityEdited(true);
                    }}
                  ></input>
                  <button
                    class="btn btn-warning btn-block"
                    hidden={!quantityEdited}
                    onClick={() => {
                      // deleteItemFromCurrentCartApi.request(1, _item.item_id);
                      updateItemQuantityFromCurrentExtraHandling(
                        1,
                        data[i].item_id,
                        data[i].quantity
                      );
                    }}
                  >
                    Update
                  </button>
                </td>
                <td class="align-middle">
                  <strong id="sub_total_label${data[i].item_id}">
                    {"$" + item.price * item.quantity}
                  </strong>
                </td>
                {_readOnly === false && (
                  <td class="align-middle">
                    <button
                      class="btn btn-danger"
                      onClick={() => {
                        // deleteItemFromCurrentCartApi.request(1, _item.item_id);
                        deleteItemFromCurrentCartExtraHandling(
                          1,
                          data[i].item_id
                        );
                        setData(data.filter((item, id) => id !== i));
                      }}
                      style={{ color: "white" }}
                    >
                      Remove
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
