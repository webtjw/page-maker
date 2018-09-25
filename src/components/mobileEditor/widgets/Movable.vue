<template>
  <div class="widget-movable absolute" :style="{ top: `${position.top}px`, left: `${position.left}px` }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  },
  computed: {
    position () {
      const { data } = this
      let top = 0
      let left = 0
      if (data && data.position) {
        top = data.position.top
        left = data.position.left
      }

      return { left, top }
    }
  }
}
</script>
