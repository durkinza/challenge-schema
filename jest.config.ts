import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import tsconfig from './tsconfig.json';

const config: Config = {
  preset: 'ts-jest',
  testMatch: ['**/tests/**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
      useESM: true,
    }]
  },
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {prefix: '<rootDir>/'}) || {},
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};

export default config;