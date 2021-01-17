import React, { useEffect } from "react";
import Screen from "../components/Screen";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import DataTable from "../components/table/DataTable";
import CartTableItem from "../components/table/CartTableItem";

import CheckoutForm from "../components/CheckoutForm";
import CheckoutDisplay from "../components/CheckoutDisplay";
import { useSelector, useDispatch } from "react-redux";

import { setData, initEditedList, setTotalPrice } from "../actions/cartActions";

import CartReadOnlyTableItem from "../components/table/CartReadOnlyTableItem";
import Container from "../components/Container";
import FormLoader from "../components/form/FormLoader";
import FormText from "../components/form/FormText";

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
      getAllItemByCartIdExtraHandling(id);
    } else {
      getAllItemFromCurrentCartApiExtraHandling(currentId);
    }
  }, []);

  return (
    <Screen>
      <Container>
        {(getAllItemFromCurrentCartApi.isLoading ||
          getAllItemByCartIdApi.isLoading) && (
          <>
            <FormLoader></FormLoader>
            <FormText _text="Fetching Data..." _variant="info"></FormText>
          </>
        )}
        {getAllItemFromCurrentCartApi.success && cartData.length !== 0 && (
          <DataTable
            _id="cartTable"
            _data={cartData}
            _headers={["ID", "Product", "Quantity", "Total", "Actions"]}
            _component={CartTableItem}
          ></DataTable>
        )}
        {getAllItemByCartIdApi.success && cartData.length !== 0 && (
          <DataTable
            _id="cartReadOnlyTable"
            _data={cartData}
            _headers={["ID", "Product", "Quantity", "Total"]}
            _component={CartReadOnlyTableItem}
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
