<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>


  <li v-for="n in evenNumbers">{{ n }}</li>

  <ul v-for="numbers1 in sets">
    <p>{{ even(numbers1) }}</p>
    <!--    <li v-for="n in even(numbers1)">{{ n }}</li>-->
  </ul>

  <!-- 使用特殊的 $event 变量 -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  <!-- 使用内联箭头函数 -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
  <div @click="handleClickDiv">
    <button @click="handleClick">点击我</button>
  </div>
  <div @click.self="handleClickDiv">
    <button @click="handleClick">点击我</button>
  </div>
  <div @click.self="handleClickDiv" style="background: red">
    <button @click.stop="handleClick">点击我</button>
  </div>
  <div @click.capture="handleClickDiv" style="background: darkblue">
    <button @click="handleClick">点击我</button>
  </div>

  <button @click.once="handleClick">点击我一次</button>

  <div @scroll.passive="handleScroll" style="height: 20px; overflow: scroll">
    滚动我
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>
    <p>滚动我</p><br>


  </div>


  <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
  <input @keyup.enter.prevent="submit" />
  <input @keyup.page-down="onPageDown" />


  <!-- Alt + Enter -->
  <input @keyup.alt.enter="submit" />

  <!-- Ctrl + 点击 -->
  <div @click.ctrl="submit">Do something</div>


  <!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
  <button @click.ctrl="submit">A</button>

  <!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
  <button @click.ctrl.exact="submit">A</button>

  <!-- 仅当没有按下任何系统按键时触发 -->
  <button @click.exact="submit">A</button>

  <div>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
<!--    想在拼字阶段也触发更新，请直接使用自己的 input 事件监听器和 value 绑定而不要使用 v-model-->
  </div>
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

  </div>

  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </div>
</template>

<script>
export default {
  props: ['title'],
  emits: ['remove'],
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
      message : 'Hello World',
      checked : false,
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(n => n % 2 === 0)
    },
  },
  methods: {
    even(numbers) {
      return numbers.filter(n => n % 2 === 0)
    },
    warn(message, event) {
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    handleClick(event) {
      alert('点击了按钮')
    },
    handleClickDiv(event) {
      alert('点击了div')
    },

    handleScroll(event) {
      //滚动事件的默认行为 (scrolling) 将立即发生而非等待 `handleScroll`
      alert('滚动了')
      this.sleep(1000)
    },
    // sleep 函数
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    submit () {
      alert('提交表单')
    },
    onPageDown(){
      alert('向下翻页')
    }
  }
}


</script>

