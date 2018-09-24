<template>
  <div class="widgets-select a-c font-12">
    <div v-for="item of widgets" :key="item.label" class="widget-item inline-block">
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
        { label: '文本', svg: 'wenben1' },
        { label: '图片', svg: 'images' },
        { label: '表单', svg: 'cloud-form' },
      ]
    }
  }
}
</script>

<style lang="scss">
.widgets-select {
  .widget-item {
    margin: 0 4px;
    padding: 10px;

    div {
      padding-top: 6px;
      line-height: 1;
    }
  }
}
</style>
