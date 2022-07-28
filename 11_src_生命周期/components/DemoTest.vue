<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>和为：{{sum}}</h3>
  <button @click="sum++">点击加1</button>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
export default {
  name: 'DemoTest',
  setup(){
    let sum = ref(0);

    //通过组合式API写生命周期
    onBeforeMount(()=>{
      console.log('----onBeforeMount---');
    });
    onMounted(()=>{
      console.log('----onMounted---');

    });
    onBeforeUpdate(()=>{
      console.log('----onBeforeUpdate---');

    });
    onUpdated(()=>{
      console.log('----onUpdated---');

    });
    onBeforeUnmount(()=>{
      console.log('----onBeforeUnmount---');

    });
    onUnmounted(()=>{
      console.log('----onUnmounted---');

    });

    return {
      sum,
      
    }
  },
  //通过配置项写生命周期
  // beforeCreate(){
  //   console.log('----beforeCreate---');
  // },
  // created(){
  //   console.log('----created---');
  // },
  // beforeMount(){
  //   console.log('----beforeMount---');
  // },
  // mounted(){
  //   console.log('----mounted---');
  // },
  // beforeUnmount(){
  //   console.log('----beforeUnmount---');
  // },
  // unmounted(){
  //   console.log('----unmounted---');
  // }
}
</script>

<style>

</style>
