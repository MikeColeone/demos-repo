<script setup lang="ts">
import { ref, computed } from 'vue'
import { type Course } from '@/type'
import { listCourses } from '@/dataSource/dataSource'

//存放响应式绑定的数据
const coursesArrR = ref<Course[]>([])
//同意协议 默认为false
const aggreeR = ref(false)
//存放选中的checkbox数组
const checkboxNumsR = ref<HTMLInputElement[]>([])
const minNums: number = 2 //选课总数
//根据该变量 和选中表单定义所有checkbox的禁用状态
const checkboxsSelected = computed(() => (nums: number) => {
  return !aggreeR.value && nums < minNums ? false : true
})

//课程数据
const courses = listCourses()
</script>
<template>
  <div>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交。即，等于2项时未选checkboxes变为不可用状态，已选仍为可用状态；不同意，全部为不可用状态。
      <br />
      每一个checkbox的可用状态，由当前是否选中/已选数量/是否同意决定，因此必须动态获取checkbox元素对象本身。
      HTML元素通过ref属性绑定数组，将HTML元素存入。
    </p>
    <div>
      <form action="post">
        <label>
          同意条款
          <input type="checkbox" v-model="aggreeR" />
          <br />
        </label>
        <template v-for="(i, index) of courses" :key="index">
          <label>
            {{ i.name }}
            <input
              type="checkbox"
              :disabled="checkboxsSelected"
              :checked="i.id == 7"
              v-model="checkboxNumsR" />
            <br />
          </label>
        </template>

        <!-- 至少选择了两个才能提交 -->
        <button type="submit" :disabled="checkboxNumsR.length >= minNums">提交</button>
      </form>

      {{ checkboxNumsR }}
    </div>
  </div>
</template>
