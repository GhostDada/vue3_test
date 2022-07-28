<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>{{person.name}}</h3>
  <h3>{{person.age}}</h3>
  <h3>{{person.job.type}}</h3>
  <h3>{{person.job.salary}}</h3>
  <br>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  //vue3的写法: 全部的数据、方法等 都配置到setup函数中去
  setup(){
    let person = reactive({
      name:'梁兆浩',
      age:18,
      job:{
        type:'前端工程师',
        salary:'20k',
      },
      hobby:['学习','唱歌','打游戏']
    });

    //方法
    function changeInfo(){
      //修改数据
      // name.value = '哈哈';
      // age.value = 21;

      person.job.type ='后端工程师';
      person.job.salary = '40k';
    }

    //返回一个对象 然后模板中就可以使用
    return {
      // name,
      // age,
      person,
      changeInfo,
    }
  }
}
</script>

<style>

</style>
