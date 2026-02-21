<template>
  <div>
    <header>
      <h1>Home</h1>
    </header>
    <main>
      <p>Welcome to the home page</p>
    </main>
    <footer>
      <p>Footer</p>
      <button @click="goToTable">开始体验</button>
      <button @click="goToAbout">关于</button>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToAbout = () => {
  router.push('/')
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
