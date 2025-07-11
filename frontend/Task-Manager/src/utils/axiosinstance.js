
import axios from 'axios';
import { BASE_URL } from './apiPaths';  

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

//request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any request modifications here, like adding auth tokens
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
   // Handle errors globally
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Redirect to login page
        window.location.href = '/login';
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === 'ECONNABORTED') {
      console.error("Request timed out. Please try again.");
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;