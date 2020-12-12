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
  const [cartButtonClass, setCartButtonClass] = useState();
  const [cartButtonOnClick, setCartButtonOnClick] = useState();
  const [cartButtonText, setCartButtonText] = useState();

  const addToCart = () => {
    console.log("ADD");
    console.log(quantity);
    addItemIntoCurrentCartApi.request(1, _item.id, quantity);
    setCartButtonText("Remove from Cart");
    setCartButtonClass("btn btn-danger rounded-pill py-2 btn-block");
    setCartButtonOnClick(() => () => removeFromCart());
  };

  const removeFromCart = () => {
    console.log("REMOVE");
    deleteItemFromCurrentCartApi.request(1, _item.id);
    setCartButtonText("Add to Cart");
    setCartButtonClass("btn btn-success rounded-pill py-2 btn-block");
    setCartButtonOnClick(() => () => {
      addToCart();
    });
  };

  useEffect(async () => {
    const response = await getItemFromCurrentCartByItemIdApi.request(
      1,
      _item.id
    );
    if (response.data[0] != undefined) {
      console.log(response.data[0].quantity);
      setQuantity(response.data[0].quantity);
      setCartButtonClass("btn btn-danger rounded-pill py-2 btn-block");
      setCartButtonOnClick(() => () => removeFromCart());
      setCartButtonText("Remove from Cart");
    } else {
      setQuantity(1);
      setCartButtonClass("btn btn-success rounded-pill py-2 btn-block");
      setCartButtonOnClick(() => () => {
        addToCart();
      });
      setCartButtonText("Add to Cart");
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
        {getItemFromCurrentCartByItemIdApi.data.length === 0 && (
          <input
            type="number"
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
            // oninput="this.value = Math.abs(this.value)"
          ></input>
        )}
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
              className={cartButtonClass}
              type="submit"
              // id="add_to_cart_btn${data[i].id}"
              onClick={() =>
                // addItemIntoCurrentCartApi.request(1, _item.id, quantity)
                {
                  cartButtonOnClick();
                }
              }
            >
              {/* Add to Cart */}
              {cartButtonText}
            </button>
          )}
          {getItemFromCurrentCartByItemIdApi.data.length !== 0 && (
            <button
              className={cartButtonClass}
              type="submit"
              // id="add_to_cart_btn${data[i].id}"
              // onclick="addToCart(${data[i].id})"
              onClick={() =>
                // deleteItemFromCurrentCartApi.request(1, _item.id)
                {
                  cartButtonOnClick();
                }
              }
            >
              {/* Remove from Cart */}
              {cartButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
