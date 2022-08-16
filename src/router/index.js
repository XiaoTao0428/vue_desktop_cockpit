import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login',  // 重定向到登录页
    meta: {
      requireAuth: '',  // 不需要鉴权
    }
  },
  {
    path: '/login',  // 登录页
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue'),
    meta: {
      requireAuth: '', // 不需要鉴权
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
