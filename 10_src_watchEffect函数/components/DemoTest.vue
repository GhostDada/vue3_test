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
import {ref,watch,reactive, watchEffect} from 'vue'
export default {
  name: 'DemoTest',
  setup(){
    let sum = ref(0);
    let msg = ref('你好啊');

    let person = reactive({
      name:'梁兆浩',
      age:20,
      job:{
        j1:{
          salary:20
        }
      }
    });
    
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum发生变化了',newValue,oldValue);
    // });

    //watchEffect用到谁就监视谁
    watchEffect(()=>{
      const x1 = sum.value;
      const x2 = person.job.j1.salary;
      console.log('数据发生改变啦');
    });
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
