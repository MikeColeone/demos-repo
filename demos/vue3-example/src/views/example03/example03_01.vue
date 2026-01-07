<script setup lang="ts">
import type { User } from '@/type/index.ts'
import { ref } from 'vue'

const userRef = ref<User>({
  level: 5
})

let toggleRef = ref(true)
const change = function changeMethod() {
  toggleRef.value = !toggleRef.value
}

let toggleClose = ref(true)
// 当为true的时候可见
const close = function () {
  toggleClose.value = !toggleClose.value
}
</script>
<template>
  <div>
    <h1>v-if</h1>
    <!-- 由于是可选状态 先判断是否存在未定义情况 -->
    <p v-if="userRef.level && userRef.level >= 4">当且仅当level大于等于四时存在</p>
    <br />
    <p>vue3 input组件默认不会复用</p>
    <button @click="change">切换按钮</button>

    <!-- 在使用条件渲染时使用 template 标签 实现不理解渲染到html文档中 -->

    <div v-if="toggleRef">
      <input type="text" placeholder="input your name" />
      <input type="text" placeholder="input your name" />
    </div>
    <div v-else><input type="text" placeholder="input your key" /></div>

    <br />
    <h1>v-show</h1>
    <button @click="close">关闭</button>
    <p v-show="toggleClose">当为true时可见</p>
  </div>

  <!-- <div>v-if需要对元素进行销毁和重建，v-show不会</div> -->
</template>
<style scoped>
input {
  display: block;
}
</style>
