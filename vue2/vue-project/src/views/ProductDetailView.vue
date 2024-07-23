<!-- src/views/ProductDetailView.vue -->
<template>
  <div>
    <h1>Product Detail {{ productId }}</h1>
    <div v-if="productDetail">
      <h2>{{ productDetail.name }}</h2>
      <p>{{ productDetail.description }}</p>
    </div>

    <div v-if="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '../store/product';
import { useRoute } from 'vue-router';
import { ref,watch } from 'vue';
import { fetchProduct } from '../mock/mockData';
export default {
  name: 'ProductDetailView',
  setup() {
    const route = useRoute();
    const store = useProductStore();
    const product = ref(null);
    const productDetail = ref(null);//关键在于定义一个不变的对象，当参数变化是更新对象的value属性，页面数据才会一起不变化
    store.fetchProducts();
    store.fetchProductDetail(parseInt(route.params.id));
    const productId = ref(route.params.id);
    const fetchProductDetail =(id)=> {
      store.fetchProductDetail(parseInt(id));
      productDetail.value  = store.productDetail;
    };

    const loadProduct = async (id) => {
      product.value = await fetchProduct(id);
    };

    fetchProductDetail(route.params.id);
    loadProduct(route.params.id);
    // 监听路由参数变化
    watch(() => route.params.id, (newId) => {
      productId.value = newId;
      fetchProductDetail(newId);
      loadProduct(route.params.id);
    });

    return {
      productId,
      productDetail,
      product
    };
  }
};
</script>
