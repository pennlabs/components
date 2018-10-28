import { css } from 'docz-plugin-css'

export default {
  title: 'components',
  description: 'A collection of re-useable UI components built using React.',
  dest: '/docs',
  themeConfig: {
    mode: 'dark',
  },
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true,
    }),
  ],
}
