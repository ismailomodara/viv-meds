<template>
  <div v-loading="loading">
    <PageHeader :title="data.title" :image="blogImage" />
    <el-container class="vm-section pb-0">
      <div class="vm-section_content blog">
        <div v-html="data.content"></div>
      </div>
    </el-container>
  </div>
</template>

<script>
import request from '@/controller/request'

export default {
  name: 'BlogInfo',
  data() {
    return {
      loading: false,
      data: {},
      blogImage: '',
    }
  },
  computed: {
    id() {
      return this.$route.params.slug
    },
  },
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      this.loading = true
      request
        .blogInfo(this.id)
        .then((response) => response.json())
        .then((data) => {
          this.data = { ...data.data }
          this.blogImage = `${data.image_url}/${this.data.image}`
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
