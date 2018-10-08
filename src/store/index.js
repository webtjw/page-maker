import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  state: {
    widgets: [],
    selectedWidget: null
  },
  mutations: {
    selectWidget (state, widget) {
      state.selectedWidget = widget
    }
  }
})

export default store
