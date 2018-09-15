<template>
  <div id="app" flex="cross:stretch box:justify">
    <template-widget/>
    <preview-mobile/>
    <options/>
  </div>
</template>

<script>
import TemplateWidget from './components/TemplateWidget'
import PreviewMobile from './components/PreviewMobile'
import Options from './components/Options'

export default {
  name: 'app',
  components: {
    TemplateWidget,
    PreviewMobile,
    Options,
  }
}
</script>
