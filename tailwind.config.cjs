/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          600: '#475569',
          800: '#1e293b',
        },
        gray: {
          600: '#4b5563',
        }
      },
      spacing: {
        '1.5': '0.375rem',
      },
      maxWidth: {
        '2xl': '42rem',
        'md': '28rem',
      },
      scale: {
        '102': '1.02',
      },
      backdropBlur: {
        sm: '4px',
      },
      backgroundOpacity: {
        '40': '0.4',
        '90': '0.9',
      }
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(rose|blue|emerald|slate|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(from|to|via)-(rose|blue|emerald|slate|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    'scale-105',
    'scale-102',
    'backdrop-blur-sm',
    'bg-white/40',
    'bg-white/90',
    '-translate-x-12',
    'translate-x-12',
    'transform',
  ]
}