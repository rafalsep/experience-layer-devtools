module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/node_modules'],
  moduleFileExtensions: ['js', 'jsx'],
  // transform: {
  //   '^.+\\.js$': '<rootDir>/test/jest/setup/jest.transform.js',
  // },
  cacheDirectory: '<rootDir>/tmp/coverage-cache',
  // setupFiles: ['<rootDir>/test/jest/setup/configureEnzyme.js', '<rootDir>/test/jest/setup/configureGlobals.js', '<rootDir>/test/jest/setup/throwConsoleErrors.js'],
  // setupFilesAfterEnv: ['<rootDir>/test/jest/setup/winstonMock.js'],
  // moduleNameMapper: {
  //   '^@sabre/ducp-([^/.]*)/src/(.*)$': '<rootDir>/packages/$1/src/$2',
  //   '^@sabre/ducp-([^/.]*)/lib/(.*)$': '<rootDir>/packages/$1/lib/$2',
  //   '^@sabre/ducp-([^/.]*)/(.*)$': '<rootDir>/packages/$1/src/$2',
  //   '^@sabre/ducp-(.*)$': '<rootDir>/packages/$1/src',
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/packages/lib-jest-config/src/fileMock.js',
  //   '\\.(css|sass|scss|less|styl)$': '<rootDir>/packages/lib-jest-config/src/styleMock.js',
  // },
  testPathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['node_modules'],
};
