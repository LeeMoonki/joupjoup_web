import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 375,
    tablet: 1024,
    desktop: 1366,
    inf: Infinity
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
