import { create } from "apisauce";
import authStorage from "../auth/authStorage";

const useClient = () => {
  const name = "admin";
  const pass = "supersecret";
  const api = create({
    // aaa
    // baseURL: "https://red-fashion-backend.herokuapp.com",
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Basic " + btoa(name + ":" + pass)
    }
  });
  api.addAsyncRequestTransform(async request => {
    const authToken = await authStorage.getToken();
    if (!authToken) return;
    request.headers["token"] = authToken;
  });
  return { api };
};

export default useClient;
