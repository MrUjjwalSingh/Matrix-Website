import axios from "axios";

const adminApi = axios.create({
  baseURL: "/api/admin",
});

adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_jwt");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

adminApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("admin_jwt");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default adminApi;
