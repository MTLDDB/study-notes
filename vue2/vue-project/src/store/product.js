// src/store/product.js
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        productDetail: null

    }),
    actions: {
        fetchProducts() {
            // 模拟获取数据
            this.products = [
                { id: 1, name: 'Product 西瓜 1', description: 'Description 1' },
                { id: 2, name: 'Product 桃子 2', description: 'Description 2' }
            ];
        },
        fetchProductDetail(id) {
            // 模拟获取详情数据
            this.productDetail = this.products.find(product => product.id === id);
        }
    }
});
