<template>
  <div>
    <div>
      <h2>协同表格系统</h2>
      <TableHeader :online-users="userStore.onlineUsers" :online-count="userStore.onlineCount" />
      <span> </span>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TableHeader from './TableHeader.vue'
import { useUserStore } from '@/stores/userStore'
</script>

<style lang="css" scoped></style>
