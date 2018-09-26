<template>
  <div class="widget-movable absolute move"
    :style="{ top: `${data.position.top}%`,
      left: `${data.position.left}%`,
      width: `${data.width}%` }"
    :tabindex="data.uid"
    @mousedown="() => canMove = true"
    @mouseup="readyToMove">
    <div class="resize-left"></div>
    <div class="resize-right"></div>
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
      canMove: false
    }
  },
  methods: {
    readyToMove (e) {
      console.log('up', e)
    }
  }
}
</script>

<style lang="scss">
.widget-movable {
  padding: 4px 5px;
  border: 1px solid transparent;
  outline: 0;
  &:focus {
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
