/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  comment: 'This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react',
  mutate: ['src/**/*.ts?(x)', '!src/**/*@(.test|.spec|Spec).ts?(x)'],
  mutator: 'typescript',
  testRunner: 'jest',
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  tsconfigFile: 'tsconfig.json', // Location of your tsconfig.json file,
  transpilers: [
    'typescript' // Specify that your typescript code needs to be transpiled before tests can be run. Not needed if you're using ts-node Just-in-time compilation.
  ],
  jest: {
    projectType: 'create-react-app',
  },
};