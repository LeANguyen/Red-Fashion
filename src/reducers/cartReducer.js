import cartConstants from "../constants/cartConstants";

const initialState = {
  data: [],
  totalPrice: 0,
  editedList: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.CART_INCREASE_TOTAL_PRICE: {
      const newTotalPrice = state.totalPrice + action.payload;
      return {
        ...state,
        totalPrice: newTotalPrice
      };
    }

    case cartConstants.CART_DECREASE_TOTAL_PRICE: {
      const newTotalPrice = state.totalPrice - action.payload;
      return {
        ...state,
        totalPrice: newTotalPrice
      };
    }

    case cartConstants.CART_SET_TOTAL_PRICE: {
      const newTotalPrice = action.payload;
      return {
        ...state,
        totalPrice: newTotalPrice
      };
    }

    case cartConstants.CART_REMOVE_ITEM: {
      return {
        ...state,
        data: state.data.filter(item => item.item_id !== action.payload.itemId),
        editedList: state.editedList.filter(
          (item, i) => i !== action.payload.index
        )
      };
    }

    case cartConstants.CART_SET_QUANTITY: {
      let newData = [...state.data];
      newData[action.payload.id].quantity = action.payload.quantity;
      return {
        ...state,
        data: newData
      };
    }

    case cartConstants.CART_INIT_EDITED_LIST: {
      let newEditedList = [];
      for (let i = 0; i < action.payload; i++) {
        newEditedList.push(false);
      }
      return {
        ...state,
        editedList: newEditedList
      };
    }

    case cartConstants.CART_SET_EDITED_LIST: {
      let newEditedList = [...state.editedList];
      newEditedList[action.payload.index] = action.payload.value;
      return {
        ...state,
        editedList: newEditedList
      };
    }

    case cartConstants.CART_SET_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
