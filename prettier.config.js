/** @type {import('prettier').Options} */
module.exports = {
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/tailwind.css',
}
