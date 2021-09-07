// Core
import { combineReducers } from 'redux';
// Contants
import { ON_PRODUCT_LIST_SUCCESS, ON_PRODUCT_DETAIL_SUCCESS, ON_PRODUCT_CART_SUCCESS } from '../constants/products.reducer.constants';

const list = (state = { data: [], expiresAt: new Date() }, { type, payload }) => {
  switch (type) {
    case ON_PRODUCT_LIST_SUCCESS: {
      const newDate = new Date();
      newDate.setHours(newDate.getHours() + 1);
      return {
        data: payload,
        expiresAt: newDate,
      };
    }
    default:
      return state;
  }
};

const detail = (state = {}, { type, payload }) => {
  switch (type) {
    case ON_PRODUCT_DETAIL_SUCCESS: {
      const newDate = new Date();
      newDate.setHours(newDate.getHours() + 1);
      return {
        ...state,
        [payload.id]: {
          ...payload,
          expiresAt: newDate,
        },
      };
    }
    default:
      return state;
  }
};

const cart = (state = 0, { type, payload }) => {
  switch (type) {
    case ON_PRODUCT_CART_SUCCESS:
      return state + payload.count;
    default:
      return state;
  }
};

export default combineReducers({
  list,
  detail,
  cart,
});
