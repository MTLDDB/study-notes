<template>
  <div id="MainPage">
    <SidebarD v-if="!isLoginPage" />
    <div id="main">
      <header v-if="!isLoginPage">
        <h1>Product Management System</h1>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <p>&copy; 2024 Product Management System</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SidebarD from './SidebarD.vue';

export default {
  name: 'Common',
  components: {
    SidebarD
  },
  setup() {
    const route = useRoute();
    // 判断当前路由是否是登录页面
    const isLoginPage = computed(() => route.path === '/login');

    return {
      isLoginPage
    };
  }
};
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #MainPage {
  width: 100%;
  height: 100%;
}

#MainPage {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}


#main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

header {
  background-color: #ffffff;
  color: #100404;
  padding: 10px 20px;
  border-width: 1px;
  border-style: ridge;
  border-left-style: none;
  border-color: #ba9331;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  padding: 10px;
  background-color: #ffffff;
  color: #100404;
  text-align: center;
}

@media (max-width: 768px) {
  #MainPage {
    flex-direction: column;
  }

  #main {
    flex: 1;
  }
}
</style>
