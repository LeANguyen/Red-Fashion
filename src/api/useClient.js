import { create } from "apisauce";

const useClient = () => {
  const name = "admin";
  const pass = "supersecret";
  const api = create({
    // 192.168.5.102 - Home
    // 10.247.201.219 - School
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Basic " + btoa(name + ":" + pass)
      //   "Access-Control-Allow-Origin": "*"
    }
  });
  return { api };
};

export default useClient;
