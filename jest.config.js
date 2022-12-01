module.exports = {
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist',
    '/test',
    '/build'
  ],
  coverageDirectory: 'test/coverage',
};
