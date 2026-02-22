<template>
  <div>
    <header>
      <h1>协同表格系统</h1>
      <p>多人实时在线编辑</p>
    </header>
    <main>
      <div class="card">
        <p>实时协同</p>
        <p>多人在线编辑同一张表格，实时同步修改内容。</p>
      </div>
      <div class="card">
        <p>冲突解决</p>
        <p>智能算法保持数据一致性。</p>
      </div>
    </main>
    <footer>
      <button @click="goToTable">开始体验</button>
      <button @click="goToAbout">了解更多</button>
      <div>
        <p>vue3</p>
        <p>vite</p>
        <p>piana</p>
        <p>Vue router</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToAbout = () => {
  router.push('/about')
}
const goToTable = () => {
  router.push('/table')
}
</script>

<style scoped>
header {
  background-color: #f0f0f0;
  padding: 1rem;
}
main {
  background-color: #f0f0f0;
  padding: 1rem;
}
footer {
  background-color: #f0f0f0;
  padding: 1rem;
}
</style>
