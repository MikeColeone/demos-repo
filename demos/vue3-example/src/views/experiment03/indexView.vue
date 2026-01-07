<script setup lang="ts">
import orderCost from './orderCost.vue'
</script>
<template>
  <div>
    <div>
      <h1>主页</h1>
      <ul>
        <li>
          <router-link to="./food.vue" style="text-decoration: none">美食</router-link>
        </li>
        <li>
          <router-link to="./location.vue" style="text-decoration: none">本地</router-link>
        </li>
        <li>
          <router-link to="./run.vue" style="text-decoration: none">跑腿</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<style scoped>
ul > li {
  padding: 10px;
  margin: 2px;
  border: 1px solid blue;
  border-radius: 3px;
  list-style: none;
  text-decoration: none;
}
ul {
  display: flex;
}
router-link {
  text-decoration: none;
}
</style>
