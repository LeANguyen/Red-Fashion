import userConstants from "../constants/userConstants";

const initialState = {
  id: "",
  name: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN: {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name
      };
    }
    case userConstants.USER_LOGOUT: {
      return {
        ...state,
        id: "",
        name: ""
      };
    }
    default:
      return state;
  }
};

export default userReducer;
