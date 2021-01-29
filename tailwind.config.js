module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#2d334d",
        "light-blue": "#d5d8e0",
        pink: "#ef4e5e",
      },
      backgroundImage: {
        "home-1": "url('images/home-intro.jpg')",
        "pattern-striped": "url('images/pattern-striped.png')",
        "pattern-dots": "url('images/pattern-dot.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
