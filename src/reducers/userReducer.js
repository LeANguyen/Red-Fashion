import userConstants from "../constants/userConstants";

const initialState = {
  data: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN: {
      return {
        ...state,
        data: action.payload.data
      };
    }
    case userConstants.USER_LOGOUT: {
      return {
        ...state,
        data: null
      };
    }
    default:
      return state;
  }
};

export default userReducer;
