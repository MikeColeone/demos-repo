<script setup lang="ts">
import type { User } from '@/type'
import { computed, ref, watch, watchEffect } from 'vue'

const user: User = {
  name: 'HH',
  insertTime: '2024-07-01T17:48',
  id: 1,
  address: '111'
}

const userRef = ref(user)

const changeAddress = () => {
  userRef.value.address = Math.floor(Math.random() * 10) + ''
}

const userComputed = computed(() => userRef.value.insertTime?.replace('T', ' '))

const change = () => {
  userRef.value.id = Math.floor(Math.random() * 10)
}
</script>
<template>
  <div>
    <div>
      <h1>添加新属性</h1>
      <br />
      <button type="button" @click="changeAddress">changeAddress</button>
      {{ userRef.address }}
    </div>

    <div>
      <h1>计算属性返回函数</h1>
      <p>
        正常computed()函数绑定计算的结果。但，当需要基于获取的数据，动态绑定计算结果时。
        正常渲染结果：{{ userRef.insertTime }}
      </p>
      <p>计算属性返回函数：{{ userComputed }}</p>
    </div>

    <div>
      <h1>响应式数据的深度</h1>
      <p>响应式对象下的属性对象下的数据改变时，依然是响应式的。 [{"id":{{ userRef.id }}}]</p>

      <button type="button" @click="change">change</button>
    </div>
  </div>
</template>
