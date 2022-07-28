<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>和为：{{ sum }}</h3>
  <button @click="sum++">点击加1</button>
  <br />
  <h3>当前的鼠标坐标是：x {{ point.x }} , y {{ point.y }}</h3>
</template>

<script>
import usePoint from '../hooks/usePoint';
import { ref,} from "vue";
export default {
  name: "DemoTest",
  setup() {
    let sum = ref(0);
    
    const point = usePoint();

    return {
      sum,
      point,
    };
  },
};
</script>

<style>
</style>
