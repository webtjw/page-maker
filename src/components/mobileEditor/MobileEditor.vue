<template>
  <div class="mobile-editor a-c">
    <div class="mock-mobile inline-block relative" :style="{ width: `${editorSize.width}px`, height: `${editorSize.height}px` }"
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
      this.$nextTick(() => {
        const rect = this.$refs.mockMobile.getBoundingClientRect()
        eidtorPosition[0] = parseInt(rect.top, 10)
        eidtorPosition[1] = parseInt(rect.left, 10)
      })
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
      this.appendWidget(widgetType, e.y, e.x)
    },
    appendWidget (type, top, left) {
      switch (type) {
        case 'text':
          this.widgets.push({
            uid: appendId,
            position: { top: top - eidtorPosition[0], left: left - eidtorPosition[1] }
          })
          console.log([top, left], eidtorPosition)
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
  }
}
</style>
