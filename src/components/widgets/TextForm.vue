<template>
  <div class="form-text">
    <div>文本内容：</div>
    <div class="text-content-box relative">
      {{selectedWidget.content}}
      <textarea class="absolute" v-model="selectedWidget.content"></textarea>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  computed: {
    selectedWidget () {
      return store.state.selectedWidget
    }
  }
}
</script>

<style lang="scss">
.form-text {

  .text-content-box {
    margin-top: 10px;
    min-height: 80px;

    textarea {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      resize: none;
      outline: 0;
    }
  }
}
</style>
