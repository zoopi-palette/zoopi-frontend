module.exports = {
  root: true,
  ignorePatterns: ['apps/**/*'],
  plugins: ['@nrwl/nx'],
  extends: [
    'airbnb',
    'plugin:@nrwl/nx/typescript',
    'plugin:@nrwl/nx/javascript',
    'prettier',
  ],
  rules: {
    // nx
    '@nrwl/nx/enforce-module-boundaries': [
      'error',
      {
        enforceBuildableLibDependency: true,
        allow: ['@web'],
        depConstraints: [
          {
            sourceTag: '*',
            onlyDependOnLibsWithTags: ['*'],
          },
        ],
      },
    ],
    // formatting
    // pay attention not to make conflict with prettier
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    indent: ['error', 2],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    // less strict
    '@typescript-eslint/no-empty-interface': 'off',
    // import
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
};
