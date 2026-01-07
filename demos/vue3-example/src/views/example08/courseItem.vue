<script setup lang="ts">
//导入数据类型
import type { Course } from '@/type'
//接受数组或者对象 将接收到的数据复制到一个常量 （编译时的宏函数 编译器将其编译成相关代码 不需要导入）
const props = defineProps<{ course: Course }>()
</script>
<template>
  <div class="card">
    <div class="name">{{ props.course.name }}</div>
    <div class="time">{{ props.course.createTime }}</div>
  </div>
</template>
