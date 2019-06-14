import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "../src/assets/styles/reset.scss"
import "../src/assets/font-icon/iconfont.css"

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
