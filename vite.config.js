import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@srcRoot': '/src',
            '@assets': '/src/assets',
            '@components': '/src/components',
            '@features': '/src/features',
            '@hooks': '/src/hooks'
        }
    }
})
