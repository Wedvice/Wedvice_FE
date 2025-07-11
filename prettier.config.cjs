/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')], // require.resolve 사용
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: true,
  htmlWhitespaceSensitivity: 'css',
  printWidth: 80,
  embeddedLanguageFormatting: 'auto',
};
