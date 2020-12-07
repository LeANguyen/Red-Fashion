import { create } from "apisauce";

const useClient = () => {
  const name = "admin";
  const pass = "supersecret";
  console.log("Basic " + btoa(name + ":" + pass));
  const api = create({
    // 192.168.5.102 - Home
    // 10.247.201.219 - School
    baseURL: "http://192.168.5.103:3000",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Basic " + btoa(name + ":" + pass)
      //   Authorization: {
      //     username: "admin",
      //     password: "supersecret"
      //   }
    }
  });
  //   api.setHeader("Authorization", btoa(name + ":" + pass));
  return { api };
};

export default useClient;
