import React, { useEffect } from "react";
import Screen from "../components/Screen";
import Table from "../components/table/Table";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import useTotalPrice from "../components/useTotalPrice";
import CartTableItem from "../components/table/CartTableItem";
import DataTable from "../components/table/DataTable";
import CartTable from "../components/table/CartTable";
import useCartApi from "../api/useCartApi";
import CheckoutForm from "../components/CheckoutForm";

const CartScreen = () => {
  const cartItemApi = useCartItemApi();
  const getAllItemFromCurrentCartApi = useApi(
    cartItemApi.getAllItemFromCurrentCart
  );

  const cartApi = useCartApi();
  const createCartApi = useApi(cartApi.createCart);

  useEffect(() => {
    getAllItemFromCurrentCartApi.request(1);
  }, []);

  return (
    <Screen>
      <div className="px-4 px-lg-0">
        <div className="p-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                {getAllItemFromCurrentCartApi.success && (
                  // <DataTable
                  //   _data={getAllItemFromCurrentCartApi.data}
                  // _headers={[
                  //   "index",
                  //   "Product",
                  //   "Price",
                  //   "Quantity",
                  //   "Total",
                  //   ""
                  // ]}
                  //   _component={CartTableItem}
                  // ></DataTable>
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
                  // <Table
                  //   _data={getAllItemFromCurrentCartApi.data}
                  //   _headers={["Product", "Price", "Quantity", "Total", ""]}
                  //   _component={CartTableItem}
                  // ></Table>
                )}
              </div>
            </div>

            <div className="py-5 p-4 bg-white rounded shadow-sm">
              <CheckoutForm></CheckoutForm>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default CartScreen;
