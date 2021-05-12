import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useApi from "../../../hooks/useApi";
import * as cartItemApi from "../../../APIs/cartItemApi";
import CheckoutReadOnlyForm from "./CheckoutReadOnlyForm";
import CheckoutForm from "./CheckoutForm";
import { useHistory } from "react-router-dom";
import {
  setData,
  initEditedList,
  setTotalPrice
} from "../../../actions/cartActions";

import Loader from "../../common/Loader";
import ItemCartRow from "./ItemCartRow";
import { useParams } from "react-router-dom";
import Button from "../../common/Button";
import ItemCartReadOnlyRow from "./ItemCartReadOnlyRow";

const ItemCartList = () => {
  const history = useHistory();
  const cartData = useSelector(state => state.cart.data);
  const currentUser = useSelector(state => state.user.data);
  const dispatch = useDispatch();

  const params = useParams();
  const idP = params.id;

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
    if (idP !== undefined) {
      getItemsByCartIdHandling(idP);
    } else {
      if (currentUser !== null) {
        getItemsFromCurrentCartHandling(currentUser.id);
      }
    }
  }, [idP]);

  return (
    <div>
      {getItemsFromCurrentCartApi.loading && <Loader></Loader>}
      {getItemsFromCurrentCartApi.success && cartData.length !== 0 && (
        <div>
          {cartData.map((item, i) => {
            return (
              <>
                <br></br>
                <ItemCartRow _item={item} _key={i}></ItemCartRow>
                <div className="divider-dark"></div>
              </>
            );
          })}
          <br></br>
          <br></br>
          <CheckoutForm></CheckoutForm>
        </div>
      )}
      {getItemsByCartIdApi.success && (
        <div>
          {cartData.map((item, i) => {
            return (
              <>
                <br></br>
                <ItemCartReadOnlyRow
                  _item={item}
                  _key={i}
                ></ItemCartReadOnlyRow>
                <div className="divider-dark"></div>
              </>
            );
          })}
          <br></br>
          <br></br>
          <CheckoutReadOnlyForm
            _data={getItemsByCartIdApi.data[0]}
          ></CheckoutReadOnlyForm>
        </div>
      )}
      {getItemsFromCurrentCartApi.success && cartData.length === 0 && (
        <div className="text-center">
          <h5 className="text-yellow">There is nothing in your cart!!!</h5>
          <br></br>
          <div className="d-flex justify-content-center">
            <Button
              _className="btn-yellow"
              _iconName="shopping-cart"
              _onClick={() => history.push("/")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCartList;
