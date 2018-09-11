<template>
  <div class="el-tab">
    <div class="tab-menu">
      <div v-for="item of tabMenus" :key="item.name"
        @click="() => activeMenu = item.name"
        class="menu-item" :class="{active: activeMenu === item.name}" :style="{width: `${100/tabMenus.length}%`}">
        {{item.text}}
      </div>
    </div>
    <div class="tab-content">
      <div class="tab-content-item" v-for="item of tabMenus" :key="item.name" v-show="activeMenu === item.name">
        <slot :name="item.name"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: { required: true, type: Array, default: [] },
  },
  data () {
    return {
      activeMenu: ''
    }
  },
  computed: {
    // normalize menus
    tabMenus () {
      const {menus} = this
      const normalizeList = []
      
      menus.forEach(item => {
        if (typeof item === 'string') {
          if (item.trim()) {
            normalizeList.push({name: item, text: item})
            return
          }
        } else if (Object.prototype.toString.call(item) === '[object Object]' && notEmptyString(item.text) && notEmptyString(item.name)) {
          normalizeList.push(item)
          return
        }

        console.error(`menu item ${item} is not legal`)
      })

      if (normalizeList.length) this.activeMenu = normalizeList[0].name
      return normalizeList
    }
  }
}

function notEmptyString (string) {
  return typeof string === 'string' && string.trim()
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
