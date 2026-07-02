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
          300: '#B8A5FF',
          400: '#A48BFF',
          500: '#8B6CF6',
          600: '#6F4FDE',
          700: '#5A3FC8',
        },
        mint: {
          DEFAULT: '#39E2A4',
          300: '#5EECC0',
          400: '#39E2A4',
          500: '#1FC98A',
          600: '#15B07A',
        },
        cyan: {
          DEFAULT: '#00D4FF',
          400: '#33DDFF',
          500: '#00D4FF',
          600: '#00A8CC',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-glow': 'linear-gradient(to right, rgba(139,108,246,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,108,246,0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139,108,246,0.45)',
        'glow-mint': '0 0 40px -10px rgba(57,226,164,0.4)',
        'glow-cyan': '0 0 40px -10px rgba(0,212,255,0.4)',
        'card': '0 4px 24px -4px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 40px -4px rgba(139,108,246,0.2)',
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'border-flow': 'borderFlow 3s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(139,108,246,0.3)' },
          '50%': { boxShadow: '0 0 40px -5px rgba(139,108,246,0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
