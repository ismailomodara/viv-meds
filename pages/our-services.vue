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

<style lang="scss"></style>
