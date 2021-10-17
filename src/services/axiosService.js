import axios from "axios";
import { BASE_API_URL } from "../constants";

class _AxiosService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${BASE_API_URL}/api`,
      headers: this._getHeaders(),
    });
    this.instance.interceptors.request.use(
      this._interceptBeforeRequest.bind(this),
      this._interceptRequestError.bind(this)
    );
    this.instance.interceptors.response.use(
      this._interceptResponseData.bind(this),
      this._interceptResponseError.bind(this)
    );
  }

  _getHeaders = () => ({
    "Content-Type": "application/json",
  });

  _interceptBeforeRequest = async (config) => {
    if (!config.url) {
      return Promise.reject(new Error("[AxiosService URL must not be blank!]"));
    }

    const accessToken = localStorage.getItem("token");

    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";

    return config;
  };

  _interceptRequestError = (error) => Promise.reject(error);

  _interceptResponseData = (response) => response;

  _interceptResponseError = (error) => Promise.reject(error);

  get(url = "/", params = {}, config = {}) {
    return this.instance.get(url, {
      params,
      ...config,
    });
  }

  post(url = "/", data, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url = "/", data, config = {}) {
    return this.instance.put(url, data, config);
  }

  patch(url = "/", data, config = {}) {
    return this.instance.patch(url, data, config);
  }

  delete(url = "/", params = {}, config = {}) {
    return this.instance.delete(
      url,
      {
        params,
      },
      config
    );
  }
}

export const AxiosService = new _AxiosService();
