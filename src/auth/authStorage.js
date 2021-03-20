import jwtDecode from "jwt-decode";
const key = "authToken";

const storeToken = async authToken => {
  try {
    await localStorage.setItem(key, authToken);
  } catch (error) {
    console.log("Store Token Error", error);
  }
};

const getToken = async () => {
  try {
    const authToken = await localStorage.getItem(key);
    console.log(authToken);
    return authToken;
  } catch (error) {
    console.log("Get Token Error", error);
  }
};

const getUser = async () => {
  const authToken = await getToken();
  if (authToken) return jwtDecode(authToken);
  return null;
};

const removeToken = async () => {
  try {
    await localStorage.removeItem(key);
  } catch (error) {
    console.log("Remove Token Error", error);
  }
};

export default {
  storeToken,
  getToken,
  getUser,
  removeToken
};
