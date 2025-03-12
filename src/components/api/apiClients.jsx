import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACK_END;


const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export default apiClient;