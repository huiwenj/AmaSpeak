import axios from "axios";
// import {Simulate} from "react-dom/test-utils";
// import error = Simulate.error;

const service = axios.create({
    baseURL: "http://127.0.0.1:3000",
    timeout: 5000,
})

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

export default service;