<script setup lang="ts">
/* __placeholder__ */
import type { User } from '@/type'
import { ref } from 'vue'
import type { Title } from '@/type'

//初始化响应式对象
const userR = ref<User>({
  id: 0,
  courses: [],
  sex: '',
  name: '',
  title: {}
})

const titles = [' ', '讲师', '教授', '副教授']

const courses = ['java开发', 'web开发', 'web系统框架', '移动终端技术']

const fileR = ref({ fileName: '', fileSize: '' })
const fileChangeF = (event: Event) => {
  const element = event.target as HTMLInputElement
  if (element && element.files && element.files.length > 0) {
    const file = element.files[0]
    fileR.value.fileName = file.name
    fileR.value.fileSize = `${(file.size / 1024 / 1024).toFixed(2)} MB`
  } else {
    fileR.value.fileName = ''
    fileR.value.fileSize = ''
  }
}
</script>
<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <label for="username">用户名</label>
      <input type="text" id="username" v-model="userR.name" placeholder="请输入姓名" />

      <p>性别</p>
      <label>
        <input type="radio" v-model="userR.sex" name="sex" value="femel" />
        男
      </label>
      <label>
        <input type="radio" v-model="userR.sex" name="sex" value="male" />
        女
      </label>
      <br />
      <select v-model="userR.title">
        <option v-for="(i, index) of titles" :key="index">
          {{ i }}
        </option>
      </select>

      <template v-for="(i, index) of courses" :key="index">
        <br />
        <label>
          {{ i }}
          <input type="checkbox" v-model="userR.courses" :value="i" />
        </label>
      </template>

      <br />
      <button type="submit">提交</button>
    </form>
    {{ userR }}

    <hr />
    <label for="file">上传文件</label>
    <input type="file" id="file" @change="fileChangeF" />
    <p>文件名: {{ fileR.fileName }}</p>
    <p>文件大小: {{ fileR.fileSize }}</p>
  </div>
</template>
