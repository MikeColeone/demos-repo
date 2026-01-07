<script setup lang="ts">
import { listCourses } from '@/dataSource/dataSource'
import { ref } from 'vue'
import type { Course } from '@/type/index'
import course from './course.vue'
const courses = listCourses()
const selectCourseSingleR = ref<Course>()
</script>
<template>
  <div>
    <h1>Homework - Slot插槽</h1>
    <p>当前操作的课程：{{ selectCourseSingleR?.name }}</p>
    <p>
      <course :courses="courses">
        <template #default>
          <td>操作</td>
        </template>
        <template #action="slotProps">
          <button @click="selectCourseSingleR = slotProps.course" value="slotProps.course">
            EDIT
          </button>
        </template>
      </course>
    </p>
    <p>
      操作的课程：
      <course :courses="courses" />
    </p>
  </div>
</template>

<style scoped>
button {
  border-radius: 2px;
  padding: 3px;
}
</style>
