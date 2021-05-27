// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverageFrom: ["**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/","<rootDir>/coverage/","<rootDir>/webpack.config.js","<rootDir>/jest.config.js","<rootDir>/src/index.js",
  "<rootDir>/assetsTransformer.js","<rootDir>/setupTests.js","<rootDir>/src/js/auth/","<rootDir>/src/js/services/","<rootDir>/dist/"],
  transform: {
    "^.+\\.js?$": "./node_modules/babel-jest",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './assetsTransformer.js',
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/__mocks__/fileMock.js",
    "src(.*)$": "<rootDir>/src$1",
  },
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
      },
    ],
  ],
  setupFiles: ["./config/setupTests.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};
