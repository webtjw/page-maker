<template>
  <div id="perview-mobile" class="bg-fa">
    <preview-mobile-types
      @changeType="type => mobileType = type"/>
    <mobile-editor
      :mobileType="mobileType"/>
  </div>
</template>

<script>
import PreviewMobileTypes from './PreviewMobileTypes'
import MobileEditor from './mobileEditor/MobileEditor'

export default {
  data () {
    return {
      mobileType: {}
    }
  },
  components: { PreviewMobileTypes, MobileEditor }
}
</script>

<style lang="scss">
#perview-mobile {
}
</style>
