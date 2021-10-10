<template>
  <div>
    <PageHeader
      :title="title"
      :image="image"
      :image-folder="imageFolder"
      :image-alt="`Compounding Services - Animal Care - ${title}`"
    />
    <el-container class="vm-section pb-0">
      <div class="vm-guides">
        <el-collapse v-model="activeGuide" accordion>
          <el-collapse-item
            v-for="(guide, i) in guides"
            :key="i"
            :title="guide.title"
            :name="i + 1"
          >
            <div>
              <ul>
                <li v-for="(item, index) in guide.content" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-container>
  </div>
</template>

<script>
import config from '@/mixin/animal-care-config'
import PageHeader from '@/components/Website/PageHeader'

export default {
  name: 'CanineProductGuide',
  components: {
    PageHeader,
  },
  data() {
    return {
      title: 'Feline Product Guide',
      image: 'feline-product-guide.jpg',
      imageFolder: 'compounding/animal-care',
      activeGuide: '',
      guides: config.feline,
    }
  },
}
</script>

<style lang="scss">
.vm-guides {
  width: 80%;
  margin: 0 auto 40px;

  li {
    font-size: 1rem !important;
  }
}

@media (max-width: 1024px) {
  .vm-vaccinations {
    width: 100%;
  }
}
</style>
