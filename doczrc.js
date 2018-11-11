import { css } from 'docz-plugin-css'

export default {
  title: 'Penn Labs Components',
  description: 'A collection of re-useable UI components built using React.',
  dest: '/docs',
  themeConfig: {
    mode: 'dark',
  },
  plugins: [
    css({
      preprocessor: 'postcss',
    }),
  ],
}
