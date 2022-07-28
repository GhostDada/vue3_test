<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>姓名:{{person.name}}</h3>
  <h3>年龄:{{person.age}}</h3>
  <h3>薪资:{{person.job.j1.salary}} K </h3>
  <button @click="person.name+='@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">增长薪资</button>
  <button @click="testToRaw"></button>
</template>

<script>
import {markRaw, reactive, toRaw,} from 'vue'
export default {
  name: 'DemoTest',
  setup(){
    //shallowReactive 只会考虑第一层或最外层的对象起作用
    //shallowRef 只对基本数据起响应式，对对象类型不起作用
    let person = reactive({
      name:'梁兆浩',
      age:20,
      job:{
        j1:{
          salary:20
        }
      }
    });

    //toRaw 将reactive定义的响应式数据 变为 普通数据 
    function testToRaw(){
      const p = toRaw(person);
      p.age++;
      console.log(person);
    }

    //markRaw 标记一个对象，使其无法永远不会变为响应式对象
    function addCar(){
      let car = {name:'奔驰',price:40}
      // person.car = car;   这里响应式添加
      person.car = markRaw(car);//标记一个car对象，使其无法永远不会变为响应式对象
    }

    return {
     person,
     testToRaw,
     addCar,
    }
  }
}
</script>

<style>

</style>
