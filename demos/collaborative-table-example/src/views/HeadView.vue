<template>
  <div>
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="nav-link" @click="goHome">协同表格</h1>

        <router-link to="/">首页</router-link>
        <router-link to="/table">表格</router-link>
        <router-link to="/about">关于</router-link>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

function goHome() {
  router.push('/')
}
</script>

<style lang="css" scoped></style>
