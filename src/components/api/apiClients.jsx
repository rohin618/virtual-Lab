import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACK_END;


const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem('Auth_token');

      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }

      // Let Axios handle Content-Type automatically
      if (!(config.data instanceof FormData)) {
          config.headers['Content-Type'] = 'application/json';
      }

      return config;
  },
  (error) => Promise.reject(error)
);
export default apiClient;