<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section">
      <div class="vm-section__heading">
        <h2 class="text-left text-regular">Our Compounding Services</h2>
      </div>
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col
          v-for="(service, i) in compoundingServices"
          :key="i"
          :sm="12"
          :md="12"
          :lg="8"
        >
          <ServiceCard
            image-folder="compounding"
            :image="service.image"
            :title="service.title"
            :link="service.link"
          />
        </el-col>
      </el-row>
    </el-container>
    <ScheduleConsultation />
    <Footer />
  </div>
</template>

<script>
import image from '@/mixin/image'
import config from '@/mixin/services-config'

import PageHeader from '@/components/Website/PageHeader'
import ServiceCard from '@/components/Home/ServiceCard'
import ScheduleConsultation from '@/components/Website/ScheduleConsultation'
import Footer from '@/components/Website/Footer'

export default {
  name: 'CompoundingServices',
  components: {
    PageHeader,
    ServiceCard,
    ScheduleConsultation,
    Footer,
  },
  mixins: [image],
  data() {
    return {
      title: 'Compounding Services',
      image: 'compounding.jpg',
      imageFolder: 'services',
      compoundingServices: config.compoundingServices,
    }
  },
}
</script>

<style lang="scss"></style>
