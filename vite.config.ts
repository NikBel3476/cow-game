import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rescript from '@jihchi/vite-plugin-rescript';

export default defineConfig({
	plugins: [react(), rescript()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'phaser.html'),
				game: resolve(__dirname, 'pages', 'game', 'game.html'),
				levels: resolve(__dirname, 'pages', 'levels', 'levels.html'),
				phaser: resolve(__dirname, 'pages', 'phaser', 'phaser.html'),
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
