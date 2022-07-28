<template>
  <div class="myChild">
    我是子组件（子）
    <mySon></mySon>
  </div>
</template>

<script>
import mySon from './MySon.vue'
export default {
    name:'MyChild',
    components:{
        mySon,
    }
}
</script>

<style>
    .myChild{
        background-color: blue;
        padding: 10px;
    }
</style>