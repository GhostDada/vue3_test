<template>
  <div class="app">
    <h3>
      我是祖组件（祖）
      <MyChild></MyChild>
    </h3>
  </div>
</template>

<script>
import { reactive,toRefs,provide } from 'vue';
import MyChild from './components/MyChild.vue';
export default {
  name:'App',
  components:{
    MyChild,
  },
  setup(){
    let car = reactive({
      name:'奔驰',
      price:'40W',
    });

    provide('car',car); //将数据交出去

    return {
      ...toRefs(car),
    }
  }
}
</script>

<style>
  .app{
    background-color: bisque;
    padding: 10px;
  }
</style>