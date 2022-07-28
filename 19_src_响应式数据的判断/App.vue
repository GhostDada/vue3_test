<template>
    我是祖组件
  <h3></h3>    
</template>

<script>
import { isProxy, isReactive, isReadonly, isRef, reactive,readonly,ref,toRefs } from 'vue';
export default {
  name:'App',
  
  setup(){
    let car = reactive({
      name:'奔驰',
      price:'40W',
    });
    let sum = ref(0);

    let car2 = readonly(car);

    console.log(isRef(sum));
    console.log(isReactive(sum));
    console.log(isReadonly(sum));
    console.log(isProxy(sum));
   
    return {
      ...toRefs(car),
      car2
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