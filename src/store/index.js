import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  state: {
    widgets: []
  },
  mutations: {
    updateWidget (state, payload) {
    }
  }
})

export default store
