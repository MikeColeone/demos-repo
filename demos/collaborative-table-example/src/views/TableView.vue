<template>
  <div>
    <h1 class="header">协同表格</h1>
    <div class="nav-links">
      <router-link to="/">首页</router-link>
      <router-link to="/table">表格</router-link>
      <router-link to="/about">关于</router-link>
    </div>

    <div class="content">
      <CollabortiveTable />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CollabortiveTable from '@/components/CollabortiveTable.vue'
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.header h2 {
  margin: 0;
  color: #1a1a1a;
  font-size: 20px;
  font-weight: 600;
}

.online-users {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-count {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

.user-avatars {
  display: flex;
  gap: 8px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: transform 0.2s;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-avatar:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
