<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>姓名:{{name}}</h3>
  <h3>年龄:{{age}}</h3>
  <h3>薪资:{{job.j1.salary}}</h3>
  <button @click="name+='@'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">增长年龄</button>
</template>

<script>
import {reactive, toRef, toRefs,} from 'vue'
export default {
  name: 'DemoTest',
  setup(){
    let person = reactive({
      name:'梁兆浩',
      age:20,
      job:{
        j1:{
          salary:20
        }
      }
    });
    
    return {
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary'),
      ...toRefs(person),
      // person,
    }
  }
}
</script>

<style>

</style>
