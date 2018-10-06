<template>
  <div id="widget-panel">
    <tab v-model="tabSelected">
      <tab-item name="list" label="控件管理"></tab-item>
      <tab-item name="edit" label="控件编辑"></tab-item>
    </tab>
  </div>
</template>

<script>
import Tab from './common/tab/Tab'
import TabItem from './common/tab/TabItem'

export default {
  data () {
    return {
      tabSelected: 'list'
    }
  },
  components: { Tab, TabItem }
}
</script>

<style lang="scss">
#widget-panel {
  width: 280px;
  border-left: 1px solid #ccd5db;
}
</style>
