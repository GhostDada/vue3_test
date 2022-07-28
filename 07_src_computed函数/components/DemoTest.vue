<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>一个人的信息</h3>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>全名:{{person.fullName}}</span>
</template>

<script>
import { reactive,computed} from '@vue/reactivity'
export default {
  name: 'DemoTest',
  setup(){
    let person = reactive({
      firstName:'梁',
      lastName:'兆'
    });

    //计算属性 (简写 无法检测到修改计算属性)
    // person.fullName = computed(()=>{
    //   return person.firstName + '-' + person.lastName;
    // });

    //计算属性 (简写 无法检测到修改计算属性)
    person.fullName = computed({
      get(){
        return person.firstName + '-' + person.lastName;
      },
      set(value){
        const newArry = value.split('-');
        person.firstName = newArry[0];
        person.lastName = newArry[1];
      }
    });

    return {
      person,
    }
  }
}
</script>

<style>

</style>
