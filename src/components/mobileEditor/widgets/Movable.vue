<template>
  <div class="widget-movable">
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      position: {
        left: 0,
        top: 0,
      }
    }
  }
}
</script>
