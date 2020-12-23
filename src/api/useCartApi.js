import useClient from "./useClient";

const cart = "/cart/client_id/1";
const allCart = "/carts/client_id/1";

const useCartApi = () => {
  const client = useClient();
  const createCart = client_id =>
    client.api.post(`/cart/client_id/${client_id}`);
  const updateCart = (client_id, client_name, address, phone, checkout_date) =>
    client.api.put(`/current_cart/client_id/${client_id}`, {
      client_name,
      address,
      phone,
      checkout_date
    });
  const deleteCart = client_id =>
    client.api.delete(`/cart/client_id/${client_id}`);
  const getAllCart = client_id =>
    client.api.get(`/carts/client_id/${client_id}`);

  return { createCart, updateCart, deleteCart, getAllCart };
};

export default useCartApi;
