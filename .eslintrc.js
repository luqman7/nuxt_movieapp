module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'no-console': 'off',
    'vue/component-definition-name-casing': 0,
    'vue/this-in-template': 'off',
  },
}
