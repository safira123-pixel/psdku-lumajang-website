import axios from "axios";
import store from "@/store";
import { Modal } from "antd";
import { getToken } from "@/utils/auth";
import { logout } from "@/store/actions";

//Create an axios example
const service = axios. create({
   baseURL: process.env.REACT_APP_BASE_API, // base_url of api
   timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
   (config) => {
     // Do something before request is sent
     if (store. getState(). user. token) {
       // Let each request carry token-- ['Authorization'] is a custom key, please modify it according to the actual situation
       config.headers.Authorization = getToken();
     }
     return config;
   },
   (error) => {
     // Do something with request error
     console.log(error); // for debug
     Promise. reject(error);
   }
);

// response interceptor
service.interceptors.response.use(
   (response) => response,
   /**
    * The following comment is to mark the request status by customizing the code in the response
    * When the code returns the following situation, it means that there is a problem with the permission, log out and return to the login page
    * If you want to identify the status code through xmlhttprequest, the logic can be written in the following error
    * The following codes are samples, please modify according to your own needs, if not needed, you can delete
    */
   // response => {
   // const res = response.data
   // if (res. code !== 20000) {
   // Message({
   // message: res. message,
   // type: 'error',
   // duration: 5 * 1000
   // })
   // // 50008: Illegal token; 50012: Another client has logged in; 50014: Token expired;
   // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
   // // Please import MessageBox by yourself
   // // import { Message, MessageBox } from 'element-ui'
   // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'OK to log out', {
   // confirmButtonText: 'Login again',
   // cancelButtonText: 'Cancel',
   // type: 'warning'
   // }).then(() => {
   // store. dispatch('FedLogOut'). then(() => {
   // location.reload() // In order to re-instantiate the vue-router object to avoid bugs
   // })
   // })
   // }
   // return Promise. reject('error')
   // } else {
   // return response.data
   // }
   // },
   (error) => {
     console.log("err" + error); // for debug
     const { status } = error. response;
     if (status === 403) {
       Modal. confirm({
         title: "Are you sure to log out?",
         content:
           "Because you have not operated for a long time, you have been logged out, you can cancel to stay on this page, or log in again",
         okText: "Login again",
         cancelText: "Cancel",
         onOk() {
           let token = store.getState().user.token;
           store. dispatch(logout(token));
         },
         onCancel() {
           console.log("Cancel");
         },
       });
     }
     return Promise. reject(error);
   }
);

export default service;