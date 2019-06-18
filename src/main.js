import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "../src/assets/styles/reset.css"
import "../src/assets/font-icon/iconfont.css"

import { Button ,Switch,Popup,Field, Cell, CellGroup ,Toast  } from 'vant';

Vue.use(Button).use(Switch).use(Popup).use(Field).use(Cell).use(CellGroup).use(Toast);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
