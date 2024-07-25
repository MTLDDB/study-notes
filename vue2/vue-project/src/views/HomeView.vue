<!-- src/views/HomeView.vue -->
<template>
<div>Home</div>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <div v-bind:id="dynamicId"></div>
  <div :id="dynamicId">{{isButtonDisabled}}</div>
  <button :disabled="isButtonDisabled"  @click="changeButtonState">Button1</button>
  <button :disabled="!isButtonDisabled"  @click="changeButtonState">Button2</button>
  <div v-bind="objectOfAttrs">同时绑定多个属性</div>

  <div>
    <div>
      {{ number + 1 }}

      {{ ok ? 'YES' : 'NO' }}
      {{ message.split(' ').reverse().join('--') }}
    </div>
    <div>
      {{ number + 1 }}
      computed计算后的结果：{{ computedOK }}
      {{ message.split(' ').reverse().join('--') }}
    </div>

    <div :id="`list-${id}`"></div>
  </div>


  <div>
    <time :title="toTitleDate(date)" :datetime="date">
      {{ formatDate(date) }}
    </time>
  </div>

  <p v-if="isButtonDisabled">Now you see me</p>
  <a v-bind:href="url"> 链接 </a>
  <a :href="url"> 链接 </a>

  <a v-on:click="doSomething">点击 </a>

  <a @click="doSomething"> 点击 </a>

  <a v-bind:[attributeName]="url"> 动态参数 </a>
  <a v-bind:[attributeName1]="url"> 自定义的动态参数 </a>

  <button @click="increment" style="width: 90px">{{ count }}</button>


  <div>
    <ul ref="itemList">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
    <button @click="addItem">Add Item</button>
  </div>


  <div>
    <form @submit.prevent="submitForm">
      <div v-for="(field, index) in fields" :key="index" :class="{ 'error': errors[index] }">
        <input v-model="field.value" :ref="`field-${index}`" />
        <span v-if="errors[index]">{{ errors[index] }}</span>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div>
    <input type="text" v-model="query" placeholder="Search..." @input="handleInput" />
  </div>
  <div>
    {{firstName}} {{lastName}}
  </div>
</template>

<script>
import moment from 'moment';

import {nextTick} from "vue";
import { _ } from 'lodash'
export default {
  name: 'HomeView',
  data() {
    return {
      rawHtml: '<span style="color: red">This should be red.</span>',
      dynamicId: 'myId',
      isButtonDisabled: false,
      objectOfAttrs: {
        id: 'container',
        class: 'wrapper',
        'data-role': 'main',
        title: 'This is a container'
      },
      number:1,
      ok: true,
      message: 'Hello World',
      id: 10000,
      date: new Date(),
      url: 'https://www.baidu.com',
      attributeName: 'href',
      attributeName1: 'myhref',
      count: 1,
      items: [1, 2, 3, 4, 5],
      fields: [
        { value: '' },
        { value: '' },
        { value: '' }
      ],
      errors: [],
      query: '',
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  created() {
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = _.debounce(this.search, 500);

  },
  unmounted() {
    // 最好是在组件卸载时
    // 清除掉防抖计时器
    this.debouncedClick.cancel()
  },
  mounted() {
    // `this` 指向当前组件实例
    console.log(this.count) // => 1

    // 数据属性也可以被更改
    this.count = 2
    this.increment()
    console.log(this.count) // => 3
    this.computedOK = 'YES';//会出现readonly的警告
    this.fullName = 'John Doe'
  },
  computed: {//可缓存计算结果，不会重复计算
    computedOK() {
      return this.ok ? 'YES' : 'NO';
    },
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) { //这种写法可以改变原值,不会出现readonly的警告
        // 注意：我们这里使用的是解构赋值语法
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },
  methods: {
    changeButtonState() {
      this.isButtonDisabled = !this.isButtonDisabled;
    },
    toTitleDate(date) {
      return new Date(date).toLocaleDateString();//2024-01-01
    },
    formatDate(date) {
      //2024-01-01 00:00:00
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    },
    // increment() {
    //   this.count++;
    // },
    async increment() {
      this.count++
      await nextTick()

      // 现在 DOM 已经更新了
    },
    addItem() {
      this.items.push(this.items.length + 1);
      // 使用 nextTick 确保 DOM 更新完成后执行滚动操作
      nextTick(() => {
        const lastItem = this.$refs.itemList.lastElementChild;
        lastItem.scrollIntoView({ behavior: 'smooth' });
      });
    },
    submitForm() {
      this.errors = this.fields.map(field => field.value === '' ? 'This field is required' : '');

      // 使用 nextTick 在 DOM 更新后聚焦第一个错误字段
      nextTick(() => {
        const firstErrorIndex = this.errors.findIndex(error => error !== '');
        if (firstErrorIndex !== -1) {
          this.$refs[`field-${firstErrorIndex}`][0].focus();
        }
      });
    },
    handleInput() {
      this.debouncedClick(this.query, this.count);
    },
    search(query,page) {
      console.log(`Searching for ${query} ${page}`);
    },
  }
};
</script>
<style>
.wrapper {
  border: 1px solid #000;
  padding: 20px;
}

</style>
