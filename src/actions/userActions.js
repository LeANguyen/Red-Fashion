import userConstants from "../constants/userConstants";

export const loginAction = data => {
  return {
    type: userConstants.USER_LOGIN,
    payload: { data }
  };
};

export const logoutAction = () => {
  return {
    type: userConstants.USER_LOGOUT
  };
};
