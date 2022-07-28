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
import { reactive, ref,watch} from 'vue'
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
    //监听
    //情况一： 监听ref所定义的单个响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum的值发生变化啦',newValue,oldValue);
    // },{immediate:true});
    // 

    //情况二： 监听ref所定义的多个响应式数据
    // watch([sum,msg],(newValue,oldValue)=>{
    //   console.log('sum的值发生变化啦',newValue,oldValue);
    // },{immediate:true});

    //情况三： 监听reactive所定义的响应式数据  无法获取到oldValue的值 同时 deep配置也失效
    // watch(person,(newValue,oldValue)=>{
    //   console.log('数据发生变化啦',newValue,oldValue);
    // });

    // 情况四： 监听reactive所定义的响应式数据的某个属性 
    // watch(()=>person.age,(newValue,oldValue)=>{
    //   console.log('数据发生变化啦',newValue,oldValue);
    // });

    // 情况五： 监听reactive所定义的响应式数据的某些属性 
    // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
    //   console.log('数据发生变化啦',newValue,oldValue);
    // });

    // 特殊情况 监听reactive所定义的响应式数据中的对象属性  需要开启深度监听 deep ： true
    watch(person.job,(newValue,oldValue)=>{
      console.log('数据发生变化啦',newValue,oldValue);
    },{deep:true});
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
