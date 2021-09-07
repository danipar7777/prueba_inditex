// product list
const REDUCER_NAME_LIST = 'products';
const IS_FETCHING_PRODUCT_LIST = `${REDUCER_NAME_LIST}/IS_FETCHING`;
const ON_PRODUCT_LIST_SUCCESS = `${REDUCER_NAME_LIST}/ON_SUCCESS`;
const ON_PRODUCT_LIST_ERROR = `${REDUCER_NAME_LIST}/ON_ERROR`;

// product detail
const REDUCER_NAME_DETAIL = `${REDUCER_NAME_LIST}/detail`;
const IS_FETCHING_PRODUCT_DETAIL = `${REDUCER_NAME_DETAIL}/IS_FETCHING`;
const ON_PRODUCT_DETAIL_SUCCESS = `${REDUCER_NAME_DETAIL}/ON_SUCCESS`;
const ON_PRODUCT_DETAIL_ERROR = `${REDUCER_NAME_DETAIL}/ON_ERROR`;

// product cart
const REDUCER_NAME_CART = `${REDUCER_NAME_LIST}/detail/cart`;
const IS_FETCHING_PRODUCT_CART = `${REDUCER_NAME_CART}/IS_FETCHING`;
const ON_PRODUCT_CART_SUCCESS = `${REDUCER_NAME_CART}/ON_SUCCESS`;
const ON_PRODUCT_CART_ERROR = `${REDUCER_NAME_CART}/ON_ERROR`;

export {
  IS_FETCHING_PRODUCT_LIST,
  ON_PRODUCT_LIST_SUCCESS,
  ON_PRODUCT_LIST_ERROR,
  IS_FETCHING_PRODUCT_DETAIL,
  ON_PRODUCT_DETAIL_SUCCESS,
  ON_PRODUCT_DETAIL_ERROR,
  IS_FETCHING_PRODUCT_CART,
  ON_PRODUCT_CART_SUCCESS,
  ON_PRODUCT_CART_ERROR,
};
