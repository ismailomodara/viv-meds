<template>
  <div>
    <div class="paintful">T</div>
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

<style scoped lang="scss">
.paintful {
  color: #ffffff;
  position: absolute;
}
</style>
