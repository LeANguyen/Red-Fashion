import useClient from "./useClient";

const itemFromCurrentCartByItemId =
  "/cart_item/current_cart/client_id/1/item_id/2";
const allItemFromCurrentCart = "/cart_items/current_cart/client_id/1";
const allItemByCartId = "/cart_items/cart_id/1";

const useCartItemApi = () => {
  const client = useClient();

  const getItemFromCurrentCartByItemId = (client_id, item_id) =>
    // client.api.get(itemFromCurrentCartByItemId);
    client.api.get(
      `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`
    );

  const getAllItemFromCurrentCart = client_id =>
    // client.api.get(allItemFromCurrentCart);
    client.api.get(`/cart_items/current_cart/client_id/${client_id}`);

  const getAllItemByCartId = cart_id =>
    // client.api.get(allItemByCartId);
    client.api.get(`/cart_items/cart_id/${cart_id}`);

  const addItemIntoCurrentCart = (client_id, item_id, quantity) =>
    client.api.post(
      `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`,
      { quantity }
    );

  // const login = (email, password) => client.post("/auth", { email, password });
  const deleteItemFromCurrentCart = (client_id, item_id) =>
    client.api.delete(
      `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`
    );

  const updateItemQuantityFromCurrentCart = (client_id, item_id, quantity) =>
    client.api.put(
      `/cart_item/current_cart/client_id/${client_id}/item_id/${item_id}`,
      { quantity }
    );

  return {
    getItemFromCurrentCartByItemId,
    getAllItemFromCurrentCart,
    getAllItemByCartId,
    addItemIntoCurrentCart,
    deleteItemFromCurrentCart,
    updateItemQuantityFromCurrentCart
  };
};

export default useCartItemApi;
