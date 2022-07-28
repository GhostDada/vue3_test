<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>姓名:{{person.name}}</h3>
  <h3>年龄:{{person.age}}</h3>
  <h3>薪资:{{job.j1.salary}}</h3>
  <button @click="person.name+='@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="personjob.j1.salary++">增长年龄</button>
</template>

<script>
import {reactive, shallowReactive,} from 'vue'
export default {
  name: 'DemoTest',
  setup(){
    //shallowReactive 只会考虑第一层或最外层的对象起作用
    //shallowRef 只对基本数据起响应式，对对象类型不起作用
    let person = shallowReactive({
      name:'梁兆浩',
      age:20,
      job:{
        j1:{
          salary:20
        }
      }
    });
    
    return {
     person
    }
  }
}
</script>

<style>

</style>
