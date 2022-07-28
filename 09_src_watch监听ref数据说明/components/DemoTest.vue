<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>和为：{{sum}}</h3>
  <button @click="sum++">点击加1</button>
  <br>
  <h3>msg的信息是：{{msg}}</h3>
  <button @click="msg+='!'">点击</button>
  <br>
  <h3>姓名:{{person.name}}</h3>
  <h3>年龄:{{person.age}}</h3>
  <h3>薪资:{{person.job.j1.salary}}</h3>
  <button @click="person.name+='@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长年龄</button>
</template>

<script>
import {ref,watch} from 'vue'
export default {
  name: 'DemoTest',
  setup(){
    let sum = ref(0);
    let msg = ref('你好啊');

    let person = ref({
      name:'梁兆浩',
      age:20,
      job:{
        j1:{
          salary:20
        }
      }
    });
    
    //这里不可以  监听sum.value == 0
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum发生变化了',newValue,oldValue);
    // });

    //因为 person 是 ref定义的响应式数据  想要监听到  一：person.value  二：开启深度监听 deep:true
    watch(person.value,(newValue,oldValue)=>{
      console.log('person发生变化了',newValue,oldValue);
    });

    // watch(person,(newValue,oldValue)=>{
    //   console.log('person发生变化了',newValue,oldValue);
    // },{deep:true});

    return {
      sum,
      msg,
      person,
    }
  }
}
</script>

<style>

</style>
