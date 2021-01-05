const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

export default [
	{
		input: './src/index.js',
		external: ['react', 'react-dom'],
		output: [
			{
				file: 'dist/esm/index.js',
				format: 'esm',
				exports: 'named',
				plugins: []
			},
			{
				file: 'dist/cjs/index.js',
				format: 'cjs',
				exports: 'named',
				plugins: []
			}
		],
		plugins: [
			nodeResolve({}),
			commonjs({
				include: ['./src/**', 'node_modules/**']
			})
		]
	}
]
