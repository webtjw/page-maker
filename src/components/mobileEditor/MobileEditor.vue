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
let widgetId = 0 // 用于记录添加的控件的 id
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
      const { editorSize } = this
      const rect = this.$refs.mockMobile.getBoundingClientRect() // 浏览器窗口宽高可能会改变，因此在触发后实时获取，对性能影响很小，不缓存也没问题
      const mobileLeft = rect.left
      const mobileTop = rect.top
      const widgetLeft = ((e.x - mobileLeft) / editorSize.width * 100).toFixed(2) // 用百分比来适配
      const widgetTop = ((e.y - mobileTop) / editorSize.height * 100).toFixed(2)
      const widgetWidth = 100 - widgetLeft // 高度应根据内容自适应
      // 根据类型生成编辑控件
      const widgetType = e.dataTransfer.getData('text/plain')
      switch (widgetType) {
        case 'text':
          this.widgets.push({
            uid: widgetId,
            position: { top: widgetTop, left: widgetLeft },
            width: widgetWidth
          })
          widgetId++
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
