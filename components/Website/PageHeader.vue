<template>
  <div class="vm-page-header">
    <el-container>
      <div v-if="title" class="vm-page-header__title">
        <h2>{{ title }}</h2>
      </div>
      <div class="vm-page-header__image">
        <img :src="getImage(image, imageFolder)" alt="" />
      </div>
    </el-container>
  </div>
</template>

<script>
import image from '@/mixin/image'

export default {
  name: 'PageHeader',
  mixins: [image],
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
    imageFolder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.vm-page-header {
  padding: 230px 0 30px;

  .el-container {
    flex-direction: column;
  }

  &__title {
    h2 {
      color: #6a8b2c;
      margin-bottom: 40px;
    }
  }

  &__image {
    height: 70vh;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 1024px) {
  .vm-page-header {
    height: auto;

    &__image {
      height: 100%;
    }
  }
}

@media (max-width: 600px) {
  .vm-page-header {
    padding: 100px 0 0;
    height: auto;

    &__image {
      height: 100%;
    }
  }
}
</style>
