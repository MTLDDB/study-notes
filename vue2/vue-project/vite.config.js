import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    // https: true, //(使用https)启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS
    host: true, // 监听所有地址
    port: 8080, //指定开发服务器端口：默认3000
    open: true, //启动时自动在浏览器中打开
    // cors: false, //为开发服务器配置 CORS
    // proxy: {
    //   //配置自定义代理规则
    //   // 字符串简写写法
    //   '/jpi': 'http://192.168.1.97:4567',
    //   '/api': {
    //     target: 'http://192.168.1.97:108',
    //     changeOrigin: true, //是否跨域
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
