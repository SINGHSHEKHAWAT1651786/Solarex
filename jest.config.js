module.exports = {
  clearMocks: true,
  collectcoverage: true,
  coverageDirectory:"coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};