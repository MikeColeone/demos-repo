<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { Course } from '@/type'

const course: Course = {
  id: 101,
  name: 'web'
}

const courseTemp: Course = {
  id: 101,
  name: 'Math'
}

const courseShallowRef = shallowRef<Course>(course)

const changeCourse = () => {
  courseShallowRef.value = courseTemp
}

const changeCourseF = () => {
  if (courseShallowRef.value) {
    courseShallowRef.value.name = 'java'
  }
}
</script>
<template>
  <div>
    <h1>shallowRef()</h1>
    <p>
      shallowRef()函数属于`浅`响应式。即，更新响应式对象的引用时为响应式，而更新对象属性值则不会响应式更新。
      shallowRef()，不会为封装的对象创建代理对象，因此其属性的更新为非响应式。
      shallowRef()创建的响应式对象更轻量，适合渲染大量`静态`数据。例如后端返回的仅用于渲染而非修改的数据
      <br />
      <button type="button" @click="changeCourse">更新shallowRef响应式更新对象的引用</button>
      <button type="button" @click="changeCourseF">
        更新shallowRef响应式更新对象的引用 非响应式
      </button>
      {{ courseShallowRef?.name }}
    </p>
  </div>
</template>
