module.exports = {
  ignorePatterns: ['**/*'],
  extends: [
    '../../.eslintrc.js',
    'plugin:@nrwl/nx/react-typescript',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', 'apps/zoopi-web/pages'],
    'react-hooks/exhaustive-deps': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  env: {
    jest: true,
  },
};
