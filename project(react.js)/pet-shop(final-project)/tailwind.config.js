/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          primary: '#26c0f0',
          light: '#e8f9ff',
          dark: '#1e9fd9',
        },
        green: {
          primary: '#8dc63f',
          dark: '#79b030',
          light: '#c8e86b',
        },
        gold: '#c8b96e',
        text: {
          primary: '#333',
          secondary: '#555',
          tertiary: '#888',
          dark: '#2a2a2a',
        },
        border: {
          light: '#f0f0f0',
          gray: '#e8e8e8',
        },
      },
      spacing: {
        safe: '15px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
