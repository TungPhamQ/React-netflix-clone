import axios from "axios";

class HttpService {
  constructor(axios, getCredential) {
    this.axios = axios;
    this.getCredential = getCredential;
  }
  request(config) {
    config = this.getCredential(config);
    return this.axios.request(config);
  }
  get(url, config) {
    config = this.getCredential(config);
    return this.axios.get(url, {
      ...config,
      params: {
        ...config.params,
        api_key: "bd14f6629570545a94620262968828d5",
      },
    });
  }
  post(url, data, config) {
    config = this.getCredential(config);
    return this.axios.post(url, data, config);
  }
  put(url, data, config) {
    config = this.getCredential(config);
    return this.axios.put(url, data, config);
  }
  patch(url, data, config) {
    config = this.getCredential(config);
    return this.axios.patch(url, data, config);
  }
  delete(url, config) {
    config = this.getCredential(config);
    return this.axios.delete(url, config);
  }
}

const defaultConfig = (headers) => ({
  baseURL: "https://api.themoviedb.org/3",
  headers: { ...headers },
  timeout: 15000,
});
const getCredentialWithAccessToken = (config = {}) => {
  let accessToken = localStorage.getItem("accessToken") || "";
  if (!accessToken) return config;
  return {
    ...config,
    headers: {
      ...(config.headers || {}),
      Authorization: "Bearer " + accessToken,
    },
  };
};

const configInterceptors = (axiosClient) => {
  axiosClient.interceptors.response.use(
    (res) => res.data,
    (res) => Promise.reject(res)
  );
  return axiosClient;
};
const axiosClient = configInterceptors(axios.create(defaultConfig({})));

const ApiClientWithToken = new HttpService(
  axiosClient,
  getCredentialWithAccessToken
);

export default ApiClientWithToken;
