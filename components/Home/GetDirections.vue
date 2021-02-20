<template>
  <el-container class="vm-section">
    <div v-if="showTitle" class="vm-section__heading">
      <h2 class="text-black text-regular">Get Directions</h2>
    </div>
    <el-row type="flex" :gutter="30" class="flex-wrap">
      <el-col :span="24">
        <div class="vm-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.5528953886264!2d-97.0982117845749!3d33.173362880854086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dcb3466fb5227%3A0xdb6007eeff3f3f8b!2s3303%20Unicorn%20Lake%20Blvd%2C%20Denton%2C%20TX%2076210%2C%20USA!5e0!3m2!1sen!2sng!4v1613632556091!5m2!1sen!2sng"
            width="600"
            :height="height"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'GetDirections',
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
    height: {
      type: Number,
      default: 450,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.vm-map {
  width: 100%;

  iframe {
    width: 100% !important;
  }
}
</style>
