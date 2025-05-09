/* eslint-disable @typescript-eslint/no-explicit-any */
// /** @type {import('tailwindcss').Config} */
// import typography from '@tailwindcss/typography';
// const config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Montserrat', 'sans-serif'],
//         serif: ['Merriweather', 'serif'],
//         accent: ['Montserrat', 'sans-serif'],
//       },
//       fontWeight: {
//         'accent-bold': '900',
//       },
//       typography: (theme) => ({
//         DEFAULT: {
//           css: {
//             p: {
//               lineHeight: theme('lineHeight.relaxed'),
//             },
//           },
//         },
//         merriweather: {
//           css: {
//             '--tw-prose-body': theme('colors.gray.800'),
//             '--tw-prose-font-family': theme('fontFamily.serif').toString(),
//             p: {
//               marginTop: theme('spacing.5'),
//               marginBottom: theme('spacing.5'),
//               lineHeight: theme('lineHeight.relaxed'),
//             },
//             'ul, ol': {
//               lineHeight: theme('lineHeight.relaxed'),
//             },
//             'h1, h2, h3, h4, h5, h6': {
//               fontFamily: theme('fontFamily.sans').toString(),
//               color: theme('colors.gray.900'),
//             },
//             strong: {
//               fontFamily: theme('fontFamily.accent').toString(),
//               fontWeight: theme('fontWeight.accent-bold', '700'),
//               color: theme('colors.red.700'),
//             },
//             '--tw-prose-links': theme('colors.red.700'),
//           },
//         },
//         red: {
//           css: {
//             '--tw-prose-links': theme('colors.red.700'),
//             '--tw-prose-quote-borders': theme('colors.red.600'),
//           },
//         },
//       }),
//     },
//   },
//   plugins: [
//     typography,
//   ],
// };

// module.exports = config;



/** @type {import('tailwindcss').Config} */
import typographyPlugin from '@tailwindcss/typography'; // Use require for JS file

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { // Assuming you might need to define these if not using defaults extensively
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
        accent: ['Montserrat', 'sans-serif'], // Using Montserrat for accent
      },
      fontWeight: {
        'accent-bold': '900', // For the accent font's bold style
        semibold: '600',     // Standard semibold
        bold: '700',         // Standard bold
        extrabold: '800',    // Standard extrabold
      },
      lineHeight: { // Ensure line heights are available if using custom names
        tight: '1.25',
        relaxed: '1.625',
      },
      spacing: { // Ensure spacing units are available
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '10': '2.5rem',
      },
      typography: (theme: (arg0: string) => any[]) => ({
        DEFAULT: { // Your existing default prose settings
          css: {
            p: {
              lineHeight: theme('lineHeight.relaxed'),
            },
          },
        },
        merriweather: { // This is the prose style for your blog content
          css: {
            '--tw-prose-body': theme('colors.gray.800'),
            // For prose, the base font is usually inherited or set by a CSS variable.
            // If you want to force it here:
            // fontFamily: theme('fontFamily.serif').join(','), // For main body text
            '--tw-prose-links': theme('colors.red.700'), // General link color

            // Paragraphs (main body text within this prose style)
            p: {
              marginTop: theme('spacing.5'),
              marginBottom: theme('spacing.5'),
              lineHeight: theme('lineHeight.relaxed'),
              fontFamily: theme('fontFamily.serif').join(','), // Explicitly set serif for paragraphs
            },

            // Headings (like "Key Architectural Trends:")
            // Assuming these are h3 or h4 in your Markdown
            'h3, h4': {
              fontFamily: theme('fontFamily.sans').join(','), // Montserrat for these subheadings
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'), // Using 'bold' for clarity
              marginTop: theme('spacing.10'),        // More space above
              marginBottom: theme('spacing.4'),      // Space below heading, before list
              lineHeight: theme('lineHeight.tight'), // Tighter line height for headings
            },

            // Lists (ul, ol) and List Items (li)
            'ul > li': {
              marginTop: theme('spacing.3'),
              marginBottom: theme('spacing.3'),
              // paddingLeft: theme('spacing.2'), // Default prose padding might be fine
            },
            // 'ul > li::before': { // Styling the bullet point itself
            //   backgroundColor: theme('colors.gray.400'),
            // },

            // Strong text (bolded text, like "Microservices & Domain-Driven Design (DDD):")
            strong: {
              fontFamily: theme('fontFamily.accent').join(','), // Montserrat for accent
              fontWeight: theme('fontWeight.extrabold'), // Make it stand out
              color: theme('colors.gray.900'), // Darker color
            },

            // Other heading levels within merriweather prose (if needed)
            'h1, h2, h5, h6': {
              fontFamily: theme('fontFamily.sans').join(','),
              color: theme('colors.gray.900'),
            },
          },
        },
        red: { // Your existing 'red' prose modifier
          css: {
            '--tw-prose-links': theme('colors.red.700'),
            '--tw-prose-quote-borders': theme('colors.red.600'),
          },
        },
      }),
    },
  },
  plugins: [
    typographyPlugin, // Use the imported variable
  ],
};

module.exports = config;