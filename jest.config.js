module.exports = {
  moduleNameMapper:{
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFiles: [
    '<rootDir>/enzyme.js',
  ],
}
