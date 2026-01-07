<script setup lang="ts">
import type { User } from '@/type'
import { ref } from 'vue'
import { exampleStore } from './exampleStore'

const store = exampleStore()
const userR = store.userS
const myUserR = ref<User>({})
const updateUserF = () => {
  setTimeout(() => (store.userS.value = myUserR.value), 100)
}
</script>
<template>
  <div>
    <h1>Action</h1>
    <p>
      与Pinia不同，从store获取并转为本地变量的对象，仍为Ref的响应式对象。
      <br />
      Store中可声明执行的异步业务函数，以及响应式修改state数据。
      <br />
      为了便于追踪调试，对state数据更新可通过store暴露函数实现，类似Java中建议使用getter/setter操作属性
      <br />
      实际开发中，可建立Service层实现包括网络请求等可复用的业务逻辑操作，将需要响应式缓存数据存于store
      <br />
      Store其内部定义数据为Ref响应式，因此，当在多组件作为变量引用时，均响应式个更新，支持直接更新替换对象
    </p>
    <p>
      {{ userR?.name }} / {{ userR?.address }}
      <br />
      <input type="text" v-model="myUserR.name" />
      <br />
      <input type="text" v-model="myUserR.address" />
      <br />
      <button type="button" @click="updateUserF">asyncUpdate</button>
    </p>
  </div>
</template>
