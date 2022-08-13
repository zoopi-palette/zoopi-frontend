module.exports = {
  "extends": [
    "../../eslint/next/.eslintrc.js"
  ],
  "ignorePatterns": ["!**/*"],
  "rules": {
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "apps/zoopi-web/tsconfig.json"
      }
    }
  }
}