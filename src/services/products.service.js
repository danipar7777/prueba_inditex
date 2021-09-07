// resolvers
import { requestProductList, requestProductDetail, requestProductCart } from '../resolvers/products.resolver';
// actions
import {
  onFetchingProductList,
  onProductListSuccess,
  onProductListError,
  onFetchingProductDetail,
  onProductDetailSuccess,
  onProductDetailError,
  onFetchingProductCart,
  onProductCartSuccess,
  onProductCartError,
} from '../actions/products.actions';

const getProductList = () => async (dispatch) => {
  dispatch(onFetchingProductList(true));
  dispatch(onProductListError(false));
  try {
    const { body } = await requestProductList();
    dispatch(onProductListSuccess(body));
  } catch (error) {
    dispatch(onProductListError(true));
  } finally {
    dispatch(onFetchingProductList(false));
  }
};

const getProductDetail = (productId) => async (dispatch) => {
  dispatch(onFetchingProductDetail(true));
  dispatch(onProductDetailError(false));
  try {
    const { body } = await requestProductDetail(productId);
    dispatch(onProductDetailSuccess(body));
  } catch (error) {
    dispatch(onProductDetailError(true));
  } finally {
    dispatch(onFetchingProductDetail(false));
  }
};

const addProductCart = (data) => async (dispatch) => {
  dispatch(onFetchingProductCart(true));
  dispatch(onProductCartError(false));
  try {
    const { body } = await requestProductCart(data);
    dispatch(onProductCartSuccess(body));
  } catch (error) {
    dispatch(onProductCartError(true));
  } finally {
    dispatch(onFetchingProductCart(false));
  }
};

export {
  getProductList,
  getProductDetail,
  addProductCart,
};
