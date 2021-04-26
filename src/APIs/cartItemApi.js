import client from "./client";

export const getItemFromCurrentCartByItemId = (client_id, item_id) =>
  client.api.get(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`
  );

export const getItemsFromCurrentCart = client_id =>
  client.api.get(`/cart_items/current_cart/client_id/${client_id}`);

export const getItemsByCartId = cart_id =>
  client.api.get(`/cart_items/cart_id/${cart_id}`);

export const addItemIntoCurrentCart = (client_id, item_id, quantity) =>
  client.api.post(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`,
    { quantity }
  );

export const deleteItemFromCurrentCart = (client_id, item_id) =>
  client.api.delete(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`
  );

export const updateItemQuantityFromCurrentCart = (
  client_id,
  item_id,
  quantity
) =>
  client.api.put(
    `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`,
    { quantity }
  );
