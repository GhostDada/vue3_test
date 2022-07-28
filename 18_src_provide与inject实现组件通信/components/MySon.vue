<template>
  <div class="mySon">
    我是孙组件（孙） {{car.name}} --- {{car.price}}
  </div>
</template>

<script>
import {inject} from 'vue';
export default {
    name:'MySon',
    setup(){
        let car = inject('car'); //接收数据

        return {
            car,
        }
    },
}
</script>

<style>
    .mySon{
        background-color: aqua;
        padding: 10px;
    }
</style>