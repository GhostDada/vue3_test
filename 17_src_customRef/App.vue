<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {customRef,} from 'vue'
export default {
  name: 'App',
  
  setup(){
    //自定义ref --- myRef
    function myRef(value,delay){
      let timer;
      return customRef((track,trigger)=>{
        return {
          //有人读取时调用
          get(){
            console.log(`有人读取了${value}的值`);
            track();//通知vue追踪数据的变化
            return value;
          },
          //有人修改时调用
          set(newValue){
            console.log(`有人修改了value的值为${newValue}`);
            clearTimeout(timer);
            timer = setTimeout(()=>{
              value = newValue;
              trigger();//通知Vue去解析模板
            },delay);
          },
        }
      });
    }
    let keyWord = myRef('hello',500);
    return {
      keyWord,
    }
  }
}
</script>

<style>

</style>
