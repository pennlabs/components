import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { eslint } from 'rollup-plugin-eslint'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types', 'react-dom'],
  plugins: [
    resolve(),
    eslint({
      throwOnError: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      namedExports: {
        'node_modules/classnames/index.js': ['cx'],
      },
    }),
    postcss({
      plugins: [],
    }),
  ],
}
