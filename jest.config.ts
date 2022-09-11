const { compileOptions} = require('./tsconfig.json')
// const { pathsToModuleNameMapper } = require('ts-jest')

export default {
  coverageProvider: "v8",
  //moduleNameMapper: pathsToModuleNameMapper(compileOptions.paths, { prefix: '<rootDir>'}),
  preset: 'ts-jest'
};
