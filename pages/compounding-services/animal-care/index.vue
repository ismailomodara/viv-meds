<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
    <el-container class="vm-section">
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col
          v-for="(service, i) in services"
          :key="i"
          :sm="12"
          :md="12"
          :lg="8"
        >
          <ServiceCard
            image-folder="compounding/animal-care"
            :image="service.image"
            :title="service.title"
            :link="`animal-care/${service.link}`"
          />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import config from '@/mixin/services-config'
import PageHeader from '@/components/Website/PageHeader'

export default {
  name: 'AnimalCare',
  components: {
    PageHeader,
  },
  data() {
    return {
      title: 'Animal Care',
      image: 'animal-care.webp',
      imageFolder: 'compounding',
      services: config.animalCare,
    }
  },
}
</script>

<style lang="scss"></style>
