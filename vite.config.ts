import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // ← важно для кастомного домена
  build: {
    // Генерируем sourcemap для отладки (опционально)
    sourcemap: false,
    // Чистим dist перед сборкой
    emptyOutDir: true,
  },
})
