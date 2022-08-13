module.exports = {
  "root": true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@nrwl/nx"],
  "extends": ["airbnb", "plugin:@nrwl/nx/typescript", "plugin:@nrwl/nx/javascript"],
  "rules": {
    // nx
    "@nrwl/nx/enforce-module-boundaries": [
      "error",
      {
        "enforceBuildableLibDependency": true,
        "allow": [
          "@web"
        ],
        "depConstraints": [
          {
            "sourceTag": "*",
            "onlyDependOnLibsWithTags": ["*"]
          }
        ]
      }
    ],
    // spacing
    "indent": ["error", 2],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "never"],
    // less stric
    "@typescript-eslint/no-empty-interface": "off",
    // import
    "import/order":  [
      "error",
      {
        "groups": ["builtin", "external", "parent", "sibling", "index"],
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
    "import/extensions": [
      "error",
      "always",
      {
        "ts": "never",
        "tsx": "never",
        "js": "never",
        "jsx": "never",
        "mjs": "never"
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    // others
    "quotes": ["error", "double"]
  }
}
