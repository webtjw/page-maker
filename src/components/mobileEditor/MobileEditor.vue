<template>
  <div class="mobile-editor a-c">
    <div class="mock-mobile inline-block relative bg-fff" :style="{ width: `${editorSize.width}px`, height: `${editorSize.height}px` }"
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
      widgets: [],
      editorSize: { width: 0, height: 0 }
    }
  },
  watch: {
    mobileType (value) {
      const { width, height } = value
      const { maxHeight } = this
      this.editorSize = height <= maxHeight
        ? value
        : { width: parseInt(maxHeight / height * width, 10), height: maxHeight }
      this.$nextTick(() => {
        const rect = this.$refs.mockMobile.getBoundingClientRect()
        eidtorPosition[0] = parseInt(rect.top, 10)
        eidtorPosition[1] = parseInt(rect.left, 10)
      })
    }
  },
  methods: {
    overWidget (e) {
      e.dataTransfer.dropEffect = 'move'
    },
    dropWidget (e) {
      const widgetType = e.dataTransfer.getData('text/plain')
      this.appendWidget(widgetType, e.y, e.x)
    },
    appendWidget (type, top, left) {
      const editorWidth = this.editorSize.width
      const editorHeight = this.editorSize.height
      const percentageY = ((top - eidtorPosition[0]) / editorHeight * 100).toFixed(2)
      const percentageX = ((left - eidtorPosition[1]) / editorWidth * 100).toFixed(2)
      switch (type) {
        case 'text':
          this.widgets.push({
            uid: appendId,
            position: { top: percentageY, left: percentageX },
            width: 100 - percentageX
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
    border: 1px dashed #999;
    box-shadow: 0 0 20px 4px #eee;
    text-align: left;
  }
}
</style>
