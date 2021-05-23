import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import store from './store'
import FirebaseVue from './firebase'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue);

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

//Usando Firebase
Vue.use(FirebaseVue)

new Vue({
  store,
  render: h => h(App),
  router: router,
}).$mount('#app')
