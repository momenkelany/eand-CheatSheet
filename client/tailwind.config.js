/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Chart colors map to CSS variables defined in index.css. Each color uses a dynamic function to support Tailwind opacity utilities */
        'chart-1': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-1) / ${opacityValue})` : `hsl(var(--chart-1))`,
        'chart-2': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-2) / ${opacityValue})` : `hsl(var(--chart-2))`,
        'chart-3': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-3) / ${opacityValue})` : `hsl(var(--chart-3))`,
        'chart-4': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-4) / ${opacityValue})` : `hsl(var(--chart-4))`,
        'chart-5': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-5) / ${opacityValue})` : `hsl(var(--chart-5))`,
        'chart-6': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-6) / ${opacityValue})` : `hsl(var(--chart-6))`,
        'chart-7': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-7) / ${opacityValue})` : `hsl(var(--chart-7))`,
        'chart-8': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-8) / ${opacityValue})` : `hsl(var(--chart-8))`,
        'chart-9': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-9) / ${opacityValue})` : `hsl(var(--chart-9))`,
        'chart-10': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-10) / ${opacityValue})` : `hsl(var(--chart-10))`,
        'chart-11': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-11) / ${opacityValue})` : `hsl(var(--chart-11))`,
        'chart-12': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-12) / ${opacityValue})` : `hsl(var(--chart-12))`,
        'chart-13': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-13) / ${opacityValue})` : `hsl(var(--chart-13))`,
        'chart-14': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-14) / ${opacityValue})` : `hsl(var(--chart-14))`,
        'chart-15': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-15) / ${opacityValue})` : `hsl(var(--chart-15))`,
        'chart-16': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-16) / ${opacityValue})` : `hsl(var(--chart-16))`,
        'chart-17': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-17) / ${opacityValue})` : `hsl(var(--chart-17))`,
        'chart-18': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-18) / ${opacityValue})` : `hsl(var(--chart-18))`,
        'chart-19': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-19) / ${opacityValue})` : `hsl(var(--chart-19))`,
        'chart-20': ({ opacityValue }) => opacityValue ? `hsl(var(--chart-20) / ${opacityValue})` : `hsl(var(--chart-20))`,
      },
    },
  },
  plugins: [],
}
