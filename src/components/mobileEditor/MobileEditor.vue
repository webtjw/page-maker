<template>
  <div class="mobile-editor">
    <div class="mock-mobile" ref="mockMobile" :style="{
      width: `${mobileType.width}px`,
      height: `${mobileType.height}px`,
    }">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mobileType: { required: true, type: Object }
  },
  mounted () {
    const rect = this.$refs.mockMobile.getBoundingClientRect()
    const maxHeight = parseInt(document.documentElement.clientHeight - rect.top, 10)
    console.log(maxHeight) // 根据该值设置理想高度
  }
}
</script>

<style lang="scss">
.mobile-editor {
  margin: 40px 0 0;

  .mock-mobile {
    margin: 0 auto;
    border: 1px dashed #999;
    box-shadow: 0 0 20px 4px #eee;
  }
}
</style>
