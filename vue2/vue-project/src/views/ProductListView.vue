<!-- src/views/ProductListView.vue -->
<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div>{{product.name}}</div>
<!--        <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>-->
      </li>
    </ul>
  </div>
</template>

<script>
import { useProductStore } from '../store/product';

export default {
  name: 'ProductListView',
  setup() {
    const store = useProductStore();
    store.fetchProducts();

    return {
      products: store.products
    };
  }
};
</script>
