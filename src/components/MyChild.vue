<template>
  <div class="myChild">
    <h3>我是子组件</h3>
    {{sum}}
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  name: "MyChild",
  async setup() {
    let sum = ref(0);

    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sum);
      }, 1000);
    });

    return await p;
  },
};
</script>

<style>
.myChild {
  background-color: blue;
  padding: 10px;
}
</style>