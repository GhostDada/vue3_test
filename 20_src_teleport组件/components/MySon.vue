<template>
  <div class="mySon">
    <h3>
        我是孙组件
        <button @click="isShow = true">点击弹出框</button>
        <teleport to="body">
            <div class="dialog" v-if="isShow">
                <h3>一些标题</h3>
                <h4>一些内容</h4>
                <h4>一些内容</h4>
                <h4>一些内容</h4>
                <button @click="isShow = false">点击关闭弹出框</button>
            </div>
        </teleport>
    </h3>
  </div>
</template>

<script>
import {inject, ref} from 'vue';
export default {
    name:'MySon',
    setup(){
        let car = inject('car'); //接收数据
        
        let isShow = ref(false);
        return {
            car,
            isShow,
        }
    },
}
</script>

<style>
    .mySon{
        background-color: aqua;
        padding: 10px;
    }
    .dialog{
        width: 300px;
        height: 300px;
        background-color: blueviolet;
    }
</style>