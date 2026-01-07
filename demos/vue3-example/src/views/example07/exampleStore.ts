//生成响应式数据和响应式数据的函数
import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue'
import type { User } from '@/type'

export const exampleStore = createGlobalState(() => {
  const countS = ref(0)
  const increase = () => countS.value++
  const userS = ref<User>({ name: 'He', address: '925', level: 1 })
  const doubleCountS = computed(() => countS.value * 2)
  const premissionG = computed(() => {
    return (level: number) => userS.value.level == level
  })
  return {
    countS,
    increase,
    userS,
    doubleCountS,
    premissionG
  }
})
