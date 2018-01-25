module.exports = {
  extends: "airbnb-base",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    "no-console": 0,
    "comma-dangle": [2, "never"],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "key-spacing": ["error", {
      "align": {
          "beforeColon": true,
          "afterColon": true,
          "on": "colon"
      }
    }],
    "complexity": ["error", 3],
    "max-depth": ["error", 2],
    "max-nested-callbacks": ["error", 1],
    "max-statements": ["error", 15],
    "max-len": ["error", 100]
  }
};
