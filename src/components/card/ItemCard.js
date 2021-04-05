import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import cartItemApi from "../../api/cartItemApi";
import AppButton from "../common/AppButton";
import AppInput from "../common/AppInput";
import Space from "../common/Space";
const ItemCard = ({ _item, _key }) => {
  const currentUser = useSelector(state => state.user.data);

  const history = useHistory();
  const getItemFromCurrentCartByItemIdApi = useApi(
    cartItemApi.getItemFromCurrentCartByItemId
  );

  const updateItemQuantityFromCurrentCartApi = useApi(
    cartItemApi.updateItemQuantityFromCurrentCart
  );

  const addItemIntoCurrentCartApi = useApi(cartItemApi.addItemIntoCurrentCart);

  const deleteItemFromCurrentCartApi = useApi(
    cartItemApi.deleteItemFromCurrentCart
  );

  const [quantity, setQuantity] = useState();
  const [itemInCart, setItemInCart] = useState();
  const [quantityEdited, setQuantityEdited] = useState(false);

  const addItemIntoCurrentCartHandling = async (clientId, itemId, quantity) => {
    const response = await addItemIntoCurrentCartApi.request(
      clientId,
      itemId,
      quantity
    );
    if (response.ok) {
      setItemInCart(true);
      alert("addItemIntoCurrentCart Succ");
    } else {
      alert("addItemIntoCurrentCart Failed");
    }
  };

  const updateItemQuantityFromCurrentExtraHandling = async (
    clientId,
    itemId,
    quantity
  ) => {
    const response = await updateItemQuantityFromCurrentCartApi.request(
      clientId,
      itemId,
      quantity
    );
    if (response.ok) {
      setQuantityEdited(false);
    } else {
      alert("updateItemQuantityFromCurrentCart Failed");
    }
  };

  const deleteItemFromCurrentCartExtraHandling = async (clientId, itemId) => {
    const response = await deleteItemFromCurrentCartApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      setQuantityEdited(false);
      setItemInCart(false);
    } else {
      alert("deleteItemFromCurrentCart Failed");
    }
  };

  const getItemFromCurrentCartByItemIdExtraHandling = async (
    clientId,
    itemId
  ) => {
    const response = await getItemFromCurrentCartByItemIdApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      if (response.data[0] != undefined) {
        setItemInCart(true);
        setQuantity(response.data[0].quantity);
      } else {
        setItemInCart(false);
        setQuantity(1);
      }
    } else {
      alert("getItemFromCurrentCartByItemId Failed");
    }
  };

  useEffect(() => {
    if (currentUser != null) {
      getItemFromCurrentCartByItemIdExtraHandling(currentUser.id, _item.id);
    }
  }, []);

  return (
    <div className="card text-left shadow-sm" key={_key}>
      {/* item image */}
      <img
        className="card-img-top"
        src={"http://localhost:3000/uploaded_images/item" + _item.id + ".png"}
        alt=""
      ></img>

      {/* card body */}
      <div className="card-body">
        <h5 className="text-dark font-weight-bold">{_item.item_name}</h5>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong className="text-muted">
            <i className="fa fa-black-tie">
              <Space></Space>
              <Space></Space>
            </i>
            Category:
          </strong>
          <strong>{_item.category}</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong className="text-muted">
            <i className="fa fa-star">
              <Space></Space>
              <Space></Space>
            </i>
            Origin:
          </strong>
          <strong>{_item.origin}</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong className="text-muted">
            <i className="fa fa-money">
              <Space></Space>
              <Space></Space>
            </i>
            Price:
          </strong>
          <strong>{"$" + _item.price}</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom align-items-center">
          <strong className="text-muted">
            <i className="fa fa-shopping-cart">
              <Space></Space>
              <Space></Space>
            </i>
            In Cart:
          </strong>
          {!itemInCart && (
            <AppInput
              _roundedPill
              _inputType="number"
              _maxLength={2}
              _value={quantity}
              _disabled={getItemFromCurrentCartByItemIdApi.loading}
              _onChange={event => setQuantity(event.target.value)}
              _width={25}
              _className="p-0"
            ></AppInput>
          )}
          {itemInCart && (
            <AppInput
              _roundedPill
              _inputType="number"
              _maxLength={2}
              _value={quantity}
              _disabled={getItemFromCurrentCartByItemIdApi.loading}
              _onChange={event => {
                setQuantity(event.target.value);
                setQuantityEdited(true);
              }}
              _width={25}
              _className="p-0"
            ></AppInput>
          )}
        </li>
        <br></br>

        {/* buttons */}
        <AppButton
          _block
          _text="Item Detail"
          _variant="info"
          _onClick={() => history.push("/item_detail/" + _item.id)}
        ></AppButton>
        {getItemFromCurrentCartByItemIdApi.loading && (
          <AppButton
            _block
            _variant="dark"
            _loading={getItemFromCurrentCartByItemIdApi.loading}
          ></AppButton>
        )}
        {getItemFromCurrentCartByItemIdApi.success && (
          <>
            {currentUser !== null && !itemInCart && (
              <AppButton
                _block
                _text="Add to Cart"
                _variant="success"
                _loading={addItemIntoCurrentCartApi.loading}
                _onClick={() =>
                  addItemIntoCurrentCartHandling(
                    currentUser.id,
                    _item.id,
                    quantity
                  )
                }
              ></AppButton>
            )}
            <AppButton
              _block
              _text="Update"
              _hidden={!itemInCart || !quantityEdited}
              _variant="warning"
              _loading={updateItemQuantityFromCurrentCartApi.loading}
              _onClick={() =>
                updateItemQuantityFromCurrentExtraHandling(
                  currentUser.id,
                  _item.id,
                  quantity
                )
              }
            ></AppButton>
            {currentUser !== null && itemInCart && (
              <AppButton
                _block
                _text="Remove from Cart"
                _variant="danger"
                _loading={deleteItemFromCurrentCartApi.loading}
                _onClick={() =>
                  deleteItemFromCurrentCartExtraHandling(
                    currentUser.id,
                    _item.id
                  )
                }
              ></AppButton>
            )}
          </>
        )}
        {currentUser === null && (
          <>
            <p className="text-muted">You have not login to save a cart</p>
            <AppButton
              _text="Register"
              _variant="success"
              _onClick={() => history.push("/sign")}
            ></AppButton>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
