module.exports = {
  extends: ['./base.js', './shared.js'].map(require.resolve),
  rules: {
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    'no-await-in-loop': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'class-methods-use-this': 'off',
    eqeqeq: ['error', 'always', { null: 'never' }],
    'no-param-reassign': 'off',
    'max-classes-per-file': 'off',
    'no-loop-func': 'off',
    'prefer-destructuring': 'off',
    'new-cap': [
      'error',
      {
        properties: false,
        capIsNewExceptions: [
          'XRegExp',
          'InputType',
          'Field',
          'ObjectType',
          'Resolver',
          'Root',
          'Arg',
          'InterfaceType',
          'FieldResolver',
          'Query',
          'Ctx',
          'Info',
          'Mutation',
          'Subscription'
        ]
      }
    ],
    'require-await': ['error'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }
    ],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['off'],
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/member-delimiter-style': ['warn'],
    '@typescript-eslint/typedef': 'off'
  }
};
