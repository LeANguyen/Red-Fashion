import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as cartItemApi from "../../APIs/cartItemApi";
import Button from "../common/Button";
import Input from "../common/Input";
import Space from "../common/Space";
import ItemCardCss from "./ItemCard.module.scss";
import ContainerCss from "../common/Container.module.scss";
import NumberInput from "../common/NumberInput";
import baseURL from "../../APIs/baseURL";

const ItemCard = ({ _item, _key }) => {
  const user = useSelector(state => state.user.data);

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

  const updateItemQuantityFromCurrentHandling = async (
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

  const deleteItemFromCurrentCartHandling = async (clientId, itemId) => {
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

  const getItemFromCurrentCartByItemIdHandling = async (clientId, itemId) => {
    const response = await getItemFromCurrentCartByItemIdApi.request(
      clientId,
      itemId
    );
    if (response.ok) {
      if (response.data[0] !== undefined) {
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
    if (user != null) {
      getItemFromCurrentCartByItemIdHandling(user.id, _item.id);
    }
  }, []);

  return (
    <div className={`card ${ContainerCss["body"]}`} key={_key}>
      <div className={`card-header ${ContainerCss["header"]}`}>
        <strong className="text-white">{_item.item_name}</strong>
      </div>

      {/* item image */}
      <img
        className={`card-img-top ${ItemCardCss["img"]}`}
        src={baseURL + "/images/store/item-" + _item.id + ".png"}
        alt=""
      ></img>

      {/* card body */}
      <div className="card-body">
        <li className="divider-dark">
          <strong className="text-yellow">
            <i className="fa fa-black-tie"></i>
            <Space></Space>
            <Space></Space>
            Category
          </strong>
          <strong className="text-white">{_item.category}</strong>
        </li>
        <li className="divider-dark">
          <strong className="text-yellow">
            <i className="fa fa-star"></i>
            <Space></Space>
            <Space></Space>
            Origin
          </strong>
          <strong className="text-white">{_item.origin}</strong>
        </li>
        <li className="divider-dark">
          <strong className="text-yellow">
            <i className="fa fa-money"></i>
            <Space></Space>
            <Space></Space>
            Price
          </strong>
          <strong className="text-white">{"$" + _item.price}</strong>
        </li>

        <li className="divider-dark">
          <strong className="text-yellow">
            <i className="fa fa-shopping-cart"></i>
            <Space></Space>
            <Space></Space>
            Cart
          </strong>
          {!itemInCart && (
            <NumberInput
              _maxLength={2}
              _value={quantity}
              _disabled={getItemFromCurrentCartByItemIdApi.loading}
              _onChange={event => setQuantity(event.target.value)}
              _onClickMinus={() => setQuantity(quantity - 1)}
              _onClickPlus={() => setQuantity(quantity + 1)}
            ></NumberInput>
          )}
          {itemInCart && (
            <NumberInput
              _maxLength={2}
              _value={quantity}
              _disabled={getItemFromCurrentCartByItemIdApi.loading}
              _onChange={event => {
                setQuantity(event.target.value);
                setQuantityEdited(true);
              }}
              _onClickMinus={() => {
                setQuantity(parseInt(quantity) - 1);
                setQuantityEdited(true);
              }}
              _onClickPlus={() => {
                setQuantity(parseInt(quantity) + 1);
                setQuantityEdited(true);
              }}
            ></NumberInput>
          )}
        </li>

        {/* item detail btn */}
        <br></br>
        <Button
          _className="btn-yellow btn-block"
          _iconName="tags"
          _onClick={() => history.push("/item_detail/" + _item.id)}
        >
          Item Detail
        </Button>

        {/* CRUD buttons */}
        {getItemFromCurrentCartByItemIdApi.loading && (
          <>
            <br></br>
            <Button
              _className="btn-pink btn-block"
              _iconName="tags"
              _loading={getItemFromCurrentCartByItemIdApi.loading}
            ></Button>
          </>
        )}
        {getItemFromCurrentCartByItemIdApi.success && (
          <>
            {/* add item btn */}
            {user !== null && !itemInCart && (
              <>
                <br></br>
                <Button
                  _loading={addItemIntoCurrentCartApi.loading}
                  _onClick={() =>
                    addItemIntoCurrentCartHandling(user.id, _item.id, quantity)
                  }
                  _iconName="cart-plus"
                  _className="btn-green btn-block"
                >
                  Add to Cart
                </Button>
              </>
            )}

            {/* update btn */}
            {itemInCart && quantityEdited && (
              <>
                <br></br>
                <Button
                  _loading={updateItemQuantityFromCurrentCartApi.loading}
                  _onClick={() =>
                    updateItemQuantityFromCurrentHandling(
                      user.id,
                      _item.id,
                      quantity
                    )
                  }
                  _iconName="pencil"
                  _className="btn-yellow btn-block"
                >
                  Update
                </Button>
              </>
            )}

            {/* remove item btn */}
            {user !== null && itemInCart && (
              <>
                <br></br>
                <Button
                  _loading={deleteItemFromCurrentCartApi.loading}
                  _onClick={() =>
                    deleteItemFromCurrentCartHandling(user.id, _item.id)
                  }
                  _className="btn-red btn-block"
                  _iconName="cart-arrow-down"
                >
                  Remove from Cart
                </Button>
              </>
            )}
          </>
        )}

        {/* no user logged in */}
        {user === null && (
          <div className="text-center">
            <br></br>
            <strong className={"text-pink"}>
              You have not login to save a cart
            </strong>
            <br></br>
            <br></br>
            <Button _className="btn-pink btn-block" _iconName="sign-in">
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
