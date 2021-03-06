
import axios from 'axios';
import store from '../store/index';
import router from '../router/routers'
import base from './base'


const httpUtil = axios.create({
    baseURL: process.env.VUE_APP_API_ROOT,
    timeout: 50000
})

// // 创建axios实例
// axios.defaults.baseURL = base.pro; // 后端api开发完成改成对应的dv
// axios.defaults.timeout = 15000;

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 从wx_info获取token
let token= sessionStorage.getItem('token')
if(token) axios.defaults.headers.common["token"] = token;

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
    config => {
        store.state.loading = true;
        return config
    },
    error => {
        setTimeout(() => {
            store.state.loading = false;
        }, 3000)
        return Promise.reject(error)
    })
/**
 * 响应拦截器
 */
axios.interceptors.response.use(
    data => {
        // 错误处理
        switch (data.data.result) {
            // 401: 未登录状态，跳转登录页
            case 401:
                break;
            // 403 token过期
            // 清除token并跳转登录页
            case 403:
                console.log('登录过期，请重新登录');
                break;
            // 404请求不存在
            case 404:
                this.$router.push({path:'/404'})
                break;
            default:
        }
        // 响应成功关闭loading
        store.state.loading = false;
        return data
    },
    error => {
        setTimeout(() => {
            store.state.loading = false;
        }, 1000)
        return Promise.reject(error)
    })
//
// export default {
//     get(url, params) {
//         return new Promise((resolve, reject) => {
//             axios({
//                 method: 'get',
//                 url: url,
//                 params: params
//
//             }).then(res => {
//                 // console.log(res);
//                 resolve(res.data);
//             }, err => {
//                 reject(err);
//
//             });
//         });
//     },
//     post(url, params) {
//         return new Promise((resolve, reject) => {
//             axios({
//                 method: 'post',
//                 url: url,
//                 data: params
//             }).then(res => {
//                 resolve(res.data)
//             }, err => {
//                 reject(err);
//             })
//         })
//     },
//
// }


export default {
    get(url, params) {
        return  httpUtil.get(url, params);
    },
    post(url, params) {
        return  httpUtil.post(url, params);
    },

}

