<template>
  <div id="layer-select">
    <tab v-model="activeMenu">
      <tab-item name="component" label="控件选择">
        <component-select />
      </tab-item>
      <tab-item name="template" label="模板选择">
        <div class="a-c">暂无模板</div>
      </tab-item>
    </tab>
  </div>
</template>

<script>
import Tab from '../common/tab/Tab'
import TabItem from '../common/tab/TabItem'
import ComponentSelect from './ComponentSelect'

export default {
  data () {
    return {
      activeMenu: 'component'
    }
  },
  components: {
    Tab,
    TabItem,
    ComponentSelect,
  }
}
</script>

<style lang="scss">
#layer-select {
  width: 200px;
  border-right: 1px solid #ccd5db;
}
</style>
