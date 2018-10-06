<template>
  <div class="widgets-select font-12" flex="main:center">
    <div class="widget-item pointer" flex="dir:top main:center cross:center"
      v-for="item of widgets" :key="item.name"
      draggable="true" @dragstart="widgetDragStart($event, item.name)">
      <svg-item :name="item.svg" size="24px" />
      <div>{{item.label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      widgets: [
        { name: 'text', label: '文本', svg: 'wenben1' },
        { name: 'image', label: '图片', svg: 'images' },
        { name: 'form', label: '表单', svg: 'cloud-form' },
      ]
    }
  },
  methods: {
    widgetDragStart (e, type) {
      e.dataTransfer.setData('text/plain', type)
      e.dataTransfer.dropEffect = 'copy'
    }
  }
}
</script>

<style lang="scss">
.widgets-select {
  height: 100%;

  .widget-item {
    height: 100%;
    padding: 0 20px;
    &:hover {
      background-color: #1593ff;
      color: #fff;
    }

    div {
      padding-top: 4px;
      line-height: 1;
    }
  }
}
</style>
