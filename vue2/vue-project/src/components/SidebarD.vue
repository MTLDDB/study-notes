<template>
  <div id="sidebar">
    <h2>菜单</h2>
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <div @click="toggle(item)" class="menu-item">
            <router-link :to="item.path">{{ item.name }}</router-link>
            <span v-if="item.children && item.children.length" class="toggle-icon">
            {{ isOpen(item) ? '-' : '+' }}
          </span>
          </div>
          <ul v-if="isOpen(item)" class="menu-item-sub">
            <li v-for="child in item.children" :key="child.id" >
              <router-link :to="child.path">{{ child.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { fetchMenuData } from '../mock/mockData';
export default {
  name: 'SidebarD',
  data() {
    return {
      menuItems: [

      ],
      openItems: new Set(),// 用于存储展开的菜单项
    };
  },
  mounted() {
    this.loadMenuData();
  },
  methods: {
    toggle(item) {
      if (this.openItems.has(item.id)) {
        this.openItems.delete(item.id);
      } else {
        this.openItems.add(item.id);
      }
    },
    isOpen(item) {
      return this.openItems.has(item.id);
    },

    async loadMenuData() {
      this.menuItems = await fetchMenuData();
    }

  },

};
</script>

<style scoped>
#sidebar {
  width: 180px;
  background-color: #35495e;
  color: white;
  padding: 15px;
  flex-shrink: 0;
}

#sidebar h2 {
  margin-top: 0;
}

#sidebar nav ul {
  list-style: none;
  padding: 0;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}


.toggle-icon {
  margin-left: 10px;
}
#sidebar nav ul li {
  margin: 10px 0;
}

#sidebar nav ul li a {
  color: white;
  text-decoration: none;
}

#sidebar nav ul li a.router-link-exact-active {
  font-weight: bold;
}

.menu-item-sub {
  margin-left: 40px;
}
</style>
