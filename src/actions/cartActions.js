import cartConstants from "../constants/cartConstants";

export const increaseTotalPrice = price => {
  return {
    type: cartConstants.CART_INCREASE_TOTAL_PRICE,
    payload: price
  };
};

export const decreaseTotalPrice = price => {
  return {
    type: cartConstants.CART_DECREASE_TOTAL_PRICE,
    payload: price
  };
};

export const setTotalPrice = price => {
  return {
    type: cartConstants.CART_SET_TOTAL_PRICE,
    payload: price
  };
};

export const removeItem = (itemId, index) => {
  return {
    type: cartConstants.CART_REMOVE_ITEM,
    payload: { itemId, index }
  };
};

export const setQuantity = (quantity, id) => {
  return {
    type: cartConstants.CART_SET_QUANTITY,
    payload: { quantity, id }
  };
};

export const setData = list => {
  return {
    type: cartConstants.CART_SET_DATA,
    payload: list
  };
};

export const initEditedList = length => {
  return {
    type: cartConstants.CART_INIT_EDITED_LIST,
    payload: length
  };
};

export const setEditedList = (index, value) => {
  return {
    type: cartConstants.CART_SET_EDITED_LIST,
    payload: { index, value }
  };
};
