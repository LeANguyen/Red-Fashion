import React from "react";
import Screen from "../components/Screen";
const PurchaseHistoryScreen = () => {
  return (
    <Screen>
      <div class="px-4 px-lg-0">
        <div class="container text-white py-5 text-center"></div>
        <div class="pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="border-0 bg-dark rounded-left text-white"
                        >
                          <div class="p-2 px-3 text-uppercase">
                            Checkout Date
                          </div>
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

                        <th
                          scope="col"
                          class="border-0 rounded-right bg-dark text-white"
                        >
                          <div class="py-2 text-uppercase"></div>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="cart_table_body"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default PurchaseHistoryScreen;
