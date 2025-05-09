/** @type {import('tailwindcss').Config} */
import typographyPlugin from '@tailwindcss/typography';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          800: '#1F2937',
          900: '#111827',
        },
        red: {
          600: '#DC2626',
          700: '#B91C1C',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        'accent-bold': '900',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      lineHeight: {
        tight: '1.25',
        relaxed: '1.625',
      },
      spacing: {
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '10': '2.5rem',
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: (theme: (arg0: string) => any[]) => ({
        DEFAULT: {
          css: {
            p: {
              lineHeight: theme('lineHeight.relaxed'),
            },
          },
        },
        merriweather: {
          css: {
            '--tw-prose-body': theme('colors.gray.800'),
            '--tw-prose-links': theme('colors.red.700'),
            p: {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.5'),
              lineHeight: theme('lineHeight.relaxed'),
              fontFamily: theme('fontFamily.serif').join(','),
            },

            'h3, h4': {
              fontFamily: theme('fontFamily.sans').join(','),
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.4'),      //
              lineHeight: theme('lineHeight.tight'),            
            },

            'ul > li': {
              marginTop: theme('spacing.3'),
              marginBottom: theme('spacing.3'),
            },
            strong: {
              fontFamily: theme('fontFamily.accent').join(','),
              fontWeight: theme('fontWeight.extrabold'),
              color: theme('colors.gray.900'),
            },

            'h1, h2, h5, h6': {
              fontFamily: theme('fontFamily.sans').join(','),
              color: theme('colors.gray.900'),
            },
          },
        },
        red: {
          css: {
            '--tw-prose-links': theme('colors.red.700'),
            '--tw-prose-quote-borders': theme('colors.red.600'),
          },
        },
      }),
    },
  },
  plugins: [
    typographyPlugin,
  ],
};

module.exports = config;