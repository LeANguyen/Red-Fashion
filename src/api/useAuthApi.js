import useClient from "./useClient";

// const clientByEmail = "/client/email/Nguyen123@gmail.com";

const useAuthApi = () => {
  const client = useClient();

  const signIn = (email, pass) => client.api.post(`/login`, { email, pass });

  const signUp = (name, email, pass) =>
    client.api.post("/register", { name, email, pass });

  const getClientByEmail = email => client.api.get(`/client/email/${email}`);

  return {
    signIn,
    signUp,
    getClientByEmail
  };
};

export default useAuthApi;
