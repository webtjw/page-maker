<template>
  <div class="mobile-editor a-c">
    <div class="mock-mobile inline-block relative bg-fff" :style="{ width: `${editorSize.width}px`, height: `${editorSize.height}px` }"
      ref="mockMobile"
      @dragover.prevent="overWidget" @drop.prevent="dropWidget"
      @mousemove="moveSelectedWidget">
      <movable v-for="(item, index) of widgets" :key="item.uid" :data="item" :index="index" @enableMovable="markMovable">
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
      editorSize: { width: 0, height: 0 },
      movingWidget: null,
      originPosition: { touchX: 0, touchY: 0, widgetX: 0, widgetY: 0 },
      movePosition: { x: 0, y: 0 }
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
      const { left, top } = this.getRelativePostion(e.x, e.y)
      // 根据类型生成编辑控件
      const widgetType = e.dataTransfer.getData('text/plain')
      switch (widgetType) {
        case 'text':
          this.widgets.push({
            uid: widgetId,
            position: { top, left },
            width: 100 - left
          })
          widgetId++
          break
        default:
          break
      }
    },
    markMovable ({ index, x, y }) {
      const item = this.movingWidget = this.widgets[index]
      this.originPosition.touchX = x
      this.originPosition.touchY = y
      this.originPosition.widgetX = item.position.left
      this.originPosition.widgetY = item.position.top
    },
    unMarkMovable () {
      if (this.movingWidget) this.movingWidget = null
    },
    moveSelectedWidget (e) {
      if (this.movingWidget) {
        const { originPosition, movePosition, editorSize } = this
        const offsetX = +((e.x - originPosition.touchX) / editorSize.width * 100).toFixed(2)
        const offsetY = +((e.y - originPosition.touchY) / editorSize.height * 100).toFixed(2)
        movePosition.x = +(offsetX + originPosition.widgetX).toFixed(2)
        movePosition.y = +(offsetY + originPosition.widgetY).toFixed(2)
        requestAnimationFrame(this.updateWidgetPosition)
      }
    },
    updateWidgetPosition () {
      const { x, y } = this.movePosition
      this.movingWidget.position.top = y
      this.movingWidget.position.left = x
    },
    getRelativePostion (x, y) {
      const { editorSize } = this
      const rect = this.$refs.mockMobile.getBoundingClientRect() // 浏览器窗口宽高可能会改变，因此在触发后实时获取，对性能影响很小，不缓存也没问题
      const mobileLeft = rect.left
      const mobileTop = rect.top
      const widgetLeft = +((x - mobileLeft) / editorSize.width * 100).toFixed(2) // 用百分比来适配
      const widgetTop = +((y - mobileTop) / editorSize.height * 100).toFixed(2)
      return { left: widgetLeft, top: widgetTop }
    }
  },
  mounted () {
    const rect = this.$refs.mockMobile.getBoundingClientRect()
    this.maxHeight = parseInt((docHeight - rect.top) * maxScale, 10)
    // 取消标记移动组件
    document.body.addEventListener('mouseup', () => this.unMarkMovable())
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
