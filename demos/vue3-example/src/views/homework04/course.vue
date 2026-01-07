<script setup lang="ts">
import type { Course } from '@/type'
// 父组件传入数据
const props = defineProps<{ courses: Course[] }>()
</script>
<template>
  <table>
    <tr>
      <th>#</th>
      <th>课程名称</th>
      <slot></slot>
    </tr>
    <tr v-for="(course, index) of props.courses" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ course.name }}</td>
      <td>
        <slot name="action" :course="course"></slot>
      </td>
    </tr>
  </table>
</template>
<style scoped>
table {
  border-collapse: collapse;
  border: 2px solid blueviolet;
}

td,
th {
  border: 2px solid blue;
  padding: 10px;
}
</style>
