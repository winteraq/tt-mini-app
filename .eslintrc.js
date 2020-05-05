module.exports = {
  root: true,
  globals: {
    getApp: false,
    getCurrentPages: false,
    Page: false,
    Component: false,
    App: false,
    wx: false,
    Behavior: false,
  },
  parser: 'babel-eslint',
  plugins: ['prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    quotes: [2, 'single'],
    strict: [2, 'never'],
    'comma-dangle': 'off',
    'array-bracket-newline': [2, 'consistent'],
  },
}
