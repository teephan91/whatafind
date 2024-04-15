/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      colors: {
        grey: 'hsl(0, 0%, 90.2%)',
        tan: 'hsl(35, 37.3%, 73.7%)',
        darkBrown: 'hsl(20, 49.5%, 21.8%)',
        black: 'hsl(0, 0%, 5.9%)',
      },
    },
  },
  plugins: [],
};
