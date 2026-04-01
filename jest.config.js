module.exports = {
  clearMocks: true,

  // ✅ coverage
  collectCoverage: true,
  coverageDirectory: "coverage",

  // ✅ environment
  testEnvironment: "jsdom",

  // ✅ asset + css handling
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/src/mocks/dummyLogo.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },

  // ✅ transform
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};