/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: 'var(--primary-bg)',
        icon: 'var(--icon)',
        text: 'var(--text)',
        button: 'var(--button)',
        buttonConfirm: 'var(--button-confirm)',
        // primaryBg: 'var(--primary-bg)',
        // secondaryBg: 'var(--secondary-bg)',
        // tertiaryBg: 'var(--tertiary-bg)',
        // textDark: 'var(--text-dark)',
        // textAccent: 'var(--text-accent)',
        // textAccentLight: 'var(--text-accent-light)',
        // textLight: 'var(--text-light)',
        // buttonDark: 'var(--button-dark-bg)',
        // tileBg: 'var(--tile-bg)',
        // secondaryTileBg: 'var(--secondary-tile-bg)',
        // darkTileBg: 'var(--dark-tile-bg)',
        // logoLight: 'var(--logo-light)',
        // logoDark: 'var(--logo-dark)',
      },
    },
  },
  plugins: [],
}