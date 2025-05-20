/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // tailwind.config.{js,cjs,mjs,ts,cts,mts}
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: '0px' },
          to: { width: '473px' },
        },
        // cursor: {
        //   '50%': { borderColor: 'transparent' },
        //   '100%': { borderColor: '#7E2EA0' },
        // },
      },
      animation: {
        typing: 'typing 2s steps(12, end) forwards',
        // cursor: 'cursor 0.2s steps(12, end) infinite',
      },
    },
  },
  plugins: [],
}
