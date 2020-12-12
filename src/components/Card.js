import React, { useEffect, useState } from "react";
import useCartItemApi from "../api/useCartItemApi";
import shirt1 from "../assets/shirt1.jpeg";
import useApi from "../hooks/useApi";

const Card = ({ _item, _key }) => {
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

  const [quantity, setQuantity] = useState(100);
  const [itemInCart, setItemInCart] = useState();

  useEffect(async () => {
    const response = await getItemFromCurrentCartByItemIdApi.request(
      1,
      _item.id
    );
    if (response.data[0] != undefined) {
      setItemInCart(true);
      setQuantity(response.data[0].quantity);
    } else {
      setItemInCart(false);
      setQuantity(1);
    }
  }, []);

  return (
    <div className="card" key={_key}>
      <img className="card-img-top" src={shirt1} alt="Nothing here"></img>
      <div className="card-body">
        <h4 className="card-title">{_item.item_name}</h4>
        <strong className="text-muted">- Origin: </strong>
        <label className="card-text">${_item.origin}</label>
        <br></br>
        <strong className="text-muted">- Price: </strong>
        <label className="card-text">${_item.price}</label>
        <br></br>
        <strong className="text-muted">- Quantity: </strong>
        {!itemInCart && (
          <input
            type="number"
            step={1}
            max={9999}
            min={1}
            value={quantity}
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
            onChange={event => {
              setQuantity(event.target.value);
              updateItemQuantityFromCurrentCartApi.request(
                1,
                _item.id,
                event.target.value
              );
            }}
          ></input>
        )}
        <div className="mt-4">
          <button
            className="btn btn-info rounded-pill py-2 btn-block"
            type="submit"
          >
            Item Detail
          </button>
          {!itemInCart && (
            <button
              className="btn btn-success rounded-pill py-2 btn-block"
              type="submit"
              onClick={() => {
                addItemIntoCurrentCartApi.request(1, _item.id, quantity);
                setItemInCart(true);
              }}
            >
              Add to Cart
            </button>
          )}
          {itemInCart && (
            <button
              className="btn btn-danger rounded-pill py-2 btn-block"
              type="submit"
              onClick={() => {
                deleteItemFromCurrentCartApi.request(1, _item.id);
                setItemInCart(false);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;