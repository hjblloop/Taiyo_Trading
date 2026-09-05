/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        didone: ['"Bodoni Moda"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        colors: {
          'taiyo-gold': '#F0D084',
          'taiyo-cream': '#FDFBF7',
          'warm-gold': '#F3EFE6'
        },
      },
    },
  },
  plugins: [],
}
