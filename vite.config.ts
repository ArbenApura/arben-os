import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$assets: path.resolve('./src/assets'),
			$lib: path.resolve('./src/lib'),
			$types: path.resolve('./src/types'),
			$styles: path.resolve('./src/styles'),
			$components: path.resolve('./src/components'),
			$utils: path.resolve('./src/utils'),
			$stores: path.resolve('./src/stores'),
		},
	},
});
