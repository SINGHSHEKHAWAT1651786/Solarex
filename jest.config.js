module.exports = {
  clearMocks: true,
  collectcoverage: true,
  coverageDirectory:"coverage",
  testEnvironment: "jsdom",
  moduleNameMapper:{
   "\\.(jpg/png/svg)$": "../mocks/dunmmyLogo.js", 
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};