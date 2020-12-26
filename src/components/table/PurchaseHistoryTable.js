import React from "react";
import TableHeader from "./TableHeader";
import { Link, useHistory } from "react-router-dom";

const PurchaseHistoryTable = ({ _data, _headers = [] }) => {
  const history = useHistory();

  return (
    <div class="table-responsive">
      <table class="table">
        <TableHeader _headers={_headers}></TableHeader>
        {/* <thead>
          <tr>
            <th scope="col" class="border-0 bg-dark rounded-left text-white">
              <div class="py-2 px-3 text-uppercase">Checkout Date</div>
            </th>
            <th scope="col" class="border-0 bg-dark text-white">
              <div class="py-2 text-uppercase">Receiver's Name</div>
            </th>

            <th scope="col" class="border-0 bg-dark text-white">
              <div class="py-2 text-uppercase">Address</div>
            </th>

            <th scope="col" class="border-0 bg-dark text-white">
              <div class="py-2 text-uppercase">Phone</div>
            </th>

            <th scope="col" class="border-0 rounded-right bg-dark text-white">
              <div class="py-2 text-uppercase"></div>
            </th>
          </tr>
        </thead> */}
        <tbody id="cart_table_body">
          {_data.map((item, i) => {
            return (
              <tr key={i}>
                <td class="align-middle">
                  <strong id="client_name_label${data[i].id}">
                    {item.checkout_date}
                  </strong>
                </td>
                <td class="align-middle">
                  <strong
                    class="text-muted"
                    id="client_name_label${data[i].id}"
                  >
                    {item.client_name}
                  </strong>
                </td>
                <td class="align-middle">
                  <strong class="text-muted" id="address_label${data[i].id}">
                    {item.address}
                  </strong>
                </td>
                <td class="align-middle">
                  <strong class="text-muted" id="phone_label${data[i].id}">
                    {item.phone}
                  </strong>
                </td>
                <td class="align-middle">
                  <a
                    class="btn btn-info btn-block"
                    onClick={() => {
                      history.push("/cart/" + item.id);
                    }}
                  >
                    Detail
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistoryTable;
