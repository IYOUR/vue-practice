// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Axios from 'axios'
import App from 'app.vue'
import Routers from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Axios)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(Vuex)
// debug
Vue.config.debug = true
/* eslint-disable no-new */

// Vuex定义
const store = new Vuex.Store({
  state: {
    isLogin: false,
    user: {},
    access_token: ''
  },
  mutations: {
    setAccessToken (state, accessToken) {
      state.accessToken = accessToken
    },
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
      state.user = {}
      state.access_token = ''
    },
    setUser (state, user) {
      state.user = user
    }
  }
})
// 路由配置
let router = new VueRouter({
  // 是否开启History模式的路由, 如果生产环境的服务端没有进行相关配置,请慎用
  history: false
})
router.map(Routers)
router.beforeEach(({to, next, redirect}) => {
  window.scrollTo(0, 0)
  // Auth验证
  if (to.auth) {
    if (!store.state.isLogin) {
      if (localStorage.access_token) {
        // 自动登录
        store.commit('login')
        // 获取用户信息
        Axios.post('/user/loginUser.go', JSON.parse(localStorage.access_token)
        ).then((response) => {
          if (response.data.errcode === false) {
            Axios.post('/user/getUserInfo.go'
            ).then((response) => {
              console.log(response)
              // store.commit('setUser', response.body.data);
            }, (error) => {
              console.log(error)
              redirect({name: 'login'})
            })
          }
        }, (error) => {
          console.log(error)
          redirect({name: 'index'})
        })
        return true
      }
      redirect({name: 'index'})
    }
  }
  return true
})
router.afterEach(() => {

})

router.redirect({
  '*': '/index'
})
App.store = store
router.start(App, '#app')
