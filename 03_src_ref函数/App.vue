<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>{{job.type}}</h3>
  <h3>{{job.salary}}</h3>
  <br>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  //vue3的写法: 全部的数据、方法等 都配置到setup函数中去
  setup(){
    //基本数据
    // let name = ref('梁兆浩');
    // let age = ref(18);

    //对象
    let job = ref({
      type:'前端工程师',
      salary:'30k',
    });

    //方法
    function changeInfo(){
      //修改数据
      // name.value = '哈哈';
      // age.value = 21;

      job.value.type ='后端工程师';
      job.value.salary = '40k';
    }

    //返回一个对象 然后模板中就可以使用
    return {
      // name,
      // age,
      job,
      changeInfo,
    }
  }
}
</script>

<style>

</style>
