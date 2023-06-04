import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), eslint()],
  // 重新定义 process
  define: {
    'process.env': {}
  },
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
