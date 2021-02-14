<template>
  <div>
    <div id="topPage" ref="topPage">
      <div v-if="showScrollToBottom" class="ms-to-bottom">
        <el-button
          type="primary"
          icon="el-icon-bottom"
          circle
          @click="scrollToBottom"
        ></el-button>
      </div>
      <nav-bar />
      <nuxt />
      <div v-if="showBackToTop" class="ms-back-to-top">
        <el-button
          type="primary"
          icon="el-icon-top"
          circle
          @click="backToTop"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
  },
  data() {
    return {
      loading: false,
      showScrollToBottom: true,
      showBackToTop: false,
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.loading = true
        setTimeout(() => (this.loading = false), 800)
      })
    },
  },
  created() {
    this.$nextTick(() => {
      this.loading = true
      setTimeout(() => (this.loading = false), 800)
    })
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.showBackToTop = window.pageYOffset > 200
      this.showScrollToBottom = window.pageYOffset < 200
    })
  },
  methods: {
    scrollToBottom() {
      window.scrollBy(0, 500)
      this.showScrollToBottom = false
    },
    backToTop() {
      this.$refs.topPage.scrollIntoView({ behavior: 'smooth' })
      this.showScrollToBottom = true
    },
  },
}
</script>

<style scoped lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.ms-to-bottom {
  position: fixed;
  z-index: 99;
  right: 40px;
  bottom: 40px;

  .el-button {
    box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.2) !important;

    i {
      animation: fadeIn 3s ease-in both;
    }
  }
}

.ms-back-to-top {
  position: fixed;
  z-index: 99;
  right: 40px;
  bottom: 40px;

  .el-button {
    box-shadow: -4px 16px 30px rgba(0, 0, 0, 0.1) !important;
  }
}

@media (max-width: 600px) {
  .ms-to-bottom {
    bottom: 30px;
  }
}
</style>
