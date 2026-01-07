import { createGlobalState } from '@vueuse/core'

import { ref } from 'vue'

export const useExample13Store = createGlobalState(() => {
  //模拟绑定/切换权限值的测试
  const roleS = ref<String>('')
  const changeRoleA = () => {
    roleS.value = roleS.value == USER ? ADMIN : USER
  }
  return {
    roleS,
    changeRoleA
  }
})

//默认权限值
export const USER = 'pe2f6'
export const ADMIN = '5gd9'
