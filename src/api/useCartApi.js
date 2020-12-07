import useClient from "./useClient";

const cart = "/cart/client_id/1";
const allCart = "/carts/client_id/1";

const useCartApi = () => {
  const client = useClient();
  const createCart = () => client.api.get(cart);
  const updateCart = () => client.api.put(cart);
  const deleteCart = () => client.api.delete(cart);
  const getAllCart = () => client.api.get(allCart);

  return { createCart, updateCart, deleteCart, getAllCart };
};

export default useCartApi;
