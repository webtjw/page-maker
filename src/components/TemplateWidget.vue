<template>
  <div id="template-widget">
    <tab :menus="menus">
      <div slot="控件选择">123</div>
      <div slot="模板选择">3456</div>
    </tab>
  </div>
</template>

<script>
import Tab from './common/Tab'
export default {
  data () {
    return {
      menus: ['控件选择', '模板选择']
    }
  },
  components: {
    Tab,
  }
}
</script>

<style lang="scss">
#template-widget {
  width: 280px;
  border-right: 1px solid #ccd5db;
}
</style>
