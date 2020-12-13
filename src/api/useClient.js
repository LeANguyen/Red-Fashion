import { create } from "apisauce";

const useClient = () => {
  const name = "admin";
  const pass = "supersecret";
  const api = create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Basic " + btoa(name + ":" + pass)
    }
  });
  return { api };
};

export default useClient;
