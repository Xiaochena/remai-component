/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  preset: 'ts-jest',
  // 自动清除 Mock
  clearMocks: true,
  // 开启覆盖率
  collectCoverage: true,
  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
};
