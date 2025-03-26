import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        },
    },
    server: {
        host: 'dev-momentia.conects.com', // 혹은 0.0.0.0
        port: 5173,
        https: {
            key: './storage/app/private/certs/STAR.conects.com_key.pem',
            cert: './storage/app/private/certs/STAR.conects.com_crt.pem',
        },

        // CORS 허용
        cors: {
            origin: '*',
        },
    },
});
