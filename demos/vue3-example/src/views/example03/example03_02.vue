<script setup lang="ts">
import { ref, watch } from 'vue'

let submitRef = ref(true)
let colorP = ref('ref')
const setAgreeRef = () => {
  submitRef.value = !submitRef.value
}

const activeRef = ref(false)
</script>
<template>
  <div>
    <h1>v-bind</h1>
    <p>v-bind,将指定时间绑定到methods方法中</p>
    <input type="checkbox" id="check" @click="setAgreeRef" />
    <label for="check">同意以上条款</label>
    <br />
    <button type="button" :disabled="submitRef">提交</button>
    <br />

    <p>也支持直接在事件中声明执行语句</p>
    <p
      @mouseover="activeRef = true"
      @mouseleave="activeRef = false"
      :class="{ 'bg-red': activeRef }">
      元素class属性值与active值绑定， 当鼠标进入/移出时改变active值， 从而动态改变元素样式
    </p>
    <hr />
    <h1>v-bind color</h1>
    <p
      @mouseover="colorP = 'green'"
      @mouseleave="colorP = 'red'"
      :style="{ backgroundColor: colorP }">
      vue3.2添加通过
      <code>v-bind</code>
      直接绑定css属性功能，可更便捷的修改css属性
    </p>
  </div>
</template>
<style>
.bg-red {
  background-color: red;
}
</style>
