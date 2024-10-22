/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: { backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #ffffff 50%, #ffc0cb 50%)',
      'cg' : 'linear-gradient(to right, #ffffff 50%, #95d1c6cb 50%)',
    }},
  },
  plugins: [],
}

