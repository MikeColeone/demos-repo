<script setup lang="ts">
// 引入一部分用{}
import { exampleStore } from './exampleStore'
const store = exampleStore()
//此时的store是普通对象

console.log(store)
//获得的是基本类型
const countR = store.countS
console.log(countR)

//响应式修改
const increase = () => store.countS.value++
</script>
<template>
  <div>
    <h1><a href="https://vueuse.org/">VueUse</a></h1>
    <br />
    vueusejs是一款基于组合式API，整合封装了包括，数据状态管理/网络请求/事件监听等一系列Vue常用功能的函数集合。
    <hr />
    <h1>States</h1>
    与Pinia不同，从store获取转为本地的数据仍具有响应式。
    <br />
    第1个数字，引入为本地变量仍为Ref响应式数据；第2个数字，直接绑定store数据到视图。
    <br />
    {{ countR }} / {{ store.countS }}
    <br />
    <button @click="increase">increment</button>
  </div>
</template>
