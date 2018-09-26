<template>
  <div class="widget-movable absolute" :style="{ top: `${data.position.top}px`, left: `${data.position.left}px`, width: `${data.width}%` }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true }
  }
}
</script>
