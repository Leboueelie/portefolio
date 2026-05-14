export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F9F9FA",
        "deep-blue": "#0B3B60",
        "burnt-orange": "#E86A33",
        charcoal: "#1E1E24",
        "green-leaf": "#2A9D8F",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
