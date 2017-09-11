// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {tpostore,vuext} from "vuext";
import tpodata from "./tpodata";
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(vuext)
new Vue({
  el: '#app',
  router,
  tpostore:tpostore(tpodata),
  template: '<App/>',
  components: { App }
})
