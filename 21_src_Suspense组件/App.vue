<template>
  <div class="app">
    <h3>
      我是祖组件
      <Suspense>
        <template v-slot:default>
          <MyChild></MyChild>
        </template>
        <template v-slot:fallback>
          <h3>加载中...</h3>
        </template>
      </Suspense>
    </h3>
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from 'vue';
const MyChild = defineAsyncComponent(()=>import('./components/MyChild.vue'));//异步引入组件
// import MyChild from './components/MyChild.vue';//静态引入组件
export default {
  name:'App',
  components:{
    MyChild,
  },
 setup(){
  
 }
}
</script>

<style>
  .app{
    background-color: bisque;
    padding: 10px;
  }
</style>