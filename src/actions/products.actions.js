// constants
import {
  IS_FETCHING_PRODUCT_LIST,
  ON_PRODUCT_LIST_SUCCESS,
  ON_PRODUCT_LIST_ERROR,
  IS_FETCHING_PRODUCT_DETAIL,
  ON_PRODUCT_DETAIL_SUCCESS,
  ON_PRODUCT_DETAIL_ERROR,
  IS_FETCHING_PRODUCT_CART,
  ON_PRODUCT_CART_SUCCESS,
  ON_PRODUCT_CART_ERROR,
} from '../constants/products.reducer.constants';

const onFetchingProductList = (isFetching) => ({
  type: IS_FETCHING_PRODUCT_LIST,
  payload: { isFetching },
});

const onProductListSuccess = (data) => ({
  type: ON_PRODUCT_LIST_SUCCESS,
  payload: data,
});

const onProductListError = (error) => ({
  type: ON_PRODUCT_LIST_ERROR,
  payload: { error },
});

const onFetchingProductDetail = (isFetching) => ({
  type: IS_FETCHING_PRODUCT_DETAIL,
  payload: { isFetching },
});

const onProductDetailSuccess = (data) => ({
  type: ON_PRODUCT_DETAIL_SUCCESS,
  payload: data,
});

const onProductDetailError = (error) => ({
  type: ON_PRODUCT_DETAIL_ERROR,
  payload: { error },
});

const onFetchingProductCart = (isFetching) => ({
  type: IS_FETCHING_PRODUCT_CART,
  payload: { isFetching },
});

const onProductCartSuccess = (data) => ({
  type: ON_PRODUCT_CART_SUCCESS,
  payload: data,
});

const onProductCartError = (error) => ({
  type: ON_PRODUCT_CART_ERROR,
  payload: { error },
});

export {
  onFetchingProductList,
  onProductListSuccess,
  onProductListError,
  onFetchingProductDetail,
  onProductDetailSuccess,
  onProductDetailError,
  onFetchingProductCart,
  onProductCartSuccess,
  onProductCartError,
};
