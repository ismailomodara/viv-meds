<template>
  <div class="vm-page-header">
    <el-container>
      <div v-if="title" class="vm-page-header__title">
        <h1>{{ title }}</h1>
      </div>
      <div v-if="image" class="vm-page-header__image">
        <img
          :src="blogImage ? getBlogImage(image) : getImage(image, imageFolder)"
          :alt="imageAlt"
          loading="lazy"
        />
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
      default: '',
    },
    imageFolder: {
      type: String,
      default: '',
    },
    imageAlt: {
      type: String,
      default: '',
    },
    blogImage: {
      type: Boolean,
      default: false,
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
    h1 {
      color: #6a8b2c;
      margin-bottom: 40px;
      font-size: 2rem;
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
    padding: 100px 15px 0;
    height: auto;

    &__image {
      height: 100%;
    }
  }
}
</style>
