<template>
  <DemoTest v-if="isShow"></DemoTest>
  <button @click="isShow = !isShow">显示\隐藏</button>
</template>

<script>
import {ref} from 'vue'
import DemoTest from './components/DemoTest.vue'
export default {
  name: 'App',
  components:{
    DemoTest,
  },
  setup(){
    let isShow = ref(true);

    return {
      isShow,
    }
  }
}
</script>

<style>

</style>
