<template>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">ddddddddd</div>
  <div :style="{ 'font-size': fontSize + 'px' }">dddddddddd</div>
  <div :style="styleObject">dddddddddd</div>
  <div :style="[baseStyles, overridingStyles]">dddddddddd</div>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">dddddddddddddddd</div>

  <h1 v-if="awesome">Vue is awesome!</h1>

  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <input type="text" v-model="type">
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>
  <h1 v-show="!awesome">Hello!</h1>
  <template  v-if="awesome">//可以控制整块内容
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>

  </template>
</template>


<script>
export default {
  name: "Style",
  data() {
    return {
      type:'',
      awesome: true,
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'blue',
        fontSize: '13px'
      },
      baseStyles: {
        color: 'red',
        fontSize: '13px'
      },
      overridingStyles: {
        color: 'green'
      }
    }
  }
}
</script>
