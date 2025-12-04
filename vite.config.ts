import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';

// import { getViteConfiguration } from "@incloodsolutions/react-toolkit";

// https://vite.dev/config/
export default defineConfig(configuration => {
	// const timestamp = Date.now().toString();
	const apiUrlsMap = {
		development: 'http://localhost:3033/api/',
		staging: 'https://',
		production: 'https://'
	} as const;

	return {
		define: {
			__BASE_API_URL__: JSON.stringify((apiUrlsMap as any)[configuration.mode]) || apiUrlsMap.development
		},
		mode: 'production',
		plugins: [
			react({
				// https://github.com/vitejs/vite-plugin-react-swc/issues/24
				tsDecorators: true
			}),
			VitePWA({
				injectRegister: 'auto',
				registerType: 'autoUpdate',
				srcDir: 'src',
				mode: 'production',
				manifest: {
					name: 'Locora',
					short_name: 'Locora',
					description: 'From smart creation tools to real-time insights, Locora gives you superpowers.',
					theme_color: '#f56565',
					start_url: '/',
					display_override: ['browser', 'standalone', 'fullscreen', 'minimal-ui', 'window-controls-overlay'],
					// icons: [
					// 	{
					// 		src: 'pwa-192x192.png',
					// 		sizes: '192x192',
					// 		type: 'image/png'
					// 	},
					// 	{
					// 		src: 'pwa-512x512.png',
					// 		sizes: '512x512',
					// 		type: 'image/png'
					// 	}
					// ]
				},
				workbox: { cleanupOutdatedCaches: true }
			})
		],
		build: {
			sourcemap: true,
			rollupOptions: {
				treeshake: 'smallest',
				// logLevel: 'debug',
				output: {
					// entryFileNames: `assets/[name]-${timestamp}-[hash].js`,
					// chunkFileNames: `assets/[name]-${timestamp}-[hash].js`,
					// assetFileNames: `assets/[name]-${timestamp}-[hash].[ext]`,
					manualChunks: moduleId => {
						if (moduleId.includes('node_modules')) {
							const match = moduleId.match(/node_modules\/((@[^/]+\/)?[^/]+)/);
							if (match) {
								const packageName = match[1].replace('/', '-').replace('@', '');
								if (packageName.includes("use") || packageName.includes("hook")) {
									return `chunk-react-hooks`;
								} else if (packageName.includes("radix")) {
									return `chunk-radix-ui`;
								}
								return `chunk-${packageName}`;
							}
						}
					}
				}
			}

		}
	}
});
