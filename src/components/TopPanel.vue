<template>
  <div class="top-panel relative">
    <widgets-select />
  </div>
</template>

<script>
import WidgetsSelect from './widgets/WidgetsSelect'

export default {
  components: { WidgetsSelect }
}
</script>

<style lang="scss">
.top-panel {
  height: 60px;
  border-bottom: 1px solid #dedede;
}
</style>
