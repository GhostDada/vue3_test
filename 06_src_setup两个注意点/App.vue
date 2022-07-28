<template>
  <DemoTest msg="test" school="广东工程职业技术学院" @hello="sayHello">
    <template v-slot:qwe>
      <span>哈哈</span>
    </template>
  </DemoTest>
</template>

<script>
import DemoTest from './components/DemoTest.vue'
export default {
  name: 'App',
  components:{
    DemoTest,
  },
  setup(){
    function sayHello(name,school){
      alert(`我是${name}我来自${school}`);
    }


    return{
    sayHello,
  }
  },
}
</script>

<style>

</style>
