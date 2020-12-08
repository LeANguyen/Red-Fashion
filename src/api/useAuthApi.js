import useClient from "./useClient";

// const clientByEmail = "/client/email/Nguyen123@gmail.com";

const useAuthApi = ({}) => {
  const client = useClient();

  const signIn = () => {
    client.post("/signin", { email, pass });
  };
  const signUp = () => {
    client.post("/signup", { name, email, pass });
  };
  const getClientByEmail = email => {
    client.get(`/client/email/${email}`);
  };

  return {
    signIn,
    signUp,
    getClientByEmail
  };
};

export default useAuthApi;
