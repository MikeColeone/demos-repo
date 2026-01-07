<!-- <script setup lang="ts">
import { ref } from 'vue'

const tasks = ref([
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '打卡列侬墙', done: false }
])

tasks.value.forEach((t) => {
  t.isEditing = false
})

const newTask = ref('')

const addTask = () => {
  if (newTask.value) {
    tasks.value.push({
      id: tasks.value.length,
      text: newTask.value,
      done: false,
      isEditing: false
    })
    console.log(newTask.value)
    newTask.value = ''
  }
}
const editTask = (task) => {
  task.isEditing = true
}
const finishEdit = (task) => {
  task.isEditing = false
}
const removeTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}
</script>

<template>
  <div id="app">
    <h1>Day off in Kyoto</h1>
    <input v-model="newTask" placeholder="Add" />
    <button @click="addTask">add</button>

    <ul>
      <li v-for="(c, index) of tasks" :key="index" style="list-style: none">
        <template v-if="c.isEditing">
          <input v-model="c.text" />
          <button @click="finishEdit(c)">finish</button>
          <button @click="removeTask(c.id)">delete</button>
        </template>
        <template v-else>
          <input type="checkbox" v-model="c.done" />
          <span>{{ c.id }} | {{ c.text }}</span>
          <button @click="editTask(c)">edit</button>
          <button @click="removeTask(c.id)">delete</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<style></style> -->

<!-- <script setup>
import { ref } from 'vue'

// 使用ref创建响应式数据
const num1 = ref('')
const num2 = ref('')
const result = ref('')

const compare = () => {
  if (num1.value > num2.value) {
    result.value = '大于'
  } else if (num1.value < num2.value) {
    result.value = '小于'
  } else {
    result.value = '等于'
  }
}
</script>

<template>
  <div>
    <input type="number" v - model="num1" placeholder="请输入第1个数字：" />
    <input type="number" v - model="num2" placeholder="请输入第2个数字：" />
    <button @click="compare">比较</button>
    <p v - if="result === '大于'">第一个数字大于第二个数字</p>
    <p v - if="result === '小于'">第一个数字小于第二个数字</p>
    <p v - if="result === '等于'">两数相等</p>
  </div>
</template> -->

<!-- 组件切换 -->
<!-- <template>
  <div>
    <button @click="isLogin = true">登录</button>
    <button @click="current = Login">登录</button>

    <button @click="isLogin = false">注册</button>
    <component :is="currentComponent"></component>
    <component :is="showCom"></component>
  </div>
</template>

<script setup>
import { ref, computed, shallowRef } from 'vue'
import Login from './Login.vue'
import Register from './Register.vue'

// 使用ref创建响应式数据
const isLogin = ref(true)

const current = ref('')

// 使用computed计算属性来决定当前显示的组件
const currentComponent = computed(() => {
  return isLogin.value ? Login : Register
})

const showCom = shallowRef(current)
</script> -->
<!-- 
<script setup lang="ts">
const name = 'test'
const obj = {
  name: 'test',
  say: function () {
    console.log(this.name)
  }
}

const say2 = function (this: any) {
  console.log(this.name)
}
</script>
<template>
  <div>箭头函数</div>
  <p>
    箭头函数不会创建自己的this，它的this值从定义它的上下文继承而来。也就是说，箭头函数中的this和它外层代码块中的this是一样的。
    也就是说箭头函数的this指针不是自己决定的而是却决于定义的上下文
  </p>
</template> -->
<script setup lang="ts">
const sum = (a: any, b: any, c: any) => {
  console.log(a + b + c)
}

// 将函数柯里化
const curry = (fn: any) => {
  return function curried(this: any, ...args: any) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return (...args2: any) => {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

let sumCurry = curry(sum)
sumCurry(1)(2)(3)
</script>
<template>
  <div>函数柯里化</div>
</template>
