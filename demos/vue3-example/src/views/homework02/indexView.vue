<script setup lang="ts">
import { ref } from 'vue'

const workdayR = ref(false)
const weekdayR = ref(false)

const workDaysArr = [1, 2, 3, 4, 5]
const weekDayArr = [6, 7]
const datesSelected = ref<number[]>([])

//快捷选择

// const selectAll = () => {
//   //全选时实现快捷选择栏被选择
//   if (workdayR.value) datesSelected.push(...workDaysArr)
//   if (weekdayR.value) datesSelected.push(...weekDayArr)
// }

//短路操作
const selectAll = () => {
  //清空数组
  datesSelected.value = []
  //全选时实现快捷选择栏被选择
  workdayR.value && datesSelected.value.push(...workDaysArr)
  weekdayR.value && datesSelected.value.push(...weekDayArr)
}
//单独选择 当全选时点亮快捷选择栏
const selectSingle = () => {
  workdayR.value = workDaysArr.every((date) => datesSelected.value.includes(date))

  weekdayR.value = weekDayArr.every((date) => datesSelected.value.includes(date))
}
</script>
<template>
  <div>
    <h1>Homework - checkbox的双向绑定</h1>
    <p>
      <!-- 在watch中不能修改监听数据的值，否则实现会死循环 -->
      快捷选择，与单独选择联动，快捷选择优先级高于单独选择。
      使用watch监听会形成死循环，且checkbox只能绑定单值，无法从数组中解构元素。只能执行函数，在函数中比较判断实现。
      checkbox触发顺序：click - v-model - change。因此监听click事件无法获取值，必须监听change事件。
    </p>
    <p>
      <label>
        <input type="checkbox" v-model="workdayR" @change="selectAll" />
        工作日
      </label>

      <label>
        <input type="checkbox" v-model="weekdayR" @change="selectAll" />
        周末
      </label>
    </p>

    <p>
      <template v-for="i of 7" :key="i">
        <label>
          <input type="checkbox" :value="i" v-model="datesSelected" @change="selectSingle" />

          星期{{ i }}
        </label>
      </template>
    </p>
  </div>
</template>
