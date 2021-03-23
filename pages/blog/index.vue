<template>
  <div>
    <PageHeader :title="title" :image="image" />
    <el-container class="vm-section">
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col v-for="(article, i) in blog" :key="i" :sm="12" :md="12" :lg="8">
          <BlogCard
            :image="article.image"
            :title="article.title"
            :description="article.description"
            :id="article.id"
          />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import BlogCard from '@/components/Blog/BlogCard'
import request from '@/controller/request'

export default {
  name: 'Blog',
  components: {
    BlogCard,
  },
  data() {
    return {
      title: 'Blog',
      image: 'blog.jpg',
      blog: [],
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      request
        .blog()
        .then((response) => response.json())
        .then((data) => {
          this.blog = data.data
        })
        .catch(() => {
          this.$message.error('An error occurred, please again')
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
