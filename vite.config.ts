import { defineConfig } from 'vite';
const { resolve } = require('path');

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                game: resolve(__dirname, 'pages', 'game', 'game.html'),
                levels: resolve(__dirname, 'pages', 'levels', 'levels.html')
            }
        },
        target: [
            'es2015',
            'chrome87',
            'edge88',
            'firefox78',
            'safari13'
        ],
        // don't minify for debug builds
        minify: !process.env.DEBUG ? 'esbuild' : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.DEBUG,
    },
    base: './'
});
