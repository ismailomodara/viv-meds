<template>
  <div v-loading="loading">
    <PageHeader :title="title" :image="image" />
    <el-container class="vm-section">
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col v-for="(article, i) in blog" :key="i" :sm="12" :md="12" :lg="8">
          <BlogCard
            :slug="article.slug"
            :image-url="imageUrl"
            :image="article.image"
            :title="article.title"
            :description="article.description"
          />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import BlogCard from '@/components/Blog/BlogCard'
import request from '@/controller/request'
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'Blog',
  components: {
    BlogCard,
  },
  data() {
    return {
      loading: false,
      title: 'Blog',
      image: 'blog_hjzmz8.jpg',
      imageUrl: '',
      blog: [],
    }
  },
  head() {
    return {
      title: 'Health Blog | Vivmeds PharmacyDenton TX 76210',
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vivmeds.com/blog`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = [
        {
          title: 'Health Blog | Vivmeds PharmacyDenton TX 76210',
          description:
            'Living in Denton TX? Need effective healthy living tips? Read about | Nutrition and Wellness habits tailored to the needs community - written by Professional!',
          url: `https://vivmeds.com/blog`,
        },
        {
          name: 'keywords',
          content:
            'vaccination, travel vaccination in Denton, immunization, yellow fever vaccine',
        },
      ]
      return getSiteMeta(metaData)
    },
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      this.loading = true
      request
        .blog()
        .then((response) => response.json())
        .then((data) => {
          this.blog = data.data
          this.imageUrl = data.image_url
          this.loading = false
        })
        .catch(() => {
          this.$message.error('An error occurred, please again')
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
