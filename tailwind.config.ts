/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFF0',
        blush: '#FFB6C1',
        gold: '#D4AF37',
        burgundy: '#800020',
        sage: '#9CAF88',
        lavender: '#E6E6FA',
        pearl: '#FDEEF4',
        dark: '#333333',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
        elegant: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/couple-5.jpeg')",
        'floral-texture': "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in forwards',
        'slide-up': 'slideUp 1.2s ease-out forwards',
        'golden-glow': 'goldenGlow 2s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        goldenGlow: {
          '0%': { textShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(212, 175, 55, 0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};