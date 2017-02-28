const routers = {
    '/index': {
        component(resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/home': {
        component(resolve) {
            require(['./views/home.vue'], resolve);
        }
    }    
};
export default routers;