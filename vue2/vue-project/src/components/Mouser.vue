<!--&lt;!&ndash;<script setup>&ndash;&gt;-->
<!--&lt;!&ndash;import { ref, onMounted, onUnmounted } from 'vue'&ndash;&gt;-->

<!--&lt;!&ndash;const x = ref(0)&ndash;&gt;-->
<!--&lt;!&ndash;const y = ref(0)&ndash;&gt;-->

<!--&lt;!&ndash;function update(event) {&ndash;&gt;-->
<!--&lt;!&ndash;  x.value = event.pageX&ndash;&gt;-->
<!--&lt;!&ndash;  y.value = event.pageY&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->

<!--&lt;!&ndash;onMounted(() => window.addEventListener('mousemove', update))&ndash;&gt;-->
<!--&lt;!&ndash;onUnmounted(() => window.removeEventListener('mousemove', update))&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->
<script>
import {useMouse} from '../assets/js/mouse'

export default {
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  mounted() {
    const {x, y} = useMouse(); // 调用 useMouse 函数

    // 使用定时器定期更新鼠标位置
    this.mousePositionInterval = setInterval(() => {
      this.x = x.value;
      this.y = y.value;
      console.log(x.value, y.value);
    }, 1000000); // 每 100 毫秒更新一次
  },
  unmounted() {
    // 清除定时器
    clearInterval(this.mousePositionInterval);
  }
}
</script>
<!--<template>Mouse position is at: {{ x }}, {{ y }}</template>-->

<!--<script setup>-->
<!--import { useMouse } from '../assets/js/mouse'-->

<!--const { x, y } = useMouse()-->
<!--</script>-->

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>