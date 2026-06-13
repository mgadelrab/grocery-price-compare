import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: '#10b981', secondary: '#f3f4f6' },
    },
  },
  plugins: [],
}
export default config