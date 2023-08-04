import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from "axios";


const app = createApp(App)
app.use(Antd).use(store).use(router).mount('#app');

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

console.log('环境：', process.env.NODE_ENV);
console.log('服务端：', process.env.VUE_APP_SERVER);


/**
 * axios拦截器
 */
axios.interceptors.request.use(request =>{
    console.log('请求参数：', request);
    return request;
},error => {
    return Promise.reject(error);
})
axios.interceptors.response.use(response=>{
    console.log('返回参数', response);
    return response;
},error => {
    return Promise.reject(error);
})