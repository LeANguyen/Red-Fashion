import React, { useState, useEffect } from "react";
import * as cartItemApi from "../../../APIs/cartItemApi";
import useApi from "../../../hooks/useApi";
import { useSelector } from "react-redux";
import Container from "../../common/Container";
import Input from "../../common/Input";
import Button from "../../common/Button";
import Space from "../../common/Space";
import ContainerCss from "../../common/Container.module.scss";

const ItemDetailContainer = ({ _item }) => {
  const user = useSelector(state => state.user.data);
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
    getItemFromCurrentCartByItemIdHandling(user.id, _item.id);
  }, []);

  return (
    <Container _hasHeader _title={_item.item_name}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "http://localhost:3000/uploaded_images/item" + _item.id + ".png"
            }
            alt=""
            className="img-thumbnail"
          ></img>
        </div>

        <div className="col-md-6">
          <li className={ContainerCss["divider"]}>
            <strong className="text-pink">
              <i className="fa fa-tags">
                <Space></Space>
                <Space></Space>
              </i>
              ID
            </strong>
            <strong className="text-pink-w">{_item.id}</strong>
          </li>

          <li className={ContainerCss["divider"]}>
            <strong className="text-pink">
              <i className="fa fa-black-tie">
                <Space></Space>
                <Space></Space>
              </i>
              Category
            </strong>
            <strong className="text-pink-w">{_item.category}</strong>
          </li>

          <li className={ContainerCss["divider"]}>
            <strong className={"text-pink"}>
              <i className="fa fa-star">
                <Space></Space>
                <Space></Space>
              </i>
              Origin
            </strong>
            <strong className="text-pink-w">{_item.origin}</strong>
          </li>

          <li className={ContainerCss["divider"]}>
            <strong className="text-pink">
              <i className="fa fa-money">
                <Space></Space>
                <Space></Space>
              </i>
              Price
            </strong>
            <strong className="text-pink-w">{"$" + _item.price}</strong>
          </li>

          <li className={ContainerCss["divider"]}>
            <strong className="text-pink">
              <i className="fa fa-shopping-cart">
                <Space></Space>
                <Space></Space>
              </i>
              Inventory
            </strong>
            {!itemInCart && (
              <Input
                _inputType="number"
                _maxLength={2}
                _value={quantity}
                _disabled={getItemFromCurrentCartByItemIdApi.loading}
                _onChange={event => setQuantity(event.target.value)}
                _width={25}
                _wrapperClass="input-1"
              ></Input>
            )}
            {itemInCart && (
              <Input
                _inputType="number"
                _maxLength={2}
                _value={quantity}
                _disabled={getItemFromCurrentCartByItemIdApi.loading}
                _onChange={event => {
                  setQuantity(event.target.value);
                  setQuantityEdited(true);
                }}
                _width={25}
                _wrapperClass="input-1"
              ></Input>
            )}
          </li>

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
                      addItemIntoCurrentCartHandling(
                        user.id,
                        _item.id,
                        quantity
                      )
                    }
                    _iconName="cart-plus"
                    _className="btn-yellow btn-block"
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
                    _className="btn-pink btn-block"
                    _iconName="cart-arrow-down"
                  >
                    Remove from Cart
                  </Button>
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
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ItemDetailContainer;
