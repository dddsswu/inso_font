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
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/Blog/postBlog.vue')

  }, {
    path: '/groupchat',
    name: 'groupchat',
    meta: {
      requiresAuth: true
    },
    component: () => import( /* webpackChunkName: "about" */ '../views/groupchat/groupchat.vue')
  }, {
    path: '/posthope',
    name: 'posthope',
    meta: {
      requiresAuth: true
    },

    component: () => import( /* webpackChunkName: "about" */ '../views/posthope/posthope.vue')
  }

]

const router = new VueRouter({
  routes
})
//
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     if (!sessionStorage.getItem('isLogined')) {
//       next({
//         path: '/login'
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router