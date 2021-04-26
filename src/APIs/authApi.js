import client from "./client";

export const login = (email, password) =>
  client.api.post(`/login`, { email, password });

export const register = (name, email, password) =>
  client.api.post("/register", { name, email, password });

export const getUserByEmail = email => client.api.get(`/client/email/${email}`);
