import React from "react";
import TableHeader from "./TableHeader";
import CartTableItem from "./CartTableItem";
import usePagination from "./usePagination";
import Pagination from "./Pagination";
import useCartItemApi from "../../api/useCartItemApi";
import useApi from "../../hooks/useApi";

const CartTable = ({
  _data,
  _headers = ["Product", "Price", "Quantity", "Total", ""]
}) => {
  const cartItemApi = useCartItemApi();
  const deleteItemFromCurrentCartApi = useApi(
    cartItemApi.deleteItemFromCurrentCart
  );
  const pagination = usePagination(_data);

  return (
    <div>
      <div className="table-responsive">
        {_data.length === 0 && (
          <p className="text-center m-5">There is no item in the cart</p>
        )}
        {_data.length !== 0 && (
          <>
            <table className="table">
              <thead>
                <TableHeader _headers={_headers}></TableHeader>
              </thead>

              <tbody>
                {pagination.currentItems.map((item, i) => {
                  return (
                    <CartTableItem
                      _item={item}
                      _key={i}
                      _onClickRemove={() => {
                        deleteItemFromCurrentCartApi.request(1, item.item_id);
                      }}
                    ></CartTableItem>
                  );
                })}
              </tbody>
            </table>

            <Pagination _pageNumbers={pagination.pageNumbers}></Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default CartTable;
