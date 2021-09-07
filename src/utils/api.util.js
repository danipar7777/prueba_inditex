// Core
import axios from 'axios';
import qs from 'qs';
// Configuration
import apiConfig from '../constants/api.constants';

const getAxiosInstance = (config) => {
  const { headers } = config;

  const axiosInstance = axios.create({
    ...config,
    headers,
  });

  axiosInstance.interceptors.request.use(
    (conf) => conf,
    (error) => {
      Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.status !== 200) {
        return Promise.reject(response);
      }
      return response;
    },
    (error) => Promise.reject(error),
  );
  return axiosInstance;
};

const createAxiosFetchInstance = (config) => {
  const instance = getAxiosInstance(config);
  return {
    request: ({ ...reqConfig }) => {
      const source = axios.CancelToken.source();
      return instance.request({
        paramsSerializer(params) {
          return qs.stringify(params, { arrayFormat: 'indices' });
        },
        cancelToken: source.token,
        ...reqConfig,
      }).then(({
        data: body,
        status: statusCode,
        ...restResponse
      }) => ({ statusCode, body, ...restResponse }));
    },
  };
};

export default createAxiosFetchInstance(apiConfig);
