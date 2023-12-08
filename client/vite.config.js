import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: "http://13.229.134.209",
        changeOrigin: true,
        secure: true
      }
    }
  },
})
