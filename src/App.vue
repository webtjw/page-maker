<template>
  <div id="app" flex="cross:stretch box:justify">
    <layer-select />
    <preview-mobile />
    <options/>
  </div>
</template>

<script>
import LayerSelect from './components/layer/LayerSelect'
import PreviewMobile from './components/PreviewMobile'
import Options from './components/Options'

export default {
  name: 'app',
  components: {
    LayerSelect,
    PreviewMobile,
    Options,
  }
}
</script>
