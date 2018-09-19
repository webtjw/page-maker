<template>
  <div class="mobile-editor a-c">
    <div class="mock-mobile" :style="{
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
  }
}
</script>

<style lang="scss">
.mobile-editor {
  margin: 40px auto 0;

  .mock-mobile {
    border: 1px dashed #999;
  }
}
</style>
