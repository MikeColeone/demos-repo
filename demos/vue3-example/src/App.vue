<template>
  <SidebarView id="sidebar" />
  <RouterView id="router" />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
#app {
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 100%;
}

#sidebar {
  border: 1px solid black;
  padding: 10px 30px;
  width: 35%;
  margin-left: 10%;
  /* 宽度不够实现自动换行 */
  word-wrap: break-word;
}
#router {
  border: 1px solid black;
  padding: 10px;
  flex: 1;
  margin-right: 10%;
}
</style>
