import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				game: resolve(__dirname, 'pages', 'game', 'game.html'),
				levels: resolve(__dirname, 'pages', 'levels', 'levels.html'),
				notFound: resolve(__dirname, '404.html')
			}
		},
		target: ['es2015', 'chrome87', 'edge88', 'firefox78', 'safari13'],
		// don't minify for debug builds
		minify: !process.env.DEBUG ? 'esbuild' : false,
		// produce sourcemaps for debug builds
		sourcemap: !!process.env.DEBUG
	},
	base: '/cow-game/',
	css: {
		modules: {
			localsConvention: 'camelCaseOnly'
		}
	}
});
