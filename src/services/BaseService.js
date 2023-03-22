/** Dependencies */
import axios from 'axios';
import qs from 'qs';

const StatusCode = {
  Unauthorized: 401,
  Forbidden: 403,
  TooManyRequests: 429,
  InternalServerError: 500,
  NotFound: 404,
  BadRequest: 400
};

class Client {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  failureInterceptor = error => {
    if (error.response.status === StatusCode.Unauthorized) {
      Cookies.remove('token');
      redirectLoginWithReturnUrl('/login');
    }
    if (error.response.status === StatusCode.Forbidden) {
      if (error.errorMessage) {
        toast.error(error.errorMessage);
      }
    }
    if (error.response.status === StatusCode.TooManyRequests) {
      if (error.errorMessage) {
        toast.error(error.errorMessage);
      }
    }
    if (error.response.status === StatusCode.NotFound) {
      if (error.errorMessage) {
        toast.error(error.errorMessage);
      }
    }
    if (error.response.status === StatusCode.BadRequest) {
      const { messages } = error.response.data;

      if (messages) {
        messages.forEach(item => {
          toast.error(item || error.message);
        });
      } else {
        toast.error('Beklenmedik bir hata oluştu.');
      }
    }
    if (error.response.status === StatusCode.InternalServerError) {
      
    }

    return Promise.reject(error);
  };

  createAxiosInstance = () => {
    const instance = axios.create({
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        // 'Access-Control-Allow-Credentials': false,
        'X-Requested-With': 'XMLHttpRequest'
      },
      validateStatus: status =>
        status >= 200 && status <= 500 && status !== 401 && status !== 400,
      baseURL: this.baseURL,
      paramsSerializer: params =>
        qs.stringify(params, { arrayFormat: 'repeat' })
    });

    instance.interceptors.request.use(config => {
      const token = Cookies.get('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    instance.interceptors.response.use(
      response => response,
      this.failureInterceptor
    );
    return instance;
  };

  get = (url = '', params = {}) => {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.get(url, { params });
  };

  post(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.post(url, ...params);
  }

  put(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.put(url, ...params);
  }

  delete(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.delete(url, ...params);
  }

  patch(url = '', ...params) {
    const axiosInstance = this.createAxiosInstance();
    return axiosInstance.patch(url, ...params);
  }
}

export default Client;
