<!-- 实现一个计时器组件 -->
<template>
  <div class="countdown-timer">
    <div class="timer-display">
      <div class="circle-progress">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <!-- 背景圆 -->
          <circle cx="100" cy="100" r="90" fill="none" stroke="#e0e0e0" stroke-width="10" />
          <!-- 进度圆 -->
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#4285f4"
            stroke-width="10"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashoffset"
            transform="rotate(-90 100 100)" />
        </svg>
        <div class="time-remaining">{{ formattedTime }}</div>
      </div>
    </div>

    <div class="timer-controls">
      <button
        v-if="!isRunning && timeLeft < initialTime"
        @click="resetTimer"
        class="control-btn reset-btn">
        <i class="fa fa-refresh mr-2"></i>
        重置
      </button>
      <button v-if="!isRunning && timeLeft > 0" @click="startTimer" class="control-btn start-btn">
        <i class="fa fa-play mr-2"></i>
        开始
      </button>
      <button v-if="isRunning" @click="pauseTimer" class="control-btn pause-btn">
        <i class="fa fa-pause mr-2"></i>
        暂停
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineProps, defineEmits, watch } from 'vue'

// 常量定义
const CIRCUMFERENCE = 2 * Math.PI * 90 // 圆周长

// 定义props和emits
const props = defineProps<{
  initialTime?: number // 初始倒计时秒数，默认60秒
  color?: string // 进度条颜色
}>()

const emits = defineEmits(['finished', 'timeUpdate'])

// 状态定义
const timeLeft = ref(props.initialTime ?? 60)
const isRunning = ref(false)
const timerInterval = ref<ReturnType<typeof setInterval> | null>(null)
const initialTime = ref(props.initialTime ?? 60)
const circumference = ref(CIRCUMFERENCE)
const progressColor = ref(props.color ?? '#4285f4')

// 计算属性：格式化时间显示 (mm:ss)
const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

// 计算属性：进度条动画
const dashoffset = computed(() => {
  const progress = timeLeft.value / initialTime.value
  return circumference.value * (1 - progress)
})

// 开始计时器
const startTimer = () => {
  if (isRunning.value || timeLeft.value <= 0) return

  isRunning.value = true
  timerInterval.value = setInterval(() => {
    timeLeft.value -= 1
    emits('timeUpdate', timeLeft.value) // 发送时间更新事件

    if (timeLeft.value <= 0) {
      pauseTimer()
      emits('finished') // 发送计时完成事件
    }
  }, 1000)
}

// 暂停计时器
const pauseTimer = () => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
  isRunning.value = false
}

// 重置计时器
const resetTimer = () => {
  pauseTimer()
  timeLeft.value = initialTime.value
}

// 生命周期钩子
onMounted(() => {
  // 初始化圆进度条
  circumference.value = CIRCUMFERENCE
})

onUnmounted(() => {
  // 组件卸载时清除计时器
  pauseTimer()
})

// 监听props变化
watch(
  () => props.initialTime,
  (newTime) => {
    if (newTime && newTime !== initialTime.value) {
      pauseTimer()
      initialTime.value = newTime
      timeLeft.value = newTime
    }
  }
)

watch(
  () => props.color,
  (newColor) => {
    if (newColor) {
      progressColor.value = newColor
    }
  }
)
</script>

<style scoped>
/* 样式保持不变... */
</style>
