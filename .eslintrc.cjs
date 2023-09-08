module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  
  // ignorePatterns: [], // 👈Define into .eslintignore
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  globals: {
    JSX: true, // 👈Handle: 'JSX' is not defined.eslintno-undef
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'jsx-a11y',
    'import',
  ],
  rules: {
    // 👇react-refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    
    // 👇react-hooks: https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // 👇react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master
    'react/jsx-boolean-value': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'error',
    'react/default-props-match-prop-types': [
      'error',
      {
        'allowRequiredDefaults': true
      }
    ],
    'react/require-default-props': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/sort-comp': [
      1,
      {
        'order': [
          'static-methods',
          'static-variables',
          'instance-variables',
          'type-annotations',
          'lifecycle',
          'everything-else',
          'render'],
        'groups': {
          'lifecycle': [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'getDerivedStateFromError',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 0,
    'react/jsx-one-expression-per-line': [1, { 'allow': 'single-child' }],

    // 👇jsx-a1y: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    // 👇eslint-plugin-import: https://github.com/import-js/eslint-plugin-import
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'internal',
          'external',
          'index',
          'parent',
          'sibling'
        ] 
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 0,
    'import/extensions': 0,

    // 👇eslint: https://eslint.org/docs/latest/rules/
    'array-bracket-spacing': 1,
    'arrow-spacing': 1,
    'arrow-body-style': 0,
    'comma-dangle': 1,
    'comma-spacing': 1,
    'dot-notation': ['error', { 'allowPattern': '^(_[a-z]+)+[a-z]+$' }],
    'func-names': ['error', 'never'],
    'indent': ['warn', 2],
    'keyword-spacing': 1,
    'linebreak-style': 0,
    'no-console': 1,
    'no-unused-vars': 0, // 👈default @typescript-eslint/no-unused-vars: 1
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-multiple-empty-lines': 1,
    'no-unexpected-multiline': 'warn',
    'no-shadow': 0,
    'no-lonely-if': 1,
    'prefer-const': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'object-curly-spacing': [1, 'always'],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      }
    ],
    'quote-props': ['error', 'consistent-as-needed'],
    'wrap-iife': ['error', 'any'],

    // 👇typescript-eslint: https://typescript-eslint.io/rules/
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true
      }
    ],
    '@typescript-eslint/quotes': 'off', // eslint: quotes
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        'functions': false,
        'classes': true,
        'variables': true
      }
    ],
    '@typescript-eslint/space-before-function-paren': 'off', // eslint: space-before-function-paren
  },
}
