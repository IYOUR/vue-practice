const routers = {
  '/index': {
    name: 'index',
    component (resolve) {
      require(['../components/index.vue'], resolve)
    },
    auth: false
  },
  '/home': {
    name: 'home',
    component (resolve) {
      require(['../components/home.vue'], resolve)
    },
    auth: true
  }
}
export default routers
