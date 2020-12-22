import React from "react";
import TableHeader from "./TableHeader";

const PurchaseHistoryTable = ({ _data, _headers = [] }) => {
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
        <tbody id="cart_table_body"></tbody>
      </table>
    </div>
  );
};

export default PurchaseHistoryTable;
