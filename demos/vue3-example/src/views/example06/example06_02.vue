<script setup lang="ts">
import { ref } from 'vue'
import EmailLogin from '@/components/EmailLogin.vue'
import UsernameLogin from '@/components/UsernameLogin.vue'

const loginR = ref(false)
const toggleComF = () => (loginR.value = !loginR.value)
</script>
<template>
  <div>
    <h1>Components Dynamic</h1>
    <p>通过component标签:is属性，动态绑定组件</p>
    <h1>keep-alive</h1>
    <p>
      keep-alive标签，支持在组件从DOM移除后缓存组件实例，再次加载时直接使用原实例。即和保存存在原数据。
    </p>
    <button type="button" @click="toggleComF">切换</button>
    <!-- <div v-show="!loginR">
      <component :is="UsernameLogin" />
    </div>
    <div v-show="loginR">
      <component :is="EmailLogin" />
    </div> -->

    <keep-alive>
      <component :is="loginR == true ? UsernameLogin : EmailLogin" />
    </keep-alive>
    <p>需要整合router-view实现基于路由地址的keepalive</p>
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" :key="$route.path" />
      </KeepAlive>
    </RouterView>
  </div>
</template>
