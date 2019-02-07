import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const checkAuth = function(to, from, next) {
    next();
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home, beforeEnter: checkAuth },
    { path: '/login', name: 'login', component: Login }
  ]
})