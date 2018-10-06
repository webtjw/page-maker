<template>
  <div id="perview-mobile" class="bg-fa">
    <preview-mobile-types
      @changeType="type => mobileType = type"/>
    <mobile-editor
      :mobileType="mobileType"/>
  </div>
</template>

<script>
import PreviewMobileTypes from './mobile/PreviewMobileTypes'
import MobileEditor from './mobile/editor/MobileEditor'

export default {
  data () {
    return {
      mobileType: {}
    }
  },
  components: { PreviewMobileTypes, MobileEditor }
}
</script>
