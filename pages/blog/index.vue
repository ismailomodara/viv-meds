<template>
  <div>
    <PageHeader :title="title" :image="image" />
    <el-container class="vm-section">
      <el-row type="flex" :gutter="30" class="flex-wrap">
        <el-col v-for="(blog, i) in blogs" :key="i" :sm="12" :md="12" :lg="8">
          <BlogCard :image="blog.image" :title="blog.title" :link="blog.link" />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import BlogCard from '@/components/Blog/BlogCard'

export default {
  name: 'Blog',
  components: {
    BlogCard,
  },
  data() {
    return {
      title: 'Blog',
      image: 'blog.jpg',
      blogs: [
        {
          title: 'Test',
          image:
            'https://www.pexels.com/photo/bunch-of-white-oval-medication-tablets-and-white-medication-capsules-159211/',
          slug: 'test',
        },
        {
          title: 'Test2',
          image:
            'https://www.pexels.com/photo/bunch-of-white-oval-medication-tablets-and-white-medication-capsules-159211/',
          slug: 'test',
        },
        {
          title: 'Test3',
          image:
            'https://www.pexels.com/photo/bunch-of-white-oval-medication-tablets-and-white-medication-capsules-159211/',
          slug: 'test',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
