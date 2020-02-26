import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './api/ajax'
import {Alert, Confirm, Toast, Loading,duration} from 'wc-messagebox'
import 'wc-messagebox/style.css'
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast, duration)
Vue.use(Loading)

Vue.prototype.$ajax=ajax;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
