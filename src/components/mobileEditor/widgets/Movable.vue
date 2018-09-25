<template>
  <div class="widget-movable absolute" :style="{ top: `${data.top}px`, left: `${data.left}px` }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },
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
