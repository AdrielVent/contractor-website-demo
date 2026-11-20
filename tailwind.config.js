/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tinos', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Cousine', '"Courier New"', 'ui-monospace', 'monospace'],
      },
      colors: {
        graphite: { DEFAULT: '#1d1f21', line: '#383c40' },
        chalk: '#f3f1ec',
        fog: '#b9b4ab',
        paper: '#f6f3ee',
        sheet: '#fbfaf7',
        ink: '#1f1e1c',
        muted: '#5c5851',
        rule: '#ddd8cf',
        copper: { DEFAULT: '#8f5230', light: '#d29a6d' },
      },
    },
  },
  plugins: [],
};
