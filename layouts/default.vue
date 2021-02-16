<template>
  <div>
    <NavBar />
    <nuxt />
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
}
</script>

<style scoped lang="scss"></style>
