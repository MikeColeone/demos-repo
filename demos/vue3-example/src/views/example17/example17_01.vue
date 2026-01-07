<template>
  <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="carousel-wrapper">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Image ' + (index + 1)"
        class="carousel-image"
        :class="{ active: index === currentIndex }" />
    </div>
    <div class="carousel-controls">
      <button class="carousel-button" @click="prevImage">&#10094;</button>
      <button class="carousel-button" @click="nextImage">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg']

const currentIndex = ref(0)
let timer = null

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

const startAutoplay = () => {
  stopAutoplay()
  timer = setInterval(nextImage, 3000)
}

const stopAutoplay = () => {
  if (timer) clearInterval(timer)
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 800px;
  margin: auto;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  height: 400px;
}

.carousel-image {
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

.carousel-image.active {
  display: block;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.carousel-button {
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
}

.carousel-button:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>
