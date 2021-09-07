// utils
import apiService from '../utils/api.util';
// constants
import { API_ENDPOINT } from '../constants/api.constants';

const requestProductList = () => apiService.request({
  method: 'GET',
  url: `${API_ENDPOINT}/api/product`,
});

const requestProductDetail = (productId) => apiService.request({
  method: 'GET',
  url: `${API_ENDPOINT}/api/product/${productId}`,
});

const requestProductCart = (data) => apiService.request({
  method: 'POST',
  url: `${API_ENDPOINT}/api/cart`,
  data,
});

export {
  requestProductList,
  requestProductDetail,
  requestProductCart,
};
