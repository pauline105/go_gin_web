import axios from "axios"
import { useStore } from "../compomemt/store";
const baseURL = 'http://192.168.67.117:8080';
const request = axios.create({
    baseURL: baseURL,
    timeout: 3000,
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        useStore.getState().setLoading(true)
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// 响应拦截器
request.interceptors.response.use(
    (response) => {
        useStore.getState().setLoading(false)
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default request;