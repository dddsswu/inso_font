import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  }, {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "about" */ '../views/Login/Login.vue')
  }, {
    path: '/postblog',
    name: 'postblog',
    component:  () => import( /* webpackChunkName: "about" */ '../views/Blog/postBlog.vue')
    
  },

]

const router = new VueRouter({
  routes
})

export default router