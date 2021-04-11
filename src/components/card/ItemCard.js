import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import cartItemApi from "../../api/cartItemApi";
import Button from "../common/Button";
import AppInput from "../common/AppInput";
import Space from "../common/Space";
import ItemCardCss from "./ItemCard.module.scss";
import TextCss from "../../styles/Text.module.scss";
import ButtonCss from "../../styles/Button.module.scss";

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
    <div className={`card ${ItemCardCss.body}`} key={_key}>
      <div className={`card-header ${ItemCardCss.header}`}>
        <h5 className={`${ItemCardCss.title}`}>{_item.item_name}</h5>
      </div>
      {/* item image */}
      <img
        className={`card-img-top ${ItemCardCss.img}`}
        src={"http://localhost:3000/uploaded_images/item" + _item.id + ".png"}
        alt=""
      ></img>

      {/* card body */}
      <div className="card-body">
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong className={TextCss["pink"]}>
            <i className="fa fa-black-tie">
              <Space></Space>
              <Space></Space>
            </i>
            Category
          </strong>
          <strong>{_item.category}</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong className={TextCss["yellow"]}>
            <i className="fa fa-star">
              <Space></Space>
              <Space></Space>
            </i>
            Origin
          </strong>
          <strong>{_item.origin}</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom">
          <strong className={TextCss["yellow"]}>
            <i className="fa fa-money">
              <Space></Space>
              <Space></Space>
            </i>
            Price
          </strong>
          <strong>{"$" + _item.price}</strong>
        </li>
        <li class="d-flex justify-content-between py-3 border-bottom align-items-center">
          <strong className={TextCss["yellow"]}>
            <i className="fa fa-shopping-cart">
              <Space></Space>
              <Space></Space>
            </i>
            Inventory
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
        <Button
          _className={`${ButtonCss["orange"]} btn-block`}
          _iconName="tags"
        >
          Item Detail
        </Button>
        <br></br>
        {getItemFromCurrentCartByItemIdApi.loading && (
          <Button
            _block
            _variant="dark"
            _loading={getItemFromCurrentCartByItemIdApi.loading}
          ></Button>
        )}
        {getItemFromCurrentCartByItemIdApi.success && (
          <>
            {currentUser !== null && !itemInCart && (
              <Button
                _loading={addItemIntoCurrentCartApi.loading}
                _onClick={() =>
                  addItemIntoCurrentCartHandling(
                    currentUser.id,
                    _item.id,
                    quantity
                  )
                }
                _iconName="cart-plus"
                _className={`${ButtonCss["orange"]} btn-block`}
              >
                Add to Cart
              </Button>
            )}
            <Button
              _hidden={!itemInCart || !quantityEdited}
              _loading={updateItemQuantityFromCurrentCartApi.loading}
              _onClick={() =>
                updateItemQuantityFromCurrentExtraHandling(
                  currentUser.id,
                  _item.id,
                  quantity
                )
              }
            >
              Update
            </Button>
            {currentUser !== null && itemInCart && (
              <Button
                _loading={deleteItemFromCurrentCartApi.loading}
                _onClick={() =>
                  deleteItemFromCurrentCartExtraHandling(
                    currentUser.id,
                    _item.id
                  )
                }
                _className={`${ButtonCss["pink"]}`}
                _iconName="cart-arrow-down"
              >
                Remove from Cart
              </Button>
            )}
          </>
        )}
        {currentUser === null && (
          <>
            <p className="text-muted">You have not login to save a cart</p>
            <Button
              _text="Register"
              _variant="success"
              _onClick={() => history.push("/sign")}
            ></Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
