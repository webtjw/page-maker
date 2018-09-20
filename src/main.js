import Vue from 'vue'
import App from './App.vue'
import 'reset.css'
import 'flex.css'
import './assets/style/common.scss'
import './assets/iconfont/iconfont.js'
import SvgItem from './components/common/SvgItem'

Vue.config.productionTip = false
// global components
Vue.component('svg-item', SvgItem)

new Vue({
  render: h => h(App)
}).$mount('#app')
