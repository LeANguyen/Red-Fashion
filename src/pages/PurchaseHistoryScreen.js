import React, { useEffect } from "react";
import * as cartApi from "../APIs/cartApi";
import useApi from "../hooks/useApi";
import DataTable from "../components/table/DataTable";
import PurchaseHistoryTableItem from "../components/table/PurchaseHistoryTableItem";
import Container from "../components/common/Container";
import { useSelector } from "react-redux";
import Page from "../components/Page";

const PurchaseHistoryScreen = () => {
  const currentUser = useSelector(state => state.user.data);
  const getCartsApi = useApi(cartApi.getCarts);

  useEffect(() => {
    if (currentUser != null) {
      getCartsApi.request(currentUser.id);
    }
  }, []);

  return (
    <Page>
      <Container>
        {getCartsApi.isLoading && (
          <p className="text text-info text-center">Fetching Data...</p>
        )}
        {getCartsApi.success && (
          <DataTable
            _id="purchaseHistoryTable"
            _data={getCartsApi.data.slice(0, getCartsApi.data.length - 1)}
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
    </Page>
  );
};

export default PurchaseHistoryScreen;
