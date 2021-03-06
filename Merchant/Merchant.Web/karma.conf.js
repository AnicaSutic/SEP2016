// Karma configuration
// Generated on Mon Jun 16 2014 15:04:49 GMT+1000 (AUS Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'scripts/angular/angular.js',
      'scripts/angular/angular-mocks.js',
      'scripts/angular/angular-resource.js',
      'scripts/angular/angular-sanitize.js',
      'scripts/angular/angular-translate.js',
      'scripts/angular/angular-ui-module.js',
      'scripts/angular/angular-ui-router.js',
      'scripts/modules/app.js',
      'scripts/services/riskService.js',
      'scripts/services/translateService.js',
      'scripts/jquery/*.js',
      'scripts/bootstrap/*.js',
      'scripts/jasmine/jasmine.js',
      'scripts/controllers/*.js',
      'TestScripts/*.js'
    ],


    // list of files to exclude
    exclude: [   
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
          'karma-chrome-launcher',
          'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
