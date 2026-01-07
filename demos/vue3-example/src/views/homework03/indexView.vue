<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { type Teacher } from '@/type/index'

const Loading = defineAsyncComponent(() => import('@/components/Loading.vue'))
const DepartmentTeacher = defineAsyncComponent(() => import('./DepartmentTeacher.vue'))
const defineExposeTeacher = ref<{ teacher: Teacher }>()
</script>

<template>
  <div>
    <h1>Homework03-封装暴露组件数据对象</h1>
    <p>选择的教师：</p>
    <p>
      <span v-if="defineExposeTeacher?.teacher.id">
        {{ defineExposeTeacher?.teacher.name }}/{{ defineExposeTeacher?.teacher.id }}
      </span>
    </p>

    <div padding-top="10px">
      <Suspense>
        <template #default>
          <!-- 暴露出教师数据 -->
          <DepartmentTeacher ref="defineExposeTeacher" />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </div>
  </div>
</template>
