import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp'

Vue.use(Router)

  export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path:'*',
        redirect: '/login'
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/',
        redirect: 'login',
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{
          requeresAuth: true
        }
      },
      {
        path: '/registrar',
        name: 'signUp',
        component: SignUp
      }
    ]
  })

  


