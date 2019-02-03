module.exports = {
  collectCoverageFrom: [
    "components/**/*.tsx",
    "components/__test__/*.tsx",
    "!**/*.d.ts"
  ],
  testMatch: [
    "<rootDir>/components/**/__test__/*.tsx"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$"
  ],
  moduleFileExtensions: [
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "web.js",
    "js",
    "web.jsx",
    "jsx",
    "json",
    "node",
    "mjs"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"]
}