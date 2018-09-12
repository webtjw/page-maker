<template>
  <div id="template-widget">
    <tab v-model="activeMenu">
      <tab-item name="component" label="控件选择">
        123
      </tab-item>
      <tab-item name="template" label="模板选择">
        <div class="a-c">暂无模板</div>
      </tab-item>
    </tab>
  </div>
</template>

<script>
import Tab from './common/tab/Tab'
import TabItem from './common/tab/TabItem'

export default {
  data () {
    return {
      activeMenu: 'component'
    }
  },
  components: {
    Tab,
    TabItem,
  }
}
</script>

<style lang="scss">
#template-widget {
  width: 280px;
  border-right: 1px solid #ccd5db;
}
</style>
