export default {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/*.test.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  setupFilesAfterEnv: ['<rootDir>/tests/config/jest.setup.ts'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
