import client from "./client";

export const createCart = client_id =>
  client.api.post(`/cart/client_id/${client_id}`);

export const updateCart = (
  client_id,
  client_name,
  address,
  phone,
  checkout_date
) =>
  client.api.put(`/current_cart/client_id/${client_id}`, {
    client_name,
    address,
    phone,
    checkout_date
  });

export const deleteCart = client_id =>
  client.api.delete(`/cart/client_id/${client_id}`);

export const getCarts = client_id =>
  client.api.get(`/carts/client_id/${client_id}`);
