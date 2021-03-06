module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      preset: "ts-jest",
      collectCoverage: true,
      testPathIgnorePatterns: ["/node_modules/", "/dist/"],
    },
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "/coverage/",
        "/reports/",
      ],
    },
    {
      displayName: "lint:eslint",
      runner: "eslint",
      testMatch: [
        "<rootDir>/src/**/*.js",
        "<rootDir>/src/**/*.ts",
        "<rootDir>/src/**/*.tsx",
      ],
    },
  ],
};
