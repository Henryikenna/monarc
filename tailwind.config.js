/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        // orbitron: ["Orbitron", ...defaultTheme.fontFamily.sans],
        orbitron: ["Orbitron", "sans-serif"],
        lufga: "Lufga",
      },
    },
    
  },
  plugins: [],
}