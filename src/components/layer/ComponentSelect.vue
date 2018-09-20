<template>
  <div class="component-select">
    <div class="component-item a-c" v-for="item in widgets" :key="item.svgName">
      <svg-item :name="item.svgName" size="60px" />
      <div>{{item.label}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      widgets: {
        text: { svgName: 'wenben', label: '文本' },
        image: { svgName: 'images', label: '图片' },
        music: { svgName: 'yinle', label: '音乐' },
        form: { svgName: 'cloud-form', label: '表单' },
      }
    }
  }
}
</script>

<style lang="scss">
.component-select {

  .component-item {
    display: inline-block;
    width: 50%;
    margin: 20px 0;

    div {
      margin-top: 10px;
    }
  }
}
</style>
