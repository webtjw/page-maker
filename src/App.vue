<template>
  <div id="app" flex="cross:stretch">
    <template-widget/>
  </div>
</template>

<script>
import TemplateWidget from './components/TemplateWidget'

export default {
  name: 'app',
  components: {
    TemplateWidget,
  }
}
</script>
