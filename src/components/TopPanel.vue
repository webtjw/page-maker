<template>
  <div class="top-panel relative">
    <widgets-select />
  </div>
</template>

<script>
import WidgetsSelect from './WidgetsSelect'

export default {
  components: { WidgetsSelect }
}
</script>

<style lang="scss">
.top-panel {
  border-bottom: 1px solid #dedede;
}
</style>
