<script>
export default {
  props: {
    value: { required: true, type: String },
  },
  methods: {
    generateElement (createElement) {
      const slots = []
      const childElements = []
      if (!this.$slots.default.length) return childElements
      // remove named slot and components which are not TabItem
      this.$slots.default.forEach(item => {
        const { tag } = item.componentOptions
        if (tag !== 'tab-item') console.error(`${tag} is not allowed using inside Tab component and will be ignored, use TabItem component instead. `)
        else slots.push(item)
      })
      // create menu items
      const selectedMenuName = this.value
      childElements.push(createElement('div',
        { class: 'tab-menu' },
        slots.map(item => {
          const { label, name } = item.componentOptions.propsData
          return createElement('div',
            {
              class: { 'tab-menu-item': true, active: selectedMenuName === name },
              style: { width: `${100 / slots.length}%` },
              on: {
                click: () => name !== selectedMenuName && this.$emit('input', name)
              }
            },
            label
          )
        })
      ))
      // create content
      childElements.push(createElement('div',
        { class: 'tab-content' },
        slots.map(item => {
          const { name } = item.componentOptions.propsData
          return createElement('div',
            {
              class: 'tab-content-item',
              style: { display: name === selectedMenuName ? '' : 'none' }
            },
            item.componentOptions.children
          )
        })
      ))
      return childElements
    }
  },
  mounted () {
    console.log(this)
  },
  render (createElement) {
    return createElement('div',
      { class: 'el-tab' },
      this.generateElement(createElement)
    )
  },
  // 视图无关的非响应式数据
}
</script>

<style lang="scss">
.el-tab {
  .tab-menu {
    font-size: 0;
  }
  .tab-menu-item {
    display: inline-block;
    font-size: 14px;
    white-space: nowrap;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    &.active {
      background-color: #e0e0e0;
      cursor: default;
    }
  }
  .tab-content {
    margin-top: 12px;
  }
}
</style>
