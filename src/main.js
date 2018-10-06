import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'reset.css'
import 'flex.css'
import './assets/style/common.scss'
import './assets/iconfont/iconfont'
import SvgItem from './components/common/SvgItem'

Vue.config.productionTip = false
// global components
Vue.component('svg-item', SvgItem)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
