module.exports = {
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/main.tsx'],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '(.*).d.ts$'],
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '^@app/(.*)$': '<rootDir>/src/app/$1'
  },
  setupFilesAfterEnv: ['./src/setupTests.ts']
};
