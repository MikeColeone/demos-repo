<template>
  <div>
    <nav class="navbar">
      <head-view />
    </nav>
    <div class="content">
      <div>
        <h2>项目介绍</h2>
        <p>这是一个协同表格系统，支持多人实时在线编辑同一张表格。</p>
      </div>
      <div>
        <h2>技术栈</h2>
        <p>Vue 3 + Vite + Piana + Vue Router</p>
      </div>
      <div>
        <h2>核心功能</h2>
        <p>实时协同编辑、冲突检测与解决、用户权限管理</p>
        <p>多人编辑，实时协同</p>
      </div>
      <div>
        <h2>技术亮点</h2>
        <p>模块化设计，易于维护和扩展</p>
        <p>高性能数据同步算法，确保数据一致性</p>
        <p>用户友好的界面设计，提升用户体验</p>
      </div>
    </div>

    <div class="footer">
      <button @click="goToTable">前往体验</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import HeadView from './HeadView.vue'
function goToTable() {
  router.push('/table')
}
</script>

<style lang="css" scoped></style>
