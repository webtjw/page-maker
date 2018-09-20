<template>
  <svg class="svg-item" :style="{ width: size, height: size }" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    color: { type: String },
    size: { type: String, default: '1em' },
  }
}
</script>

<style>
  .svg-item {
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
  }
</style>
