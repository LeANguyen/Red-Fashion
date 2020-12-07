import useClient from "./useClient";

const itemFromCurrentCartByItemId =
  "/cart_item/current_cart/client_id/1/item_id/2";
const allItemFromCurrentCart = "/cart_items/current_cart/client_id/1";
const allItemByCartId = "/cart_items/cart_id/1";

const useCartItemApi = () => {
  const client = useClient();

  const getItemFromCurrentCartByItemId = () =>
    client.api.get(itemFromCurrentCartByItemId);

  const getAllItemFromCurrentCart = () =>
    client.api.get(allItemFromCurrentCart);

  const getAllItemByCartId = () => client.api.get(allItemByCartId);

  const addItemIntoCurrentCart = () =>
    client.api.post(itemFromCurrentCartByItemId);

  const deleteItemFromCurrentCart = () =>
    client.api.delete(itemFromCurrentCartByItemId);

  const updateItemQuantityFromCurrentCart = () =>
    client.api.put(itemFromCurrentCartByItemId);

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
