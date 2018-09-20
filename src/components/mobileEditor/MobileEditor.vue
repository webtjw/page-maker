<template>
  <div class="mobile-editor">
    <div class="mock-mobile" ref="mockMobile" :style="{
      width: `${editorSize.width}px`,
      height: `${editorSize.height}px`,
    }">
    </div>
  </div>
</template>

<script>
const docHeight = document.documentElement.clientHeight
const maxScale = 0.9

export default {
  props: {
    mobileType: { required: true, type: Object }
  },
  data () {
    return {
      maxHeight: (docHeight - 68) * maxScale
    }
  },
  computed: {
    editorSize () {
      const { maxHeight, mobileType, mobileType: { width, height } } = this
      return height <= maxHeight
        ? mobileType
        : { width: parseInt(maxHeight / height * width, 10), height: maxHeight }
    }
  },
  mounted () {
    const rect = this.$refs.mockMobile.getBoundingClientRect()
    console.log(this.maxHeight = parseInt((docHeight - rect.top) * maxScale, 10))
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
