import client from "./client";

const createCart = client_id => client.api.post(`/cart/client_id/${client_id}`);

const updateCart = (client_id, client_name, address, phone, checkout_date) =>
  client.api.put(`/current_cart/client_id/${client_id}`, {
    client_name,
    address,
    phone,
    checkout_date
  });

const deleteCart = client_id =>
  client.api.delete(`/cart/client_id/${client_id}`);

const getCarts = client_id => client.api.get(`/carts/client_id/${client_id}`);

export default {
  createCart,
  updateCart,
  deleteCart,
  getCarts
};
