<template>
  <div id="widget-panel">
    <tab v-model="tabSelected">
      <tab-item name="list" label="控件管理">
        <ol>
          <li v-for="item in widgets" :key="item.uid" flex="dir:left">
            <div flex-box="0">{{item.uid}}</div>
            <div flex-box="1">{{item.uid}}</div>
          </li>
        </ol>
      </tab-item>
      <tab-item name="edit" label="控件编辑">
        <text-form></text-form>
      </tab-item>
    </tab>
  </div>
</template>

<script>
import Tab from './common/tab/Tab'
import TabItem from './common/tab/TabItem'
import TextForm from './widgets/TextForm'
import store from '@/store'

export default {
  data () {
    return {
      tabSelected: 'edit'
    }
  },
  computed: {
    widgets () {
      return store.state.widgets
    }
  },
  components: { Tab, TabItem, TextForm }
}
</script>

<style lang="scss">
#widget-panel {
  width: 280px;
  border-left: 1px solid #ccd5db;
}
</style>
