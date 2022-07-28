<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>{{name}}</h3>
  <h3>{{age}}</h3>
  <h3>{{sex}}</h3>
  <br>
  <button @click="sayHello">sayHello</button>
</template>

<script>

export default {
  name: 'App',
  //vue3的写法: 全部的数据、方法等 都配置到setup函数中去
  setup(){
    //数据
    let name = '梁兆浩';
    let age = 18;
    let sex = '男';

    //方法
    function sayHello(){
      alert(`大家好，我是${name},我今年${age},性别${sex}`);
    }

    //返回一个对象 然后模板中就可以使用
    return {
      name,
      age,
      sex,
      sayHello
    }
  }
}
</script>

<style>

</style>
