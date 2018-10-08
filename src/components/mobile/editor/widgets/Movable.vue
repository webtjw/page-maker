<template>
  <div class="widget-movable absolute move"
    :class="{selected: selectedWidget === data}"
    :style="{ top: `${data.position.top}%`,
      left: `${data.position.left}%`,
      width: `${data.width}%` }"
    @mousedown="enableMovable">
    <div class="resize-left" @mousedown.stop=""></div>
    <div class="resize-right"></div>
    <slot />
  </div>
</template>

<script>
import store from '@/store'

export default {
  isMoving: false, // 与视图无关的状态，不放在 data 中，节省开销
  props: {
    data: { type: Object, required: true },
  },
  computed: {
    selectedWidget () {
      return store.state.selectedWidget
    }
  },
  methods: {
    enableMovable (e) {
      this.isMoving = true
      store.commit('selectWidget', this.data)
      this.$emit('enableMovable', {
        x: e.x,
        y: e.y
      })
    }
  }
}
</script>

<style lang="scss">
.widget-movable {
  padding: 4px 5px;
  border: 1px solid transparent;
  outline: 0;
  &.selected {
    border: 1px solid #08a1ef;
    .resize-left, .resize-right {
      display: block;
    }
  }
  .resize-left, .resize-right {
    content: "";
    display: none;
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #08a1ef;
    cursor: w-resize;
    background-color: #fff;
  }
  .resize-left {
    left: 0;
    transform: translate(-50%, -50%);
  }
  .resize-right {
    right: 0;
    transform: translate(50%, -50%);
  }
}
</style>
