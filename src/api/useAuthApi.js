import useClient from "./useClient";

const signIn = "/signin";
const signUp = "/signup";
const clientByEmail = "/client/email/Nguyen123@gmail.com";

const useAuthApi = ({}) => {
  const client = useClient();

  const signIn = () => {
    client.post(signIn, { email, pass });
  };
  const signUp = () => {
    client.post(signUp, { name, email, pass });
  };
  const getClientByEmail = () => {
    client.get(clientByEmail);
  };

  return {
    signIn,
    signUp,
    getClientByEmail
  };
};

export default useAuthApi;
