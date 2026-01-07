<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 占位图地址
const imgUrl = ref(new URL('/src/assets/loading.png', import.meta.url).href)

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const imgTarget = entry.target as HTMLImageElement
        imgTarget.src = imgTarget.dataset.src ?? ''
        observer.unobserve(imgTarget)
      }
    }
  })

  const imgs = document.getElementsByClassName('lazy-image')
  for (const img of Array.from(imgs)) {
    if (img instanceof HTMLImageElement) {
      observer.observe(img)
    }
  }
})

onUnmounted(() => {
  observer && observer.disconnect()
})
</script>

<template>
  <div class="card" v-for="item in 100" :key="item">
    <div>
      <img
        class="lazy-image"
        data-src="https://picsum.photos/id/100/400/300?random=1"
        :src="imgUrl"
        alt="某网站logo" />
    </div>
    <div>
      <img
        class="lazy-image"
        data-src="https://picsum.photos/id/257/400/300?random=2"
        :src="imgUrl"
        alt="某网站logo" />
    </div>
  </div>
  <div id="loadmore"></div>
</template>
<style scoped lang="scss"></style>
