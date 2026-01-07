import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-dawei': ['vue'],
          pinia: ['pinia'],
          vueRouter: ['vue-router']
        }
      }
    }
  }
})
