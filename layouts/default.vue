<template>
  <div>
    <h1>Test</h1>
    <NavBar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Website/Footer'
import NavBar from '@/components/NavBar'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss"></style>
