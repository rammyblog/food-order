import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    /** In dev, intercepts request and logs it into console for dev */
    const token = localStorage.getItem("food_order_access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
