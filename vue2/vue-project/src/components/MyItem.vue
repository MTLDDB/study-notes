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

  <div @scroll.passive="handleScroll">
    滚动我

  </div>


  <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
  <input @keyup.enter.prevent="submit"/>
  <input @keyup.page-down="onPageDown"/>


  <!-- Alt + Enter -->
  <input @keyup.alt.enter="submit"/>

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
    <input v-model="message" placeholder="edit me" ref="inputRef"/>
    <!--    想在拼字阶段也触发更新，请直接使用自己的 input 事件监听器和 value 绑定而不要使用 v-model-->
  </div>
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

  </div>

  <div>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="checkbox">{{ checked }}</label>
  </div>

  <div>//多选框
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames"/>
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames"/>
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames"/>
    <label for="mike">Mike</label>
  </div>
  <div>//单选按钮
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked"/>
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked"/>
    <label for="two">Two</label>
  </div>

  <div>//下拉框
    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
  <div style="width: 600px">
    <div>Selected: {{ selected }}</div>

    <select v-model="selected" multiple style="width: 200px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>

  <div>
    <div>{{selected}}</div>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
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
      message: 'Hello World',
      checked: false,
      checkedNames: [],
      picked: [],
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(n => n % 2 === 0)
    },
  },

  created() {
   const unwatch= this.$watch('selected', (newQuestion) => {
      // ...
     console.info(newQuestion+":unwatch")
     unwatch();
    })
  },
  watch: {
    // 每当 selected 改变时，这个函数就会执行
    selected(newStr, oldStr) {
      console.info(oldStr+"->"+newStr)

    },
    checkedNames: {
      handler(newStr) {
        console.info(newStr)
        // 在组件实例创建时会立即调用
      },
      // 强制立即执行回调
      immediate: true
      // once: true
    }
  },
  mounted() {
    this.$refs.inputRef.focus()
  },
  methods: {
    even(numbers) {
      return numbers.filter(n => n % 2 === 0)
    },
    warn(message, event) {
      if (event) {
        event.preventDefault()
      }
      console.info(message)
    },
    handleClick(event) {
      alert('点击了按钮')
    },
    handleClickDiv(event) {
      alert('点击了div')
    },

    handleScroll(event) {
      //滚动事件的默认行为 (scrolling) 将立即发生而非等待 `handleScroll`
      console.info('滚动了')
      this.sleep(1000)
    },
    // sleep 函数
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    submit() {
      alert('提交表单')
    },
    onPageDown() {
      console.info('向下翻页')
    }
  }
}


</script>

