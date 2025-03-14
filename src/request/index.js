import axios from 'axios'


// 创建 axios 实例
const request = axios.create({
  baseURL: 'http://127.0.0.1:8080', // API 基础路径
  timeout: 3000, // 请求超时时间（毫秒）
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 获取本地存储的 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // 在请求头中添加 token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // 请求错误
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 直接返回 data 数据
    if (response.status === 200) {
      return response.data;
    }
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 400:
          console.error("请求参数错误", data);
          break;
        case 401:
          console.error("未授权，跳转登录");
          localStorage.removeItem("token"); // 清除 token
          window.location.href = "/login"; // 跳转到登录页面
          break;
        case 403:
          console.error("无权限访问", data);
          break;
        case 404:
          console.error("接口不存在", data);
          break;
        case 500:
          console.error("服务器错误", data);
          break;
        default:
          console.error("未知错误", data);
      }
    } else if (error.message.includes("timeout")) {
      console.error("请求超时，请稍后重试");
    } else if (error.message.includes("Network Error")) {
      console.error("网络错误，请检查您的网络连接");
    }
    return Promise.reject(error);
  }
);



export default request;
