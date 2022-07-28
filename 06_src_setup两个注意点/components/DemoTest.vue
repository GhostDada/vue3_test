<template>
  <!-- vue3在模板结构中可以没有根标签 -->
  <h3>{{msg}}</h3>
  <h3>{{school}}</h3>
  <slot name="qwe"></slot>
  <button @click="emitHello">触发事件</button>
  <br>
</template>

<script>
export default {
  name: 'DemoTest',
  props:['msg','school'],
  emits:['hello'],
  //vue3的写法: 全部的数据、方法等 都配置到setup函数中去
  setup(props,context){
    //props参数：传过来的值
    // context: 有attrs:传过来的值、emit自定义事件、slots 插槽 
    // console.log(props);
    // console.log(context);
    function emitHello(){
      context.emit('hello','梁兆浩','广东工程职业技术学院')
    }
    
    //返回一个对象 然后模板中就可以使用
    return {
      emitHello,
    }
  }
}
</script>

<style>

</style>
