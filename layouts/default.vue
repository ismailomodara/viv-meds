<template>
  <div>
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Website/Footer'
import NavBar from '../components/NavBar'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    Footer,
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
