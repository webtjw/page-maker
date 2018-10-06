<template>
  <div class="preview-mobile-types a-c">
    <select v-model="mobileType" class="mobile-type-select">
      <option v-for="type of mobileTypeList" :key="type.name" :value="type">{{type.name}}</option>
    </select>
    <span class="size">{{mobileType.width}} x {{mobileType.height}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobileTypeList: [
        { name: 'iPhone6/7/8', width: 375, height: 667 },
        { name: 'iPhone6/7/8 plus', width: 414, height: 736 },
        { name: 'iPhoneX', width: 375, height: 812 },
      ],
      mobileType: {},
    }
  },
  watch: {
    mobileType (val) {
      this.$emit('changeType', val)
    }
  },
  created () {
    this.$emit('changeType', this.mobileType = this.mobileTypeList[0])
  }
}
</script>

<style lang="scss">
.preview-mobile-types {
  margin: 10px 0;

  .mobile-type-select {
    border: 0;
    outline: 0;
    border-bottom: 1px solid #ccd5db;
  }
  .size {
    margin-left: 20px;
    font-size: 12px;
  }
}
</style>
