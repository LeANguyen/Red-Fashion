import userConstants from "../constants/userConstants";

export const login = (id, name) => {
  return {
    type: userConstants.USER_LOGIN,
    payload: { id, name }
  };
};

export const logout = () => {
  return {
    type: userConstants.USER_LOGOUT
  };
};
