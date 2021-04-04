<template>
  <div>
    <div class="error">
      <h1>Page Not Found</h1>
      <nuxt-link to="/">
        <el-button type="primary">Go Home</el-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.error {
  height: calc(70vh + 100px);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: #6a8b2c;
    font-size: 4rem;
    margin-bottom: 20px;
  }
}
</style>
