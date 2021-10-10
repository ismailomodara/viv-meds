<template>
  <div v-loading="loading">
    <PageHeader :title="data.title" :image="blogImage" :blog-image="true" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content blog">
        <div v-html="data.content"></div>
      </div>
    </el-container>
  </div>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta'

export default {
  name: 'BlogInfo',
  async asyncData({ params }) {
    const slug = params.slug
    const article = await fetch(
      `https://admin.vivmeds.com/api/blogs/${slug}`
    ).then((res) => res.json())
    return { article }
  },
  data() {
    return {
      loading: false,
      data: {},
      blogImage: '',
    }
  },
  head() {
    const { data } = this.article
    return {
      title: `${data.title} | VivmedsPharmacy | Denton TX 76210`,
      meta: [...this.meta],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://vivmeds.com/blog/${this.$route.fullPath}`,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = [
        {
          type: 'article',
          title: this.article.title,
          description: this.article.data.description,
          url: `https://vivmeds.com.com${this.$route.fullPath}`,
          mainImage: this.article.image_url + '/' + this.data.image,
        },
      ]
      return getSiteMeta(metaData)
    },
  },
  mounted() {
    this.data = { ...this.article.data }
    this.blogImage = this.article.image_url + '/' + this.data.image
    this.loading = false
  },
  created() {
    this.loading = true
  },
  methods: {},
}
</script>
