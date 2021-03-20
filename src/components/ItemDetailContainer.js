import React, { useState, useEffect } from "react";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import { useSelector } from "react-redux";
import Container from "./Container";
import FormHeader from "./form/FormHeader";
import FormUnderline from "./form/FormUnderline";
import FormText from "./form/FormText";
import FormTextInput from "./form/FormTextInput";

const ItemDetailContainer = ({ _item }) => {
  const currentUser = useSelector(state => state.user.data);
  const cartItemApi = useCartItemApi();

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
    <Container>
      <div className="row">
        <div className="col-md-4">
          <FormHeader _text={_item.item_name}></FormHeader>
          <img
            src={
              "http://localhost:3000/uploaded_images/item" + _item.id + ".png"
            }
            alt="..."
            className="img-thumbnail my-4"
          ></img>
        </div>

        <div className="col-md-8">
          <FormHeader _text="Item Details"></FormHeader>

          <div className="form-row">
            <div className="form-group col-md-8">
              <div className="p-4">
                <FormUnderline>
                  <FormText _text="Category:" _variant="muted"></FormText>
                  <FormText _text={_item.item_name}></FormText>
                </FormUnderline>
              </div>
            </div>

            <div className="form-group col-md-4">
              <div className="p-4">
                <FormUnderline>
                  <FormText _text="Item ID:" _variant="muted"></FormText>
                  <FormText _text={_item.id}></FormText>
                </FormUnderline>
              </div>
            </div>

            <div className="form-group col-md-8">
              <div className="p-4">
                <FormUnderline>
                  <FormText _text="Made in:" _variant="muted"></FormText>
                  <FormText _text={_item.origin}></FormText>
                </FormUnderline>
              </div>
            </div>

            <div className="form-group col-md-4">
              <div className="p-4">
                <FormUnderline>
                  <FormText _text="Price:" _variant="muted"></FormText>
                  <FormText _text={"$" + _item.price}></FormText>
                </FormUnderline>
              </div>
            </div>

            <div class="form-group col-md-8">
              <FormText _text="Description:" _variant="muted"></FormText>
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
                  <FormTextInput
                    _iconName="shopping-cart"
                    _inputType="number"
                    _onChange={event => {
                      setQuantity(event.target.value);
                    }}
                    _placeHolder="In cart"
                  ></FormTextInput>
                )}
                {itemInCart && (
                  <FormTextInput
                    _iconName="shopping-cart"
                    _inputType="number"
                    _onChange={event => {
                      setQuantity(event.target.value);
                      setQuantityEdited(true);
                    }}
                    _placeHolder="In Cart"
                    _value={quantity}
                  ></FormTextInput>
                )}
              </td>
              <button
                class="btn btn-warning rounded-pill py-2 btn-block my-2"
                hidden={!quantityEdited}
                onClick={() =>
                  updateItemQuantityFromCurrentExtraHandling(
                    currentUser.id,
                    _item.id,
                    quantity
                  )
                }
              >
                Update
              </button>
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
                    addItemIntoCurrentCartExtraHandling(
                      currentUser.id,
                      _item.id
                    )
                  }
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ItemDetailContainer;
