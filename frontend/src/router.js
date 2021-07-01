import Vue from "vue";
import Router from "vue-router";
import Main from './Main.vue'


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/index',
            component: Main,
            name: 'main',
        },
        // I'd like to built computer
        //{
        //    path: '/articles/homebuilt',
        //    component: Homebuilt,
        //    name: 'homebuilt',
        //},
    ]

});