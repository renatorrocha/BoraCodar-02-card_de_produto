import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        pink_rose: '#D9CDF7',
        light_purple: '#271A45'
      },
      fontFamily: {
        crimsonPro: ['Crimson Pro'],
        lato: ['Lato']
      }
    }
  },
  plugins: []
}
export default config
