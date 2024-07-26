<template>
  <BlogPost title="My First Post"/>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost  @enlarge-text="add"
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
    />
  </div>
  <Mouser/>
</template>


<script>
import BlogPost from "@/components/BlogPost.vue";
import Mouser from "@/components/Mouser.vue";
export default {
  name: 'Blog',
  components: {
    BlogPost,
    Mouser
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 1,
    }
  },
  methods: {
    add(num) {
      alert(num)
      this.postFontSize += num
    },
  }
}
</script>

