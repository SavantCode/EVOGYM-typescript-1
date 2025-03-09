const { default: plugin } = require("tailwindcss");

module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"), // Automatically sorts Tailwind CSS classes
  ],
};
