<template>
  <svg class="svg-item" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    color: { type: String },
  }
}
</script>

<style>
  .svg-item {
    overflow: hidden;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
  }
</style>
