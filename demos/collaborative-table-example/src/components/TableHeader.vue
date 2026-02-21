<template>
  <div class="header">
    <h2>协同编辑</h2>
    <div class="online-users">
      <span class="user-count">{{ onlineCount }} 人在线</span>
      <div class="user-avatars">
        <div
          v-for="user in onlineUsers"
          :key="user.id"
          class="user-avatar"
          :style="{ backgroundColor: user.color }"
          :title="user.name"
        >
          {{ user.name.charAt(0) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from '@/type'
interface OnlineUser extends User {
  color: string
}

defineProps<{
  onlineUsers: OnlineUser[]
  onlineCount: number
}>()
</script>
