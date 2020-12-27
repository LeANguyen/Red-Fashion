import React, { useEffect } from "react";
import Screen from "../components/Screen";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import DataTable from "../components/table/DataTable";
import CartTableItem from "../components/table/CartTableItem";

import CartTable from "../components/table/CartTable";
import useCartApi from "../api/useCartApi";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutDisplay from "../components/CheckoutDisplay";
import { useSelector, useDispatch } from "react-redux";
import {
  setData,
  setEditedList,
  initEditedList,
  setTotalPrice
} from "../actions/cartActions";
import CartTableReadOnlyItem from "../components/table/CartTableReadOnlyItem";
import Container from "../components/Container";

const CartScreen = ({ match }) => {
  const currentId = localStorage.getItem("id");
  const cartData = useSelector(state => state.cart.data);
  const dispatch = useDispatch();

  const id = match.params.id;

  const cartItemApi = useCartItemApi();
  const getAllItemFromCurrentCartApi = useApi(
    cartItemApi.getAllItemFromCurrentCart
  );
  const getAllItemByCartIdApi = useApi(cartItemApi.getAllItemByCartId);

  const cartApi = useCartApi();
  const createCartApi = useApi(cartApi.createCart);

  const getAllItemFromCurrentCartApiExtraHandling = async clientId => {
    const response = await getAllItemFromCurrentCartApi.request(clientId);
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

  const getAllItemByCartIdExtraHandling = async cartId => {
    const response = await getAllItemByCartIdApi.request(cartId);
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
      // getAllItemByCartIdApi.request(id);
      getAllItemByCartIdExtraHandling(id);
    } else {
      getAllItemFromCurrentCartApiExtraHandling(currentId);
    }
  }, []);

  return (
    <Screen>
      <Container>
        {getAllItemFromCurrentCartApi.success && cartData.length !== 0 && (
          <DataTable
            _data={cartData}
            _headers={["id", "Product", "Quantity", "Total", "Actions"]}
            _component={CartTableItem}
          ></DataTable>
        )}
        {getAllItemByCartIdApi.success && cartData.length !== 0 && (
          <DataTable
            _data={cartData}
            _headers={["id", "Product", "Quantity", "Total"]}
            _component={CartTableReadOnlyItem}
          ></DataTable>
        )}
      </Container>

      {getAllItemFromCurrentCartApi.success && (
        <Container>
          <CheckoutForm></CheckoutForm>
        </Container>
      )}

      {getAllItemByCartIdApi.success && (
        <Container>
          <CheckoutDisplay
            _data={getAllItemByCartIdApi.data[0]}
          ></CheckoutDisplay>
        </Container>
      )}
    </Screen>
  );
};

export default CartScreen;
