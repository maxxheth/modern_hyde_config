import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './_pages/**/*.blade.php',
    './resources/views/**/*.blade.php',
    './vendor/hyde/framework/resources/views/**/*.blade.php',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        indigo: {
          500: '#5956eb',
        },
      },
    },
  },
  plugins: [typography],
}
