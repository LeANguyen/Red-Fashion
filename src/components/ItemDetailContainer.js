import React, { useState, useEffect } from "react";
import cartItemApi from "../api/cartItemApi";
import useApi from "../hooks/useApi";
import { useSelector } from "react-redux";
import Container from "./Container";
import AppTextInput from "./common/AppInput";
import AppButton from "./common/AppButton";
// import FormHeader from "./common/FormHeader";

const ItemDetailContainer = ({ _item }) => {
  const currentUser = useSelector(state => state.user.data);
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

  const addItemIntoCurrentCartExtraHandling = async (
    clientId,
    itemId,
    quantity
  ) => {
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
    getItemFromCurrentCartByItemIdExtraHandling(currentUser.id, _item.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
        <h5>{_item.item_name}</h5>
        <img
          src={"http://localhost:3000/uploaded_images/item" + _item.id + ".png"}
          alt="..."
          className="img-thumbnail my-4"
        ></img>
      </div>

      <div className="col-md-8">
        {/* <FormHeader _text="Item Details"></FormHeader> */}

        <div className="form-row">
          <div className="form-group col-md-8">
            <div className="p-4">
              <p className="text-muted">Category:</p>
              <p>{_item.item_name}</p>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="p-4">
              <p className="text-muted">Item ID:</p>
              <p className="text-danger">{_item.id}</p>
            </div>
          </div>

          <div className="form-group col-md-8">
            <div className="p-4">
              <p className="text-muted">Made in:</p>
              <p>{_item.origin}</p>
            </div>
          </div>

          <div className="form-group col-md-4">
            <div className="p-4">
              <p className="text-muted">Price:</p>
              <p className="text-success">{"$" + _item.price}</p>
            </div>
          </div>

          <div class="form-group col-md-8">
            <p className="text-muted">Description:</p>
            <textarea
              cols="30"
              rows="10"
              className="form-control"
              disabled="true"
            >
              {_item.description}
            </textarea>
          </div>

          <div class="form-group col-md-4">
            <td class="align-middle">
              {!itemInCart && (
                <AppTextInput
                  _iconName="shopping-cart"
                  _inputType="number"
                  _borderVariant="info"
                  _maxLength={2}
                  _onChange={event => {
                    setQuantity(event.target.value);
                  }}
                  _placeHolder="In cart"
                ></AppTextInput>
              )}
              {itemInCart && (
                <AppTextInput
                  _iconName="shopping-cart"
                  _inputType="number"
                  _borderVariant="info"
                  _maxLength={2}
                  _onChange={event => {
                    setQuantity(event.target.value);
                    setQuantityEdited(true);
                  }}
                  _placeHolder="In Cart"
                  _value={quantity}
                ></AppTextInput>
              )}
            </td>
            <AppButton
              _variant="warning"
              _block
              _loading={updateItemQuantityFromCurrentCartApi.loading}
              _text="Update"
              _hidden={!quantityEdited}
              _onClick={() =>
                updateItemQuantityFromCurrentExtraHandling(
                  currentUser.id,
                  _item.id,
                  quantity
                )
              }
              _className="my-2"
            ></AppButton>
            {itemInCart && (
              <button
                class="btn btn-danger rounded-pill py-2 btn-block my-2"
                onClick={() =>
                  deleteItemFromCurrentCartExtraHandling(
                    currentUser.id,
                    _item.id
                  )
                }
              >
                Remove from Cart
              </button>
            )}
            {!itemInCart && (
              <button
                class="btn btn-success rounded-pill py-2 btn-block my-2"
                onClick={() =>
                  addItemIntoCurrentCartExtraHandling(currentUser.id, _item.id)
                }
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
