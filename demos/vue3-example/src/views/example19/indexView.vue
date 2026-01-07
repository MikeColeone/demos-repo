<template>
  <div style="max-width: 600px; margin: auto">
    <el-form :model="form" label-width="100px" ref="formRef">
      <template v-for="item in filteredFormConfig" :key="item.key">
        <el-form-item :label="item.label" :prop="item.key" :rules="getValidationRules(item)">
          <el-input
            v-if="item.type === 'input'"
            v-model="form[item.key]"
            :placeholder="`请输入${item.label}`" />
          <el-select
            v-else-if="item.type === 'select'"
            v-model="form[item.key]"
            placeholder="请选择">
            <el-option
              v-for="option in item.key === 'job' ? jobOptions : item.options"
              :key="option"
              :label="option"
              :value="option" />
          </el-select>
          <el-date-picker
            v-else-if="item.type === 'date'"
            v-model="form[item.key]"
            type="date"
            style="width: 100%" />
          <el-checkbox-group v-else-if="item.type === 'checkbox'" v-model="form[item.key]">
            <el-checkbox v-for="option in item.options" :key="option" :label="option" />
          </el-checkbox-group>
        </el-form-item>
      </template>

      <!-- 动态字段 -->
      <el-form-item label="工作经历">
        <div
          v-for="(exp, index) in form.experiences"
          :key="index"
          style="display: flex; align-items: center">
          <el-input
            v-model="form.experiences[index]"
            placeholder="请输入工作经历"
            style="width: 80%" />
          <el-button type="danger" icon="el-icon-minus" @click="removeExperience(index)" />
        </div>
        <el-button type="dashed" icon="el-icon-plus" @click="addExperience">添加工作经历</el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'

// 类型定义
interface FormItem {
  label: string
  type: 'input' | 'select' | 'date' | 'checkbox'
  key: string
  required?: boolean
  options?: string[]
  dependsOn?: string
  validation?: (value: any) => boolean | string
}

interface FormData {
  [key: string]: any
  name?: string
  gender?: string
  birthDate?: string
  hobbies?: string[]
  job?: string
  company?: string
  experience?: string
  experiences: string[]
}

// 使用 Element Plus 的 FormInstance 类型
const formRef = ref<FormInstance>()
const form = ref<FormData>({ experiences: [] })
const jobOptions = ref<string[]>([])
const formConfig = ref<FormItem[]>([])

const fetchFormConfig = async (): Promise<FormItem[]> => {
  return [
    { label: '姓名', type: 'input', key: 'name', required: true },
    { label: '性别', type: 'select', key: 'gender', options: ['男', '女'] },
    { label: '出生日期', type: 'date', key: 'birthDate' },
    { label: '爱好', type: 'checkbox', key: 'hobbies', options: ['阅读', '旅行', '运动'] },
    { label: '职业', type: 'select', key: 'job', options: [] },
    { label: '公司名称', type: 'input', key: 'company', dependsOn: 'job' },
    {
      label: '工作年限',
      type: 'input',
      key: 'experience',
      dependsOn: 'job',
      validation: (value) =>
        (Number(value) > 0 && Number(value) <= 50) || '工作年限必须在 1-50 之间'
    }
  ]
}

const fetchRemoteOptions = async (): Promise<string[]> => {
  return ['工程师', '设计师', '教师', '医生', '律师']
}

onMounted(async () => {
  formConfig.value = await fetchFormConfig()
  jobOptions.value = await fetchRemoteOptions()
})

const filteredFormConfig = computed(() => {
  return formConfig.value.filter((item) => !item.dependsOn || form.value[item.dependsOn])
})

const getValidationRules = (item: FormItem) => {
  const rules: Array<{
    required?: boolean
    message?: string
    validator?: (rule: any, value: any, callback: (error?: Error) => void) => void
  }> = []

  if (item.required) {
    rules.push({ required: true, message: `${item.label} 必填` })
  }

  if (item.validation) {
    rules.push({
      validator: (_, value, callback) => {
        const result = item.validation!(value)
        if (result === true) {
          callback()
        } else {
          callback(new Error(result as string))
        }
      }
    })
  }

  return rules
}

const addExperience = () => {
  form.value.experiences.push('')
}

const removeExperience = (index: number) => {
  form.value.experiences.splice(index, 1)
}

const submitForm = async () => {
  try {
    await formRef.value?.validate()
    console.log(form.value)
    ElMessage.success('提交成功！')
  } catch (error) {
    ElMessage.error('请完善表单信息')
  }
}
</script>

<style scoped>
.el-button {
  margin-top: 10px;
}
</style>
