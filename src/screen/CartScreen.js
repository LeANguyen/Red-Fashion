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
import { setData, setEditedList, initEditedList } from "../actions/cartActions";
import CartTableReadOnlyItem from "../components/table/CartTableReadOnlyItem";

const CartScreen = ({ match }) => {
  const currentId = localStorage.getItem("id");
  const cartData = useSelector(state => state.cart.data);
  const editedList = useSelector(state => state.cart.editedList);
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
    }
  };

  const getAllItemByCartIdExtraHandling = async cartId => {
    const response = await getAllItemByCartIdApi.request(cartId);
    if (response.ok) {
      dispatch(setData(response.data));
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
      <div className="px-4 px-lg-0">
        <div className="p-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {getAllItemFromCurrentCartApi.success &&
                  cartData.length !== 0 && (
                    <DataTable
                      _data={cartData}
                      _headers={[
                        "id",
                        "Product",
                        "Quantity",
                        "Total",
                        "Actions"
                      ]}
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
              </div>
            </div>

            {getAllItemFromCurrentCartApi.success && (
              <div className="py-5 p-4 bg-white rounded shadow-sm">
                <CheckoutForm></CheckoutForm>
              </div>
            )}

            {getAllItemByCartIdApi.success && (
              <div className="py-5 p-4 bg-white rounded shadow-sm">
                <CheckoutDisplay
                  _data={getAllItemByCartIdApi.data[0]}
                ></CheckoutDisplay>
              </div>
            )}
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default CartScreen;
