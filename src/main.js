import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../node_modules/@mdi/font/css/materialdesignicons.min.css"
import config from './config.js'

Vue.prototype.$config = config;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
