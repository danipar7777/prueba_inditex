// Core
import { combineReducers } from 'redux';
// Contants
import { ON_PRODUCT_LIST_SUCCESS, ON_PRODUCT_DETAIL_SUCCESS } from '../constants/products.reducer.constants';

const list = (state = new Date(), { type }) => {
  switch (type) {
    case ON_PRODUCT_LIST_SUCCESS: {
      const newDate = new Date();
      newDate.setHours(newDate.getHours() + 1);
      return newDate;
    }
    default:
      return state;
  }
};

const detail = (state = new Date(), { type }) => {
  switch (type) {
    case ON_PRODUCT_DETAIL_SUCCESS: {
      const newDate = new Date();
      newDate.setHours(newDate.getHours() + 1);
      return newDate;
    }
    default:
      return state;
  }
};

export default combineReducers({
  list,
  detail,
});
