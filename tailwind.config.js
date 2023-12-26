/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
      'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      'sans': [
        'Poppins', 'sans-serif'
      ]
    }
  },
  plugins: [
    // require('@tailwindcss/forms'),
      require('preline/plugin'),
  ],
}