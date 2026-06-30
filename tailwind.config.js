/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#08080C',
          900: '#0D0D13',
          850: '#121219',
          800: '#17171F',
          700: '#22222E',
          600: '#34343F',
        },
        ink: {
          100: '#F4F4F7',
          300: '#C7C7D3',
          400: '#9494A6',
          500: '#6E6E82',
        },
        violet: {
          DEFAULT: '#8B6CF6',
          400: '#A48BFF',
          500: '#8B6CF6',
          600: '#6F4FDE',
        },
        mint: {
          DEFAULT: '#39E2A4',
          400: '#39E2A4',
          500: '#1FC98A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139,108,246,0.45)',
        'glow-mint': '0 0 40px -10px rgba(57,226,164,0.4)',
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
