
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['hover:bg-Vue', 'hover:bg-React', 'hover:bg-JavaScript', 'hover:bg-Shopify', 'hover:bg-Tailwind', 'hover:bg-Node', 'hover:bg-Express', 'hover:bg-MongoDB', 'hover:bg-GitHub', 'hover:bg-Heroku', 'hover:bg-Vercel'],
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
    extend: {
      colors: {
        'JavaScript': '#f7df1e',
        'Shopify': '#96bf48',
        'Vue': '#42b883',
        'React': '#61dafb',
        'Tailwind': '#38b2ac',
        'Node': '#3c873a',
        'Express': '#430098',
        'MongoDB': '#47a248',
        'GitHub': '#333',
        'Heroku': '#430098',
        'Vercel': '#000'
      },
    },
  },
  plugins: [],
}