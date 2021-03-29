import React, { useEffect, useState } from "react";
import useCartItemApi from "../api/useCartItemApi";
import useApi from "../hooks/useApi";
import { Link, useHistory } from "react-router-dom";
import FormUnderline from "./form/FormUnderline";
import FormHeader from "./form/FormHeader";
import FormButton from "./form/FormButton";
import FormLoader from "./form/FormLoader";
import FormText from "./form/FormText";
import FormButtonLoader from "./form/FormButtonLoader";
import authStorage from "../auth/authStorage";
import { useSelector } from "react-redux";

const Card = ({ _item, _key }) => {
  const currentUser = useSelector(state => state.user.data);

  const history = useHistory();
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
    <div className="card text-left" key={_key}>
      <img
        className="card-img-top"
        src={"http://localhost:3000/uploaded_images/item" + _item.id + ".png"}
        alt="Nothing here"
      ></img>
      <FormHeader _text={_item.item_name}></FormHeader>
      <div className="card-body">
        <FormUnderline>
          <strong className="text-muted">Category:</strong>
          <strong>{_item.category}</strong>
        </FormUnderline>
        <FormUnderline>
          <strong className="text-muted">Origin:</strong>
          <strong>{_item.origin}</strong>
        </FormUnderline>
        <FormUnderline>
          <strong className="text-muted">Price:</strong>
          <strong>{"$" + _item.price}</strong>
        </FormUnderline>
        <FormUnderline>
          <strong className="text-muted">In Cart:</strong>
          {!itemInCart && (
            <input
              type="number"
              step={1}
              max={9999}
              min={1}
              value={quantity}
              disabled={getItemFromCurrentCartByItemIdApi.isLoading}
              onChange={event => {
                setQuantity(event.target.value);
              }}
            ></input>
          )}
          {itemInCart && (
            <input
              type="number"
              step={1}
              max={9999}
              min={1}
              value={quantity}
              disabled={getItemFromCurrentCartByItemIdApi.isLoading}
              onChange={event => {
                setQuantity(event.target.value);
                setQuantityEdited(true);
              }}
            ></input>
          )}
        </FormUnderline>

        <div className="mt-4">
          <FormButton
            _text="Item Detail"
            _variant="info"
            _onClick={() => history.push("/item_detail/" + _item.id)}
          ></FormButton>
          {getItemFromCurrentCartByItemIdApi.isLoading && (
            <FormButton
              _variant="dark"
              _loading={getItemFromCurrentCartByItemIdApi.isLoading}
            ></FormButton>
          )}
          {getItemFromCurrentCartByItemIdApi.success && (
            <>
              {currentUser !== null && !itemInCart && (
                <FormButton
                  _text="Add to Cart"
                  _variant="success"
                  _loading={addItemIntoCurrentCartApi.isLoading}
                  _onClick={() =>
                    addItemIntoCurrentCartExtraHandling(
                      currentUser.id,
                      _item.id,
                      quantity
                    )
                  }
                ></FormButton>
              )}
              <FormButton
                _text="Update"
                _hidden={!itemInCart || !quantityEdited}
                _variant="warning"
                _loading={updateItemQuantityFromCurrentCartApi.isLoading}
                _onClick={() =>
                  updateItemQuantityFromCurrentExtraHandling(
                    currentUser.id,
                    _item.id,
                    quantity
                  )
                }
              ></FormButton>
              {currentUser !== null && itemInCart && (
                <FormButton
                  _text="Remove from Cart"
                  _variant="danger"
                  _loading={deleteItemFromCurrentCartApi.isLoading}
                  _onClick={() =>
                    deleteItemFromCurrentCartExtraHandling(
                      currentUser.id,
                      _item.id
                    )
                  }
                ></FormButton>
              )}
            </>
          )}
        </div>
        {currentUser === null && (
          <>
            <FormText
              _variant="muted"
              _text="You have not login to save a cart!"
            ></FormText>
            <FormButton
              _text="Register"
              _variant="success"
              _onClick={() => history.push("/sign")}
            ></FormButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
