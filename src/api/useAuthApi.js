import useClient from "./useClient";

// const clientByEmail = "/client/email/Nguyen123@gmail.com";

const useAuthApi = () => {
  const client = useClient();

  const signIn = (email, pass) => client.api.post(`/signin`, { email, pass });

  const signUp = (name, email, pass) =>
    client.api.post("/signup", { name, email, pass });

  const getClientByEmail = email => client.api.get(`/client/email/${email}`);

  return {
    signIn,
    signUp,
    getClientByEmail
  };
};

export default useAuthApi;
