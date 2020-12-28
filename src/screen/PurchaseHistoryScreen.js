import React, { useEffect } from "react";
import Screen from "../components/Screen";
import useCartApi from "../api/useCartApi";
import useApi from "../hooks/useApi";
import DataTable from "../components/table/DataTable";
import PurchaseHistoryTableItem from "../components/table/PurchaseHistoryTableItem";
import Container from "../components/Container";

const PurchaseHistoryScreen = () => {
  const cartApi = useCartApi();
  const currentId = localStorage.getItem("id");
  const getAllCartApi = useApi(cartApi.getAllCart);

  useEffect(() => {
    getAllCartApi.request(currentId);
  }, []);

  return (
    <Screen>
      <Container>
        {getAllCartApi.isLoading && (
          <p className="text text-info text-center">Fetching Data...</p>
        )}
        {getAllCartApi.success && (
          <DataTable
            _id="purchaseHistoryTable"
            _data={getAllCartApi.data.slice(0, getAllCartApi.data.length - 1)}
            _headers={[
              "Checkout Date",
              "Receiver's Name",
              "Address",
              "Phone",
              ""
            ]}
            _component={PurchaseHistoryTableItem}
          ></DataTable>
        )}
      </Container>
    </Screen>
  );
};

export default PurchaseHistoryScreen;
