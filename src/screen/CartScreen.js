import React, { useEffect } from "react";
import Screen from "../components/Screen";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import CartTable from "../components/table/CartTable";
import useCartApi from "../api/useCartApi";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutDisplay from "../components/CheckoutDisplay";

const CartScreen = ({ match }) => {
  const id = match.params.id;
  const cartItemApi = useCartItemApi();
  const getAllItemFromCurrentCartApi = useApi(
    cartItemApi.getAllItemFromCurrentCart
  );
  const getAllItemByCartIdApi = useApi(cartItemApi.getAllItemByCartId);

  const cartApi = useCartApi();
  const createCartApi = useApi(cartApi.createCart);

  useEffect(() => {
    if (match.params && match.params.id) {
      getAllItemByCartIdApi.request(id);
    } else {
      getAllItemFromCurrentCartApi.request(1);
    }
  }, []);

  return (
    <Screen>
      <div className="px-4 px-lg-0">
        <div className="p-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {getAllItemFromCurrentCartApi.success && (
                  <CartTable
                    _data={getAllItemFromCurrentCartApi.data}
                    _headers={[
                      "id",
                      "Product",
                      "Price",
                      "Quantity",
                      "Total",
                      ""
                    ]}
                  ></CartTable>
                )}
                {getAllItemByCartIdApi.success && (
                  <CartTable
                    _data={getAllItemByCartIdApi.data}
                    _headers={["id", "Product", "Price", "Quantity", "Total"]}
                    _readOnly={true}
                  ></CartTable>
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
