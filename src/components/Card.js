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

  const [quantity, setQuantity] = useState();

  useEffect(() => {
    getItemFromCurrentCartByItemIdApi.request(1, _item.id);
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
        {getItemFromCurrentCartByItemIdApi.data.length === 0 && (
          <input
            type="number"
            // id="quantity_input${data[i].id}"
            step={1}
            max={9999}
            min={1}
            value={quantity}
            onChange={event => {
              setQuantity(event.target.value);
              //   updateItemQuantityFromCurrentCartApi.request(
              //     1,
              //     _item.id,
              //     event.target.value
              //   );
            }}
            // oninput="this.value = Math.abs(this.value)"
          ></input>
        )}
        {getItemFromCurrentCartByItemIdApi.data.length !== 0 && (
          <input
            type="number"
            // id="quantity_input${data[i].id}"
            step={1}
            max={9999}
            min={1}
            value={getItemFromCurrentCartByItemIdApi.data[0].quantity}
            onChange={event => {
              setQuantity(event.target.value);
              //   updateItemQuantityFromCurrentCartApi.request(
              //     1,
              //     _item.id,
              //     event.target.value
              //   );
            }}
            // oninput="this.value = Math.abs(this.value)"
          ></input>
        )}

        <br></br>
        <div className="mt-4">
          <button
            className="btn btn-info rounded-pill py-2 btn-block"
            type="submit"
            // id="detail_btn${data[i].id}"
            // onclick="toItemDetail(${data[i].id})"
          >
            Item Detail
          </button>
          {getItemFromCurrentCartByItemIdApi.data.length === 0 && (
            <button
              className="btn btn-success rounded-pill py-2 btn-block"
              type="submit"
              // id="add_to_cart_btn${data[i].id}"
              onClick={() => addItemIntoCurrentCartApi.request(1, _item.id, 12)}
            >
              Add to Cart
            </button>
          )}
          {getItemFromCurrentCartByItemIdApi.data.length !== 0 && (
            <button
              className="btn btn-danger rounded-pill py-2 btn-block"
              type="submit"
              // id="add_to_cart_btn${data[i].id}"
              // onclick="addToCart(${data[i].id})"
              onClick={() => deleteItemFromCurrentCartApi.request(1, _item.id)}
            >
              Remove from Cart
            </button>
          )}
          {/* <button
            className="btn btn-success rounded-pill py-2 btn-block"
            type="submit"
            // id="add_to_cart_btn${data[i].id}"
            // onclick="addToCart(${data[i].id})"
          >
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
