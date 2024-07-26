<!-- BlogPost.vue, 省略了 <script> -->
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text',1)">Enlarge text</button>
  </div>
</template>
<script>
export default {
  props: ['title'],
  emits: ['enlarge-text']
}
</script>