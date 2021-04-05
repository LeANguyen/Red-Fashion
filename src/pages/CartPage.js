import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import DataTable from "../components/table/DataTable";
import CartTableItem from "../components/table/CartTableItem";

import CheckoutForm from "../components/CheckoutForm";
import CheckoutDisplay from "../components/CheckoutDisplay";
import { useSelector, useDispatch } from "react-redux";

import { setData, initEditedList, setTotalPrice } from "../actions/cartActions";

import CartReadOnlyTableItem from "../components/table/CartReadOnlyTableItem";
import Container from "../components/Container";
import cartItemApi from "../api/cartItemApi";
import AppLoader from "../components/common/AppLoader";
import Page from "../components/temp/Page";

const CartPage = ({ match }) => {
  const cartData = useSelector(state => state.cart.data);
  const currentUser = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  const id = match.params.id;

  const getItemsFromCurrentCartApi = useApi(
    cartItemApi.getItemsFromCurrentCart
  );

  const getItemsByCartIdApi = useApi(cartItemApi.getItemsByCartId);

  const getItemsFromCurrentCartHandling = async clientId => {
    const response = await getItemsFromCurrentCartApi.request(clientId);
    if (response.ok) {
      dispatch(setData(response.data));
      dispatch(initEditedList(response.data.length));
      let totalPrice = 0;
      for (let i = 0; i < response.data.length; i++) {
        totalPrice += response.data[i].quantity * response.data[i].price;
      }
      dispatch(setTotalPrice(totalPrice));
    }
  };

  const getItemsByCartIdHandling = async cartId => {
    const response = await getItemsByCartIdApi.request(cartId);
    if (response.ok) {
      dispatch(setData(response.data));
      let totalPrice = 0;
      for (let i = 0; i < response.data.length; i++) {
        totalPrice += response.data[i].quantity * response.data[i].price;
      }
      dispatch(setTotalPrice(totalPrice));
    }
  };

  useEffect(() => {
    if (match.params && match.params.id) {
      getItemsByCartIdHandling(id);
    } else {
      if (currentUser !== null) {
        getItemsFromCurrentCartHandling(currentUser.id);
      }
    }
  }, []);

  return (
    <Page>
      <Container>
        {(getItemsFromCurrentCartApi.isLoading ||
          getItemsByCartIdApi.isLoading) && (
          <>
            <AppLoader></AppLoader>
          </>
        )}
        {getItemsFromCurrentCartApi.success && cartData.length !== 0 && (
          <DataTable
            _id="cartTable"
            _data={cartData}
            _headers={["ID", "Product", "Quantity", "Total", "Actions"]}
            _component={CartTableItem}
          ></DataTable>
        )}
        {getItemsByCartIdApi.success && cartData.length !== 0 && (
          <DataTable
            _id="cartReadOnlyTable"
            _data={cartData}
            _headers={["ID", "Product", "Quantity", "Total"]}
            _component={CartReadOnlyTableItem}
          ></DataTable>
        )}
      </Container>

      {getItemsFromCurrentCartApi.success && (
        <Container>
          <CheckoutForm></CheckoutForm>
        </Container>
      )}

      {getItemsByCartIdApi.success && (
        <Container>
          <CheckoutDisplay
            _data={getItemsByCartIdApi.data[0]}
          ></CheckoutDisplay>
        </Container>
      )}
    </Page>
  );
};

export default CartPage;
