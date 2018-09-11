import Vue from 'vue'
import App from './App.vue'
import 'reset.css'
import 'flex.css'
import './assets/style/common.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
