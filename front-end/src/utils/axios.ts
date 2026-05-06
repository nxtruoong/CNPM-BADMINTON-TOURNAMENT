import axios from 'axios';

// Tạo một instance của axios với các cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // URL của Back-end
  timeout: 10000, // Thời gian chờ tối đa (10 giây)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Bạn có thể thêm các Interceptor ở đây nếu cần (ví dụ: đính kèm token vào header)
/*
axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);
*/

export default axiosInstance;
