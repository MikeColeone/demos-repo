//生成响应式数据和响应式数据的函数
import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue'
import type { User } from '@/type'

export const Store = createGlobalState(() => {
  const countS = ref(0)
})
