module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage',
    ],
    client: {
      clearContext: false
    },
    coverageReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['hjhtml', 'spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeCI'],
    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    captureTimeout: 60000,
    singleRun: false,
    restartOnFileChange: true
  });
};
