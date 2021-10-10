<template>
  <div class="vm-service-card">
    <div class="vm-service-card__image">
      <img :src="getImage(image, imageFolder)" :alt="title" loading="lazy" />
    </div>
    <div class="vm-service-card__content">
      <h3>{{ title }}</h3>
      <nuxt-link :to="link">
        <p>
          <span>Click for more</span>
          <svg
            width="41"
            height="16"
            viewBox="0 0 41 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928935C33.9526 0.538411 33.3195 0.538411 32.9289 0.928935C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-8.74228e-08 9L40 9L40 7L8.74228e-08 7L-8.74228e-08 9Z"
              fill="#6A8B2C"
            />
          </svg>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import image from '@/mixin/image'

export default {
  name: 'ServiceCard',
  mixins: [image],
  props: {
    image: {
      type: String,
      required: true,
    },
    imageFolder: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.vm-service-card {
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
    height: 140px;

    h3 {
      color: #292222;
    }

    p {
      display: flex;
      align-items: center;
      color: #6a8b2c;
      cursor: pointer;

      span {
        margin-right: 24px;
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 992px) {
  h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .vm-service-card__image {
    height: 200px;
  }

  .vm-service-card__content {
    height: 120px;
  }
}
</style>
