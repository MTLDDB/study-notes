<template>
  <!-- 子组件模板 -->
  <p class="foo bar">Hi!</p>

  <p :class="$attrs.class">Hisssssssssssss!</p>
  <span>This is a child component</span>
</template>

<script>
export default {
  name: "MyTest"
}
</script>

<style scoped>

</style>