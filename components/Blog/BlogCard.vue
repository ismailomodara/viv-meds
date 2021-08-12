<template>
  <div class="vm-blog-card">
    <div class="vm-blog-card__image">
      <img :src="`${imageUrl}/${image}`" alt="" />
    </div>
    <div class="vm-blog-card__content">
      <h3>{{ title }}</h3>
      <div class="content" v-html="description"></div>
      <nuxt-link :to="`/blog/${id}`">
        <el-button type="primary">Read more</el-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import image from '@/mixin/image'

export default {
  name: 'BlogCard',
  mixins: [image],
  props: {
    image: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.vm-blog-card {
  width: 100%;
  background: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;

  &__image {
    height: 250px;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__content {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      color: #292222;
      margin-bottom: 15px;
    }

    .content h3,
    p {
      font-family: 'Oxygen', sans-serif !important;
      display: flex;
      align-items: center;
      color: #292222 !important;
      margin-bottom: 15px;
      font-size: 1.1rem !important;
      cursor: pointer;
      line-height: 1.6 !important;

      span {
        margin-right: 24px;
        font-size: 1rem;
      }
    }

    .content em {
      font-style: normal !important;
      color: #292222 !important;
      font-weight: 400 !important;
    }
  }
}

@media (max-width: 992px) {
  h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .vm-blog-card__image {
    height: 200px;
  }

  .vm-blog-card__content {
    height: 120px;
  }
}
</style>
