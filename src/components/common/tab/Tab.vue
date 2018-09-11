<template>
  <div class="el-tab">
    <div class="tab-menu-box">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { required: true, type: String },
  },
  data () {
    return {
      activeMenu: '',
      tabMenus: []
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="scss">
.el-tab {
  .tab-menu {
    font-size: 0;
  }
  .menu-item {
    display: inline-block;
    font-size: 14px;
    white-space: nowrap;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    &.active {
      background-color: #e0e0e0;
    }
  }
  .tab-content {
    margin-top: 12px;
  }
}
</style>
