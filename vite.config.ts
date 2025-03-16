import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
});

// https://vitejs.dev/config/
// export default defineConfig((config) => {
// 	const env = loadEnv(config.mode, process.cwd(), '');
// 	return {
// 		define: {
// 			'process.env': env
// 		},
// 		plugins: [react()],
// 		resolve: {
// 			alias: {
// 				"@corneliusokeke": path.resolve(__dirname, "./src"),
// 			},
// 		},
// 		// build: {
// 		// 	rollupOptions: {
// 		// 		output: {
// 		// 			manualChunks: undefined,

// 		// 			entryFileNames: `assets/gravity_[hash]_[name]_[hash].js`,
// 		// 			chunkFileNames: `assets/gravity_[hash]_[name]_[hash].js`,
// 		// 			assetFileNames: `assets/gravity_[hash]_[name]_[hash].[ext]`
// 		// 		}
// 		// 	},
// 		// 	cssCodeSplit: false,
// 		// }
// 	}

// });