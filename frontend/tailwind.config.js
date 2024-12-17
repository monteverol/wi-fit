/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: 'var(--primary-bg)',
        secondaryBg: 'var(--secondary-bg)',
        tertiaryBg: 'var(--tertiary-bg)',
        textDark: 'var(--text-dark)',
      },
    },
  },
  plugins: [],
}