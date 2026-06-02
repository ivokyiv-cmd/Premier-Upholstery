import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#111111',
        'off-white': '#F7F4EF',
        espresso: '#4D2A0F',
        leather: '#8C4F24',
        gold: '#C6A76A',
        'gold-light': '#D4B97C',
        'gold-dark': '#A8894A',
        navy: '#1A2744',
        'navy-mid': '#243360',
        'navy-light': '#2E4080',
        'gray-soft': '#E8E4DE',
        'gray-mid': '#9A9490',
        'gray-dark': '#4A4540',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h4': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        'hover': '0 4px 24px rgba(26,39,68,0.14)',
        'gold': '0 4px 20px rgba(198,167,106,0.25)',
        'modal': '0 8px 48px rgba(0,0,0,0.20)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6A76A 0%, #D4B97C 50%, #A8894A 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1A2744 0%, #243360 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(26,39,68,0.0) 0%, rgba(26,39,68,0.85) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
