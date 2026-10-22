import type {Config} from 'tailwindcss';

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo)', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        text: token('text'),
        muted: token('muted'),
        subtle: token('subtle'),
        label: token('label'),
        faint: token('faint'),
        accent: token('accent'),
        'on-accent': token('on-accent'),
        // shadcn names, kept so the unused ui/ components still resolve until they are pruned
        background: token('bg'),
        foreground: token('text'),
        border: 'rgb(var(--text) / 0.12)',
        input: 'rgb(var(--text) / 0.2)',
        ring: token('accent'),
        card: { DEFAULT: token('surface'), foreground: token('text') },
        popover: { DEFAULT: token('surface'), foreground: token('text') },
        primary: { DEFAULT: token('accent'), foreground: token('on-accent') },
        secondary: { DEFAULT: token('surface'), foreground: token('text') },
        destructive: { DEFAULT: '#ff6b6b', foreground: '#111010' },
      },
      borderRadius: {
        badge: '4px',
        image: '6px',
        card: '8px',
        pill: '100px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
