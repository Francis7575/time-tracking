/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-lavender-blue': '#5747EA',
        'soft-lavender-blue': '#7078C9',
        'baby-blue': '#BBC0FF',
        'vivid-orange': '#FF8B64',
        'cyan-blue': '#55C2E6',
        'fuchsia': '#FF5E7D',
        'lime-green': '#4BCF82',
        'dark-purple': '#7335D2',
        'honey': '#F1C75B',
        'white': '#FFF',
        'rich-navy-black': '#0E1323',
        'midnight-navy': '#1C204B',
        'dark-blue': '#33397A'
      },
  },
  plugins: [],
}
}