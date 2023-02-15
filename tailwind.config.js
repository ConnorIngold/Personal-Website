
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // Add your custom fonts and enjoy.
      'Roboto': ["Roboto", "Sans-serif"],
      'Syne': ["Syne", "Sans-serif"],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    borderColor: {
      default: '#1A1918',
    },
    fontSize: {
      'title': ['6rem', {
        "font-family": "Syne",
        "font-style": "normal",
        "font-weight": "500",
        "line-height": "110%",
        "text-transform": "uppercase",
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
    },
    extend: {
      colors: {
        'black': '#1A1918',
      },
    },
  },
  plugins: [],
}