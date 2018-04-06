const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = exports = {
  "extends": [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
  ],
  env: {
      'es6': true,        // We are writing ES6 code
      'browser': true,    // for the browser
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
  },
  "plugins": [
    "jsx-a11y", // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
  ],
  "rules": {
    // Intentional config:
    "no-console": OFF,
    "no-else-return": ERROR,
    "indent": ["error", 2],
    
    // Unintentionally off -- we should fix these, then enable them
    // Looking for a good first PR to contribute to the site?
    // Turn one of these on and fix it up!
    "no-undef": OFF,
    "no-unused-vars": OFF,
    "no-useless-escape": OFF,
    "no-empty": OFF,
  }
}
