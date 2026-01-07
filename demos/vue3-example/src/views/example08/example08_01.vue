<script setup lang="ts">
import courseItem from './courseItem.vue'
</script>
<template>
  <div>
    <h1>组件化设计与传参</h1>
    <p>
      组件粒度过粗包含过多内容，会使组件过于臃肿不利于维护。可将部分内容合理分割设计为独立组件。
      <br />
      但组件粒度过细也会增加维护成本。
    </p>
    <p>
      传入的参数可以是代理对象。因此父组件改变数据时，子组件支持响应式改变。
      <br />
      <button @click="changeItemF">changeItem</button>
    </p>
    <courseItem v-for="(c, index) in courseR" :course="c" />
  </div>
</template>
