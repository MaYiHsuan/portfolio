import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // 這裡的 '/portfolio/' 是 GitHub repository 的名稱
  plugins: [react()]
})
