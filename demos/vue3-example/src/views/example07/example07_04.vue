<script setup lang="ts">
import { exampleStore } from './exampleStore'

const store = exampleStore()
const changeCountF = () => {
  store.countS.value++
}

const changeUserF = () => {
  store.userS.value = { name: 'sun', address: '1001' }
}
</script>
<template>
  <div>
    <h1>Define Store</h1>
    <p>
      得益于vue响应式数据与组件的解耦，可以在vue组件外声明响应式数据，从而实现全局的响应式数据源。
    </p>
    <p>
      <button @click="changeCountF">count++</button>
      <br />
      <button @click="changeUserF">change user</button>
    </p>
  </div>
</template>
