<template>
  <div>
    <PageHeader :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section">
      <div class="vm-section__heading">
        <h2>Our Services</h2>
      </div>
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col
          v-for="(service, i) in services"
          :key="i"
          :sm="12"
          :md="12"
          :lg="8"
        >
          <ServiceCard
            image-folder="services"
            :image="service.image"
            :title="service.title"
            :link="service.link"
          />
        </el-col>
      </el-row>
    </el-container>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import image from '@/mixin/image'
import config from '@/mixin/services-config'

import PageHeader from '@/components/Website/PageHeader'
import ServiceCard from '@/components/Home/ServiceCard'
import Newsletter from '@/components/Website/Newsletter'
import Footer from '@/components/Website/Footer'

export default {
  name: 'OurServices',
  components: {
    PageHeader,
    ServiceCard,
    Newsletter,
    Footer,
  },
  mixins: [image],
  data() {
    return {
      image: 'medication-therapy.jpg',
      imageFolder: 'services',
      services: config.services,
    }
  },
}
</script>

<style lang="scss">
.vm-home-actions {
  flex-wrap: wrap;
  width: 100%;

  .vm-home-action {
    text-align: center;

    &__icon {
      height: 200px;
      width: 200px;
      background: #6a8b2c;
      border-radius: 1000px;
      margin: 0 auto 25px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 60px;
        width: auto;
      }
    }

    p {
      color: #6a8b2c;
      font-size: 1rem;
      font-weight: 600;
    }
  }
}

@media (max-width: 992px) {
  .vm-home-action {
    &__icon {
      height: 120px !important;
      width: 120px !important;
      margin-bottom: 10px !important;

      img {
        height: 45px !important;
      }
    }
  }
}

@media (max-width: 400px) {
  .vm-home-action {
    margin-bottom: 20px;
  }
}
</style>
