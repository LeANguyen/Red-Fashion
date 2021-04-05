import client from "./client";

const getItemFromCurrentCartByItemId = (client_id, item_id) =>
  client.api.get(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`
  );

const getItemsFromCurrentCart = client_id =>
  client.api.get(`/cart_items/current_cart/client_id/${client_id}`);

const getItemsByCartId = cart_id =>
  client.api.get(`/cart_items/cart_id/${cart_id}`);

const addItemIntoCurrentCart = (client_id, item_id, quantity) =>
  client.api.post(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`,
    { quantity }
  );

const deleteItemFromCurrentCart = (client_id, item_id) =>
  client.api.delete(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`
  );

const updateItemQuantityFromCurrentCart = (client_id, item_id, quantity) =>
  client.api.put(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`,
    { quantity }
  );

export default {
  getItemFromCurrentCartByItemId,
  getItemsFromCurrentCart,
  getItemsByCartId,
  addItemIntoCurrentCart,
  deleteItemFromCurrentCart,
  updateItemQuantityFromCurrentCart
};
