import axios from 'axios'
var qs = require('qs');
const restApi = (() => {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    console.log(this.$qs);
    // axios.defaults.baseURL = '/api';
    let ajax = axios;
    const restApi = {
        // 登录
        login: {
            url: '/1/auth/login',
        },
        //发送验证码
        sendCode:{
          url:'/1/register/new-captcha'
        },
        //注册
        register:{
          url:"/1/register/add"
        },
        //找回密码
        findpwd:{
          url:'/1/register/reset-password'
        },
        //退出登陆
        logout: {
            url: '/1/auth/logout',
        },
        //判断是否登陆
        isLogin:{
            url:'/1/auth/is-logged-in'
        },
        //即将开奖
        nearClose:{
          url:"/1/sell/near-close"
        },
        //最新上架
        newsgoods:{
            url:'/1/sell/list'
        },
        //最新开奖
        winners:{
            url:'/1/sell/winners'
        },
        //商品信息
        goodDetial:{
            url:'/1/sell/detail?id={id}'
        },
        //购买信息
        boughtList:{
            url: '/1/bought/list'
        },
        //购买
        buyGoods:{
            url:'/1/sell/user-buy'
        },
        get(api_url, urlParams, success){
            return ajax.get(makeApiUrl(api_url, urlParams))
        },
        delete(api_url, urlParams){
            return ajax.delete(makeApiUrl(api_url, urlParams))
        },
        post(api_url, urlParams, data, headers) {
            return ajax.post(makeApiUrl(api_url, urlParams), qs.stringify(data))
        },
        put(api_url, urlParams, data, headers){
            return ajax.put(makeApiUrl(api_url, urlParams), data)
        }

    }
    const makeApiUrl = function(apiUrl, apiParams) {
        let url = apiUrl
            // 替换ApiUrl中的参数
        for (let i in apiParams) {
            url = url.replace('{' + i + '}', apiParams[i])
        }

        return url
    }
    return restApi
})()
export default restApi