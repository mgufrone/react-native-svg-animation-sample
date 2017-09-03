module.exports = {
    "extends": "airbnb",
    "rules": {
      "no-underscore-dangle": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": [0, null],
      "no-bitwise": ["error", {"allow": ["&",">>","<<"]}]
    }
};
