import React, { useEffect } from "react";
import Screen from "../components/Screen";
import PurchaseHistoryTable from "../components/table/PurchaseHistoryTable";
import useCartApi from "../api/useCartApi";
import useApi from "../hooks/useApi";

const PurchaseHistoryScreen = () => {
  const cartApi = useCartApi();
  const currentId = localStorage.getItem("id");
  const getAllCartApi = useApi(cartApi.getAllCart);

  useEffect(() => {
    getAllCartApi.request(currentId);
  }, []);

  return (
    <Screen>
      <div class="px-4 px-lg-0">
        <div class="container text-white py-5 text-center"></div>
        <div class="pb-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {getAllCartApi.isLoading && (
                  <p className="text text-info text-center">Fetching Data...</p>
                )}
                {getAllCartApi.success && (
                  <PurchaseHistoryTable
                    _data={getAllCartApi.data.slice(
                      0,
                      getAllCartApi.data.length - 1
                    )}
                    _headers={[
                      "Checkout Date",
                      "Receiver's Name",
                      "Address",
                      "Phone",
                      ""
                    ]}
                  ></PurchaseHistoryTable>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default PurchaseHistoryScreen;
