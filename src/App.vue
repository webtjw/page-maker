<template>
  <div id="app">
    <top-panel />
    <div flex="cross:stretch box:justify" style="height: calc(100% - 61px);">
      <layer-select />
      <preview-mobile />
      <options/>
    </div>
  </div>
</template>

<script>
import TopPanel from './components/TopPanel'
import LayerSelect from './components/layer/LayerSelect'
import PreviewMobile from './components/PreviewMobile'
import Options from './components/Options'

export default {
  name: 'app',
  components: {
    LayerSelect,
    PreviewMobile,
    TopPanel,
    Options,
  }
}
</script>
