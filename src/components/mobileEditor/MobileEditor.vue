<template>
  <div class="mobile-editor">
    <div class="mock-mobile relative" :style="{ width: `${editorSize.width}px`, height: `${editorSize.height}px` }"
      ref="mockMobile"
      @dragover.prevent="overWidget" @drop.prevent="dropWidget">
      <movable v-for="item of widgets" :key="item.uid" :data="item">
        {{item.uid}}
        {{item.position}}
      </movable>
    </div>
  </div>
</template>

<script>
import Movable from './widgets/Movable'

const docHeight = document.documentElement.clientHeight
const maxScale = 0.9
let appendId = 0 // 用于记录添加的控件的 id
const eidtorPosition = []

export default {
  props: {
    mobileType: { required: true, type: Object }
  },
  data () {
    return {
      maxHeight: (docHeight - 68) * maxScale,
      widgets: []
    }
  },
  computed: {
    editorSize () {
      const { maxHeight, mobileType, mobileType: { width, height } } = this
      return height <= maxHeight
        ? mobileType
        : { width: parseInt(maxHeight / height * width, 10), height: maxHeight }
    }
  },
  methods: {
    overWidget (e) {
      e.dataTransfer.dropEffect = 'move'
    },
    dropWidget (e) {
      const widgetType = e.dataTransfer.getData('text/plain')
      this.appendWidget(widgetType, e.x, e.y)
    },
    appendWidget (type, x, y) {
      switch (type) {
        case 'text':
          this.widgets.push({
            uid: appendId,
            position: { top: x - eidtorPosition[0], left: y - eidtorPosition[1] }
          })
          appendId++
          break
        default:
          break
      }
    }
  },
  mounted () {
    const rect = this.$refs.mockMobile.getBoundingClientRect()
    eidtorPosition[0] = rect.top
    eidtorPosition[1] = rect.left
    this.maxHeight = parseInt((docHeight - rect.top) * maxScale, 10)
  },
  components: {
    Movable
  }
}
</script>

<style lang="scss">
.mobile-editor {
  margin: 40px 0 0;

  .mock-mobile {
    margin: 0 auto;
    border: 1px dashed #999;
    box-shadow: 0 0 20px 4px #eee;
  }
}
</style>
