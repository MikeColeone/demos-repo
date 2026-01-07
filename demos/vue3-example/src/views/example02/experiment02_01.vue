<script setup lang="ts">
import type { User } from '@/type'
import { computed, ref, watch, watchEffect } from 'vue'

const message = 'hello'
const user: User = {
  name: 'SUN',
  insertTime: '2024.06.30T18:10',
  address: '100'
}

const user2: User = {
  name: 'KK',
  insertTime: '2024.06.29T18:11',
  address: '101'
}
//修改Ref的值
let userRef = ref(user)
let messageRef = ref(message)

const changeUserRef = () => {
  userRef.value = user2
}

const changeUserRefAttri = () => {
  userRef.value.name = 'HZ'
}
// computed()函数 同时避免未定义风险
const userComputed = computed(() => userRef.value.insertTime?.replace('T', ' '))

//监视整个对象
watch(userRef, () => {
  alert('对象改变')
})

//深度监听
watch(
  userRef,
  (newUser, oldUser) => {
    alert(`watch被激活，用户属性被改变, 名字: ${oldUser.name} 修改为: ${newUser.name}`)
  },
  { deep: true }
)

// watchEffect() 函数  自动监听
watchEffect(() => {
  console.log(`watchEffect: ${userRef.value.name}`)
})
</script>
<template>
  <div>
    <!-- 响应式布局 -->
    <h1>非响应式</h1>
    <p>普通数据也可渲染在视图。以下message数据为非响应式的静态数据，即数据改变时视图无响应</p>
    message:{{ message }}

    <br />
    <p>当执行以下函数改变userRef值，此数据不会改变</p>
    <p>{{ user.name }}</p>
    <hr />
    <!-- 组合式api -->
    <div>
      <h1>组合式api</h1>
      <p>
        <a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html" target="_blank">
          什么是组合式 API？
        </a>
      </p>
    </div>

    <!-- ref -->
    <div>
      <h1>ref</h1>
      <p>
        ref()函数，支持基本数据类型/数组/对象/数据转为响应式数据，
        在TS中通过value属性获取/修改，在视图模板直接使用自动拆箱。
      </p>
      messageRef:{{ messageRef }}
      <br />
      <button type="button" @click="changeUserRef">change</button>
      username:{{ userRef.name }}
      <br />
      <hr />
    </div>

    <div>
      <h1>commputed</h1>
      <p>
        computed()函数声明计算属性，当 userRef 中封装的对象或其属性数据改变时，重新计算并渲染 user
        中 insertTime 属性值
        {{ userComputed }}
        {{ userRef.name }}/{{ userRef.insertTime }}
      </p>
    </div>

    <div>
      <h1>watch</h1>
      <p>
        watch()函数，用以在响应式数据改变时执行操作(允许执行异步操作)。
        <br />
        watch()必须监听响应式属性(Ref对象)。支持2/3个参数；
        默认仅被监听响应式数据改变执行回调，当被监听响应式数据为对象，则对象中属性数据或属性数据对象中的数据改变时不回调。
        <br />
        参数1，被监听的响应式数据；
        <br />
        参数2，响应式数据改变的回调函数，可传入 new/old 值；
        <br />
        参数3，监听选项对象，对象中可声明 deep: true 属性，可监听对象中属性的改变
        <br />

        <!-- 属性改变实现监听 -->
        <button @click="changeUserRefAttri">changeUserRefAttri</button>
        {{ userRef.name }}
      </p>
    </div>

    <div>
      <h1>watchEffect()</h1>
      <p>
        watchEffect()函数，首次初始化组件响应式数据时即时执行回调，同时监听响应式对象属性的改变。类似整合
        immediate/deep 的 watch()。
      </p>
    </div>
  </div>
</template>
