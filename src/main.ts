// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import OfficeUIFabricVue from 'office-ui-fabric-vue'
import PasswordField from './components/password_field'
import 'office-ui-fabric-vue/dist/index.css'

Vue.config.productionTip = false
Vue.use(OfficeUIFabricVue);
Vue.use(PasswordField)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
