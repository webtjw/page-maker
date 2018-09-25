<template>
  <div class="widgets-select a-c font-12">
    <div class="widget-item inline-block pointer"
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
  .widget-item {
    padding: 10px 20px;
    &:hover {
      background-color: #1593ff;
      color: #fff;
    }

    div {
      padding-top: 6px;
      line-height: 1;
    }
  }
}
</style>
