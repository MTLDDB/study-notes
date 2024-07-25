<!-- src/views/HomeView.vue -->
<template>
  <div>
    <h1>About</h1>
    <div :class="{ active: isActive }"></div>
    <div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
    <div :class="classObject"></div>
    <div :class="classObject1"></div>
    <div :class="[activeClass, errorClass]"></div>
    <div :class="[!isActive ? activeClass : 'disable', errorClass]"></div>
  </div>
  <myTest class="green"/>
  <myTest :class="{ active: isActive }" />
  <myTest />
  <p>----------------------------------------------</p>
  <MyStyle />
  <myList />

  <myList v-for="n in 2" :key="n" />
</template>

<script>
import myTest  from "@/components/MyTest.vue";
import MyStyle  from "@/components/MyStyle.vue";
import myList from "@/components/MyList.vue";
export default {
  name: 'AboutView',
  components: {
    myTest,
    MyStyle,
    myList
  },
  data() {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        'text-danger': true
      },
      error: null,
      activeClass: 'active',
      errorClass: 'text-danger',
    }
  },
  computed:{
    classObject1() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
};
</script>
