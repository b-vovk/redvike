module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true
  },
  extends: [
    'plugin:cypress/recommended', 'standard'
  ],
  overrides: [
    {
      env: {
        node: true,
        amd: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    camelcase: 'off',
    'cypress/unsafe-to-chain-command': 'off'
  },
  plugins: [
    '@stylistic/js'
  ]
}
