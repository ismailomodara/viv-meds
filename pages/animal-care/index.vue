<template>
  <div>
    <PageHeader :title="title" :image="image" :image-folder="imageFolder" />
  </div>
</template>

<script>
import PageHeader from '@/components/Website/PageHeader'

export default {
  name: 'AnimalCare',
  components: {
    PageHeader,
  },
  data() {
    return {
      title: 'Animal Care',
      image: 'animal-care.jpg',
      imageFolder: 'services',
    }
  },
}
</script>

<style lang="scss"></style>
