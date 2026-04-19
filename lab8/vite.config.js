import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ❗ vueDevTools можна залишити, але він не потрібен для продакшну

export default defineConfig({
  base: '/lab8/', // ✅ це правильно

  plugins: [
    vue(),
    // vueDevTools() ❗ краще закоментити або прибрати
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})