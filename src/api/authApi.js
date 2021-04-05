import client from "./client";

const login = (email, password) =>
  client.api.post(`/login`, { email, password });

const register = (name, email, password) =>
  client.api.post("/register", { name, email, password });

const getUserByEmail = email => client.api.get(`/client/email/${email}`);

export default {
  login,
  register,
  getUserByEmail
};
